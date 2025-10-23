import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { Game, Seat, CategoryInfo } from "../types";
import { colorPalette } from "../colors";
import { categoryData } from "./data/category";
/*interface Bin {
    x0: number;
    x1: number;
    count: number;
}*/
const seatCategories = [
  "SKY 상단지정석",
  "SKY요기보패밀리존",
  "SKY하단지정석",
  "VIP석",
  "내야지정석",
  "내야테이블석",
  "루프탑 테이블석",
  "블루존",
  "스윗박스",
  "외야지정석",
  "외야커플테이블석",
  "외야테이블석",
  "외야패밀리석",
  "원정응원석",
  "익사이팅석",
  "잔디그린존",
  "중앙 SKY 상단지정석",
  "중앙 SKY하단지정석",
  "중앙테이블석",
  "캠핑존",
  "파티플로어라이브",
];

// helper to generate 10 bins per seat over a large range
function generateBins(minPrice: number, maxPrice: number): { name: string; value: number; breakdown: Record<string, string> }[] {
  const bins = [];
  const step = Math.floor((maxPrice - minPrice) / 20);
  for (let i = 0; i < 20; i++) {
    const x0 = minPrice + i * step;
    const x1 = x0 + step;
    const value = Math.floor(Math.random() * 500); // random ticket count
    bins.push({
      name: `${x0}~${x1}원`,
      value,
      breakdown: {
        가격범위: `${x0}~${x1}원`,
        건수: `${value}건`,
      },
    });
  }
  return bins;
}

// generate sample data
const sampleTicketData: Record<string, Record<string, { name: string; value: number; breakdown: Record<string, string> }[]>> = {
  "1": {},
  "2": {},
};

seatCategories.forEach((seat) => {
  sampleTicketData["1"][seat] = generateBins(20000, 220000);
  sampleTicketData["2"][seat] = generateBins(20000, 220000);
});

console.log(sampleTicketData);



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

        const svg = d3.select(ref.current);
        svg.selectAll("*").remove();
        const width = 600;
        const height = 400;
        const margin = {top: 20, right: 20, bottom: 60, left: 60};
        const primaryColor = colorPalette.primary;
        const secondaryColor = colorPalette.secondary;
        if (selectedSeat===null){
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
                    {key: "평균_원가", value: d.평균_원가},
                    {key: "평균_가격", value: d.평균_가격}
                ])
                .enter().append("rect")
                  .attr("x", d => x1(d.key)!)
                  .attr("y", d => y(d.value))
                  .attr("width", x1.bandwidth())
                  .attr("height", d => y(0) - y(d.value))
                  .attr("fill", d => color(d.key)!);
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
                .attr("transform", `translate(${width - margin.right - 150},${margin.top})`);

            ["평균_원가", "평균_가격"].forEach((key, i) => {
                legend.append("rect")
                .attr("x", 0).attr("y", i * 20)
                .attr("width", 12).attr("height", 12)
                .attr("fill", color(key)!);

                legend.append("text")
                .attr("x", 20).attr("y", i * 20 + 10)
                .attr("alignment-baseline", "middle")
                .style("font-size", "13px")
                .text(key);
        });
        } else {
            const chartData = sampleTicketData[game.id]?.[selectedSeat.구역] || [];

            if (chartData.length === 0) return;

            // x & y scales
            const x = d3
                .scaleBand()
                .domain(chartData.map(d => d.name))
                .range([margin.left, width - margin.right])
                .padding(0.01);

            const y = d3
                .scaleLinear()
                .domain([0, d3.max(chartData, d => d.value)! * 1.1])
                .nice()
                .range([height - margin.bottom, margin.top]);

            // Tooltip
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

            // Bars
            svg.selectAll("rect")
                .data(chartData)
                .enter()
                .append("rect")
                .attr("x", d => x(d.name)!)
                .attr("y", d => y(d.value))
                .attr("width", x.bandwidth())
                .attr("height", d => y(0) - y(d.value))
                .attr("fill", primaryColor)
                .on("mouseover", function (_event, d) {
                    d3.select(this).attr("fill", colorPalette.secondary);

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
                    d3.select(this).attr("fill", primaryColor);
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
                .text(`${selectedSeat.구역} 재판매 가격 분포`);            
        }
    }, [game, selectedSeat, categoryData]);
    return <svg ref={ref} width={600} height={400} style={{ backgroundColor: "#f9f9f9" }}></svg>;

}