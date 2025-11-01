import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { Game, Seat, CategoryInfo } from "../types";
import { stadiumColors } from "../colors";

interface Props {
  game: Game | null;
  stadiumData: Record<string, Seat[]>;
  categoryData: Record<string, CategoryInfo[]>;
  selectedSeat: Seat | null; // <--- add this
  onSelect: (seat: Seat | null) => void;
}

export const StadiumChart: React.FC<Props> = ({ game, stadiumData, categoryData, selectedSeat, onSelect }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 400;
  const height = width;
useEffect(() => {

  if (!game || !svgRef.current) return;
  d3.selectAll(".tooltip-chart, .tooltip-selected").remove();

  const tooltip = d3
                  .select("body")
                  .append("div").attr("class","tooltip-chart")
                  .style("position", "absolute")
                  .style("background", "rgba(0, 0, 0, 0.7)")
                  .style("color", "white")
                  .style("padding", "6px 10px")
                  .style("border-radius", "4px")
                  .style("font-size", "12px")
                  .style("z-index","10")
                  .style("visibility", "hidden");
  const data = stadiumData[game.stadium] || [];
  const category = categoryData[game.id] || [];

  
//  const tooltip = d3.select("#tooltip");
  const tooltipSelected = d3
                  .select("body")
                  .append("div").attr("class","tooltip-selected")
                  .style("position", "absolute")
                  .style("background", "rgba(0, 0, 0, 0.7)")
                  .style("color", "white")
                  .style("padding", "6px 10px")
                  .style("border-radius", "4px")
                  .style("font-size", "12px")
                  .style("visibility", "hidden");

//  const tooltipSelected = d3.select('#tooltip-selected');
  const svg = d3.select(svgRef.current);

  svg.selectAll("*").remove(); // clear previous
  
  svg.attr("style","")
    .style("background", `url('/img/stadiums/${game.stadium}.png`)
    .style("background-size", "cover");
  let selectedSeat: Seat | null = null; // <-- NEW
  
  // add stadium image as background
  svg
    .style("background", `url('/img/stadiums/${game.stadium}.png')`)
    .style("background-size", "cover");

  const xScale = d3.scaleLinear().domain([0, 950]).range([0, width]);
  const yScale = d3.scaleLinear().domain([0, 950]).range([0, height]);

  const colorByCategory = new Map(
    category.map(c => [c.카테고리, c["가격/원가 비율 (%)"]])
  );

  const stadiumColor = stadiumColors[game.stadium] || "red";
  const colorScale = d3.scaleLinear<string>().domain([100, 800]).range(["white", stadiumColor]);

  svg
    .selectAll<SVGCircleElement, Seat>("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("id",d=>`${d.x}-${d.y}`)
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 5.5)
    .attr("fill", d => {
      const val = colorByCategory.get(d.구역);
      return val !== undefined ? colorScale(val) : "#ccc";
    })
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .on("mouseover", function (event, d) {
      if (selectedSeat?.구역=== d.구역) return; // don't hover-highlight selected seat

      const info = category.find(p => p.카테고리 === d.구역);
      tooltip
        .style("visibility", "visible")
        .html(`
          <strong>구역:</strong> ${d.구역}<br>
          <strong>거래가격/원가 비율:</strong> ${info ? info["가격/원가 비율 (%)"] : "N/A"}%<br>
          <strong>원가:</strong> ${info ? Number(info["평균_원가"]).toLocaleString() : "N/A"}원<br>
          <strong>평균 거래가격:</strong> ${info ? Number(info["평균_가격"]).toLocaleString() : "N/A"}원<br>
          <strong>중앙 거래가격:</strong> ${info ? Number(info["중앙_가격"]).toLocaleString() : "N/A"}원<br>
          <strong>재판매 좌석 개수:</strong> ${info ? info["좌석_개수"] : "N/A"}개
        `)
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 20 + "px");

      svg
        .selectAll<SVGCircleElement, Seat>("circle")
        .filter(p => p.구역 === d.구역)
        .attr("stroke-width", 3);
    })
    .on("mousemove", function (event, d) {
      if (selectedSeat?.구역 !==d.구역) {
        tooltip
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 20 + "px");
      }
    })
    .on("mouseout", function (_event , d) {
      

        if (selectedSeat?.구역 === d.구역) return;
      
        // Revert hovered circle stroke
        svg
          .selectAll<SVGCircleElement, Seat>("circle")
          .filter(p => p.구역 === d.구역)
          .attr("stroke-width", 1.5);

        tooltip.style("visibility", "hidden");      
    })
    .on("click", function (event, d) {
      onSelect(d);

      // Clear previous selection
      if (selectedSeat?.구역  === d.구역) {
        // Clicking again deselects
        selectedSeat = null;
        tooltip.style("visibility", "hidden");
        svg.selectAll<SVGCircleElement, Seat>("circle").attr("stroke-width", 1.5);
        return;
      }

      selectedSeat = d;
      const info = category.find(p => p.카테고리 === d.구역);
      tooltip.style("visibility", "hidden");
      // Keep tooltip visible at that spot
      tooltipSelected
        .style("visibility", "visible")
        .html(`
          <strong>구역:</strong> ${d.구역}<br>
          <strong>거래가격/원가 비율:</strong> ${info ? info["가격/원가 비율 (%)"] : "N/A"}%<br>
          <strong>원가:</strong> ${info ? Number(info["평균_원가"]).toLocaleString() : "N/A"}원<br>
          <strong>평균 거래가격:</strong> ${info ? Number(info["평균_가격"]).toLocaleString() : "N/A"}원<br>
          <strong>중앙 거래가격:</strong> ${info ? Number(info["중앙_가격"]).toLocaleString() : "N/A"}원<br>
          <strong>재판매 좌석 개수:</strong> ${info ? info["좌석_개수"] : "N/A"}개
        `)
        .style("left", event.pageX + 10 + "px")
        .style("top", event.pageY - 20 + "px");

      svg.selectAll<SVGCircleElement, Seat>("circle").attr("stroke-width", 1.5);
      svg
        .selectAll<SVGCircleElement, Seat>("circle")
        .filter(p => p.구역 === d.구역)
        .attr("stroke-width", 3);

    });
  //handle click outside
    const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest("circle")) {
      onSelect(null); // deselect seat

    }
    // If click is NOT on a circle
    if (!target.closest("circle")) {
      selectedSeat = null;
      tooltipSelected.style("visibility", "hidden");
      svg.selectAll<SVGCircleElement, Seat>("circle").attr("stroke-width", 1.5);
    }
    };
    document.addEventListener("click", handleClickOutside);
    return ()=>{
    document.removeEventListener("click", handleClickOutside);
    };
}, [game?.id, stadiumData, categoryData, onSelect]);
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    // Reset all circles to normal stroke
    svg.selectAll<SVGCircleElement, Seat>("circle")
    .attr("stroke", "#ffffffff")
    .attr("stroke-width", 1.5);

    // Highlight selected seat (by section name)
    if (selectedSeat) {
      svg.selectAll<SVGCircleElement, Seat>("circle")
        .filter(d => d.구역 === selectedSeat.구역)
        .attr("stroke-width", 3)
        .attr("stroke", "#fcffc6ff");
    }
  }, [selectedSeat]);


  return <> <svg ref={svgRef} width={width} height={height} style={{ backgroundColor: "#eee" }} /> </>;
};
