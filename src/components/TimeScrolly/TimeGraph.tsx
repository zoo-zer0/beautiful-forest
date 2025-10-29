import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface Props {
    OnStep: number | null;
}

export const TimeGraph: React.FC<Props> = ({ OnStep }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
    useEffect(() => {

//        const width = 700;
//        const height = 500;
        const svg = d3.select(svgRef.current);
        svg.text(`${OnStep}`);
    });

  return <> <svg ref={svgRef} width={700} height={500} style={{ backgroundColor: "#eee" }} /> </>;
};
