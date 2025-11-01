import { useEffect, useRef } from "react";
import * as d3 from "d3";
interface Props {
  OnStep: number | null;
}

export const SusGraph: React.FC<Props> = ({ OnStep }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
    const width = 650;
    const height = 350;
  useEffect(() => {
    const data = [
        { time: new Date("2025-10-05T14:06:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:07:35Z"), sus: 0 },
{ time: new Date("2025-10-05T14:08:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:04Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:44Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:09:54Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:36Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:45Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:55Z"), sus: 0 },
{ time: new Date("2025-10-05T14:10:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:11:08Z"), sus: 0 },
{ time: new Date("2025-10-05T14:11:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:11:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:11:57Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:01Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:07Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:24Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:12:33Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:11Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:17Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:45Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:13:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:05Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:08Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:14Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:17Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:27Z"), sus: 0 },
{ time: new Date("2025-10-05T14:14:46Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:13Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:17Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:17Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:35Z"), sus: 0 },
{ time: new Date("2025-10-05T14:15:49Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:09Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:09Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:22Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:32Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:53Z"), sus: 0 },
{ time: new Date("2025-10-05T14:16:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:01Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:14Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:16Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:17Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:22Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:31Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:31Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:40Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:42Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:17:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:02Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:07Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:10Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:11Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:32Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:36Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:44Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:46Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:46Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:50Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:50Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:56Z"), sus: 0 },
{ time: new Date("2025-10-05T14:18:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:08Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:11Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:16Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:20Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:27Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:31Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:34Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:38Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:39Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:40Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:44Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:45Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:49Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:54Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:57Z"), sus: 0 },
{ time: new Date("2025-10-05T14:19:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:02Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:06Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:16Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:23Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:24Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:38Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:45Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:55Z"), sus: 0 },
{ time: new Date("2025-10-05T14:20:56Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:02Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:05Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:07Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:10Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:20Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:20Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:20Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:26Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:29Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:31Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:34Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:36Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:38Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:42Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:53Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:53Z"), sus: 0 },
{ time: new Date("2025-10-05T14:21:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:01Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:02Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:04Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:04Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:08Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:08Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:11Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:22Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:23Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:23Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:24Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:24Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:25Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:27Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:29Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:31Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:36Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:36Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:36Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:39Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:41Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:44Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:50Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:53Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:54Z"), sus: 0 },
{ time: new Date("2025-10-05T14:22:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:05Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:06Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:11Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:13Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:16Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:29Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:32Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:32Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:40Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:45Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:46Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:23:55Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:02Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:02Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:04Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:05Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:13Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:14Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:20Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:22Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:22Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:27Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:29Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:35Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:38Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:39Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:50Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:55Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:56Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:24:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:05Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:06Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:09Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:13Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:14Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:22Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:24Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:25Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:26Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:30Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:33Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:34Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:46Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:49Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:25:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:00Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:01Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:05Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:06Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:07Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:08Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:10Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:15Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:20Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:24Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:25Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:26Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:26Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:26Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:27Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:31Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:33Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:33Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:38Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:39Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:40Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:45Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:46Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:55Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:26:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:04Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:05Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:16Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:29Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:29Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:44Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:45Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:46Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:54Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:57Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:27:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:01Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:06Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:06Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:07Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:07Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:08Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:10Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:11Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:11Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:13Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:25Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:26Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:37Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:39Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:44Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:44Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:51Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:53Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:53Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:54Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:56Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:57Z"), sus: 0 },
{ time: new Date("2025-10-05T14:28:58Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:01Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:03Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:06Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:09Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:10Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:10Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:12Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:13Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:16Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:17Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:17Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:18Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:19Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:20Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:21Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:24Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:25Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:26Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:27Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:28Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:29Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:34Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:34Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:34Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:36Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:38Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:38Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:42Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:43Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:47Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:48Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:50Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:52Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:53Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:59Z"), sus: 0 },
{ time: new Date("2025-10-05T14:29:59Z"), sus: 0 },
    ];
    const color = "rgba(40, 67, 126, 0.17)";


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
        new Date("2025-10-05T14:05:00Z"),
        new Date("2025-10-05T14:30:00Z"),
      ])
      .range([margin.left, width - margin.right]);
    
    // Remove old axis/dots if re-rendering
//    svg.selectAll(".x-axis").remove();
//    svg.selectAll(".dot").remove();

    // Transition settings

    if (OnStep === 1) {
              svg.selectAll("*").remove();

      // Step 1: Show x-axis only
      const axisGroup = svg
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${height - margin.bottom})`)
        .style("stroke-width", 1.5)
        .call(d3.axisBottom(x));
    axisGroup.selectAll("text")
        .style("font-size", "12px")
        .style("font", "sans-serif")
        .style("fill", "#333"); 
    

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
            .attr("x1", x(new Date("2025-10-05T14:05:00Z")))
            .attr("x2", x(new Date("2025-10-05T14:05:00Z")))
            .attr("y1", yBase +5)
            .attr("y2", yBase +45)
            .attr("stroke", "#333")
            .attr("stroke-width", 2)
            .attr("marker-end", "url(#arrowhead)") // ✅ valid on SVG element
            .style("opacity", 0)
            .transition().duration(800)
            .style("opacity", 1);

        // Add label text above arrow
        arrowGroup
            .append("text")
            .attr("x", x(new Date("2025-10-05T14:05:00Z")) + 4)
            .attr("y", yBase)
            .attr("text-anchor", "start")
            .style("font-size", "13px")
            .style("font-family", "sans-serif")
            .style("fill", "#333")
            .text("예매시작")
            .style("opacity", 0)
            .transition().duration(800)
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

  // Step 2: Add dots with transition
  const dots = svg
    .selectAll(".dot")
    .data(stackedData)
    .join("circle")
    .attr("class", "dot")
    .attr("cx", (d) => x(d.time))
    .attr("cy", height - margin.bottom -20)
    .attr("r", 1)
    .attr("opacity", 0)
    .attr("fill", color);

  dots
    .transition().duration(600)
    .attr("cx", (d) => x(d.time))
    .attr("r",7)
    .attr("opacity", 1)
    .delay((_, i) => i * 2); // staggered appearance
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
      width={width}
      height={height}
      style={{ backgroundColor: "#ffffffff" }}
    />
  );
};
