import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { Game, Seat, CategoryInfo } from "../types";
import { colorPalette, stadiumColors } from "../colors";
import { categoryData } from "./data/category";
import { ticketData } from "./data/tickets";
import type { TicketData } from "./data/tickets";



interface Props {
  game: Game | null;
  categoryData: Record<string, CategoryInfo[]>;
//  ticketData: Record<string, Record<string, Bin[]>>;
  selectedSeat: Seat | null;
}

export const StadiumGraph: React.FC<Props> = ({ game, selectedSeat}) =>{
    const ref = useRef<SVGSVGElement | null>(null);
    useEffect(()=>{
        if(!game || !ref.current) return;
        
        const tooltip = d3
                .select("body")
                .append("div")
                .style("position", "absolute")
                .style("background", "white")
                .style("padding", "8px 12px")
                .style("border", "1px solid #ccc")
                .style("border-radius", "6px")
                .style("box-shadow", "0 2px 6px rgba(0,0,0,0.15)")
                .style("font-size", "13px")
                .style("visibility", "hidden")
                .style("white-space", "pre-line");

        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();
        const width = 600;
        const height = 500;
        const margin = {top: 20, right: 20, bottom: 60, left: 60};
        const primaryColor = colorPalette.primary;
        const secondaryColor = colorPalette.secondary;
        if (selectedSeat===null){
            const labelMap: Record<string, string> = {
            "평균_원가": "원가",
            "평균_가격": "평균 거래가"
            };

            //make game-level grouped bar chart
            const data = categoryData[game.id] || [];
            const x0 = d3.scaleBand()
                .domain(data.map(d=>d.카테고리))
                .range([margin.left, width-margin.right])
                .paddingInner(0.2);
            const x1 = d3.scaleBand()
                .domain(['평균_원가', "평균_가격"])
                .range([0, x0.bandwidth()])
                .padding(0.1);
            const y = d3.scaleLinear()
                .domain([0, d3.max(data, d=>Math.max(d.평균_가격, d.평균_원가))! * 1.1])
                .nice()
                .range([height-margin.bottom, margin.top]);
            const color = d3.scaleOrdinal<string>()
                .domain(["평균_원가", "평균_가격"])
                .range([primaryColor, secondaryColor]);
            
            svg.append("g")
                .selectAll("g")
                .data(data)
                .enter().append("g")
                    .attr("transform", d=> `translate(${x0(d.카테고리)}, 0)`)
                .selectAll("rect")
                .data(d=>[
                    {key: "평균_원가", value: d.평균_원가, category:d.카테고리},
                    {key: "평균_가격", value: d.평균_가격, category:d.카테고리}
                ])
                .enter().append("rect")
                  .attr("x", d => x1(d.key)!)
                  .attr("y", d => y(d.value))
                  .attr("width", x1.bandwidth())
                  .attr("height", d => y(0) - y(d.value))
                  .attr("fill", d => color(d.key)!)
                    .on("mouseover", function (_event, d) {
                        d3.select(this).attr("fill", d3.color(color(d.key)!)!.brighter(0.9).toString());
                        tooltip.style("visibility", "visible").html
                        (`<strong>${d.category}</strong>
                            <strong>${labelMap[d.key]}:</strong> ${d.value}원    
                        `);
                    })
                    .on("mousemove", function (event) {
                        tooltip.style("top", event.pageY - 40 + "px").style("left", event.pageX + 15 + "px");
                    })
                    .on("mouseout", function (_event,d) {
                        d3.select(this).attr("fill", color(d.key)!);
                        tooltip.style("visibility", "hidden");
                    });
            svg.append("g")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x0))
                .selectAll("text")
                .attr("transform", "rotate(-30)")
                .style("text-anchor", "end");

            svg.append("g")
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y));

            // Legend
            const legend = svg.append("g")
                .attr("transform", `translate(${width - margin.right - 100},${margin.top+10})`);

            ["평균_원가", "평균_가격"].forEach((key, i) => {
                legend.append("rect")
                .attr("x", 0).attr("y", i * 20)
                .attr("width", 12).attr("height", 12)
                .attr("fill", color(key)!);

                legend.append("text")
                .attr("x", 20).attr("y", i * 20 + 10)
                .attr("alignment-baseline", "middle")
                .style("font-size", "13px")
                .text(labelMap[key]);
            svg.append("text")
                .attr("x", width / 2)
                .attr("y", margin.top)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text(`${game.title}: 구역별 원가 vs 평균 거래 가격`);  
        });
        } else {
            const chartData: TicketData = ticketData;
            const seatCategory = selectedSeat.구역;

            const bins = chartData[game.id]?.[seatCategory];
            if(!bins || bins.length === 0) return;
            

            // x & y scales
            const x = d3
                .scaleBand()
                .domain(bins.map(d => d.name))
                .range([margin.left, width - margin.right])
                .padding(0.01);

            const y = d3
                .scaleLinear()
                .domain([0, 120])
                .nice()
                .range([height - margin.bottom, margin.top]);

            // Tooltip
            const rectColor = stadiumColors[`${game.stadium}`];
            // Bars
            svg.selectAll("rect")
                .data(bins)
                .enter()
                .append("rect")
                .attr("x", d => x(d.name)!)
                .attr("y", d => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", d => y(0) - y(d.value))
                .attr("fill", rectColor)
                .on("mouseover", function (_event, d) {
                    d3.select(this).attr("fill", d3.color(rectColor)!.brighter(0.9).toString());

                    let content = ``;
                    if (d.breakdown) {
                        const breakdownText = Object.entries(d.breakdown)
                            .map(([key, val]) => `${key}: ${val}`)
                            .join("\n");
                        content += `${breakdownText}`;
                    }
                    tooltip.style("visibility", "visible").text(content);
                })
                .on("mousemove", function (event) {
                    tooltip.style("top", event.pageY - 40 + "px").style("left", event.pageX + 15 + "px");
                })
                .on("mouseout", function () {
                    d3.select(this).attr("fill", rectColor);
                    tooltip.style("visibility", "hidden");
                });

            // x-axis
            svg.append("g")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "rotate(-30)")
                .style("text-anchor", "end");

            // y-axis
            svg.append("g")
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y));

            // Title
            svg.append("text")
                .attr("x", width / 2)
                .attr("y", margin.top)
                .attr("text-anchor", "middle")
                .style("font-size", "16px")
                .text(`${game.title}: ${selectedSeat.구역} 재판매 가격 분포`);            
        }
    }, [game, selectedSeat, categoryData]);
    return <svg ref={ref} width={600} height={500} style={{ backgroundColor: "#f9f9f9" }}></svg>;

}