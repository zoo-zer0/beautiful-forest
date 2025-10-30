import { useEffect, useRef } from "react";
import * as d3 from "d3";
interface Props {
  OnStep: number | null;
}

export const TimeGraph: React.FC<Props> = ({ OnStep }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const data = [
        { time: new Date("2025-10-05T14:06:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:07:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:08:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:11:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:11:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:11:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:11:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:13:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:22:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 1 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:30:00Z"), sus: 0 },
    ];
    const color = "rgba(139, 161, 210, 1)";

    const width = 600;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 20, left: 50 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // clear only when OnStep === null
    if (OnStep === null) {
      svg.selectAll("*").remove();
      return;
    }

    // scales
    const x = d3
      .scaleUtc()
      .domain([
        new Date("2025-10-05T14:00:00Z"),
        new Date("2025-10-05T14:30:00Z"),
      ])
      .range([margin.left, width - margin.right]);
    
    // Remove old axis/dots if re-rendering
//    svg.selectAll(".x-axis").remove();
//    svg.selectAll(".dot").remove();

    // Transition settings
    const t = d3.transition().duration(500);

    if (OnStep === 1) {
              svg.selectAll("*").remove();

      // Step 1: Show x-axis only
      const axisGroup = svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .style("opacity", 0)
        .style("stroke-width", 1.5)
        .call(d3.axisBottom(x));
    axisGroup.selectAll("text")
        .style("font-size", "12px")
        .style("font", "sans-serif")
        .style("fill", "#333"); 
      axisGroup.transition(t).call(d3.axisBottom(x)).style("opacity", 1);
    

    //arrow pointing
      const defs = svg.append("defs");

        defs
            .append("marker")
            .attr("id", "arrowhead")
            .attr("viewBox", "0 0 10 10")
            .attr("refX", 5)
            .attr("refY", 5)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M 0 0 L 10 5 L 0 10 z")
            .attr("fill", "#333");

        // Add arrow line (pointing upward near start of x-axis)
        const arrowGroup = svg.append("g").attr("class", "start-arrow");
        const yBase = height-margin.bottom-60;
        arrowGroup
            .append("line")
            .attr("x1", x(new Date("2025-10-05T14:00:00Z")))
            .attr("x2", x(new Date("2025-10-05T14:00:00Z")))
            .attr("y1", yBase +5)
            .attr("y2", yBase +45)
            .attr("stroke", "#333")
            .attr("stroke-width", 2)
            .attr("marker-end", "url(#arrowhead)") // ✅ valid on SVG element
            .style("opacity", 0)
            .transition(t)
            .style("opacity", 1);

        // Add label text above arrow
        arrowGroup
            .append("text")
            .attr("x", x(new Date("2025-10-05T14:00:00Z")) + 4)
            .attr("y", yBase)
            .attr("text-anchor", "start")
            .style("font-size", "13px")
            .style("font-family", "sans-serif")
            .style("fill", "#333")
            .text("예매시작")
            .style("opacity", 0)
            .transition(t)
            .style("opacity", 1);
    }

if (OnStep === 2) {
  // Make sure axis exists (if user skipped to step 2)

  // Group data by time
  const grouped = d3.group(data, (d) => d.time.getTime());
  const stackedData: { time: Date; sus: number; stack: number }[] = [];

  // Assign stack positions for each group
  grouped.forEach((points) => {
    points.forEach((p, i) => {
      stackedData.push({
        time: p.time,
        sus: p.sus,
        stack: i, // 0 = bottom, 1 = above, etc.
      });
    });
  });
  const gap = 13; // distance between stacked dots

  // Step 2: Add dots with transition
  const dots = svg
    .selectAll(".dot")
    .data(stackedData)
    .join("circle")
    .attr("class", "dot")
    .attr("cx", (d) => x(d.time))
    .attr("cy", (d)=>height - margin.bottom -10- d.stack * gap)
    .attr("r", 0)
    .attr("opacity", 0)
    .attr("fill", color);

  dots
    .transition(t)
    .attr("cx", (d) => x(d.time))
    .attr("r",6)
    .attr("opacity", 1)
    .delay((_, i) => i * 3); // staggered appearance
}
if (OnStep==3){
    svg.selectAll<SVGCircleElement, any>(".dot")
        .transition().duration(1000)    .delay((_, i) => i * 3)
        .attr("fill", (d) => (d.sus ? "#b50000ff" : color));
}
  }, [OnStep]);

  return (
    <svg
      ref={svgRef}
      width={600}
      height={600}
      style={{ backgroundColor: "#ffffffff" }}
    />
  );
};
