import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { Seat } from "../types";
import ScrollyStadium from "./ScrollyStadium";

function ScrollytellingStadium() {
  const [activeSeat, setActiveSeat] = useState<Seat | null>(null);

  const seat1: Seat | null = null;
  const seat2: Seat = { x: 796, y: 570, 구역: "SKY 상단지정석" };
  const seat3: Seat = { x: 750, y: 347, 구역: "내야지정석" };

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });

  // ✅ move state update into useEffect
  useEffect(() => {
    if (inView1) setActiveSeat(seat1);
    else if (inView2) setActiveSeat(seat2);
    else if (inView3) setActiveSeat(seat3);
  }, [inView1, inView2, inView3]);

    return (
    <div style={{ display: "flex", gap: "0px"}}>
        {/* Left column: scroll narrative */}
        <div style={{ flex: "0 0 200px" }}>
        <section ref={ref1} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p>Step: 1</p>
            </div>
        </section>

        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p>Step: 2</p>
            </div>
        </section>

        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p>Step: 3</p>
            </div>
        </section>
        </div>

        {/* Right column: sticky chart */}
        <div style={{ position: "sticky", top: "10vh", height: "80vh", flex: 1 , transform:"scale(0.7)"}}>
        <ScrollyStadium
            selectedGameId="1"
            selectedSeat={activeSeat}
            onSelectSeat={setActiveSeat}
        />
        </div>
    </div>
    );
}

export default ScrollytellingStadium;
