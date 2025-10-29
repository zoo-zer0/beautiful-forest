import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { Seat } from "../types";
import ScrollyStadium from "./ScrollyStadium";

function ScrollytellingStadium() {
  const [activeSeat, setActiveSeat] = useState<Seat | null>(null);

  const seat1: Seat | null = null;
  const seat2: Seat = { x: 796, y: 570, 구역: "SKY 상단지정석" };
  const seat3: Seat = { x: 750, y: 347, 구역: "내야지정석" };
  const seat4: Seat = { x: 779, y: 549, 구역: "SKY하단지정석"};


  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });

  // ✅ move state update into useEffect
  useEffect(() => {
    if (inView1) setActiveSeat(seat1);
    else if (inView2) setActiveSeat(seat2);
    else if (inView3) setActiveSeat(seat3);
    else if (inView4) setActiveSeat(seat4)
  }, [inView1, inView2, inView3, inView4]);

    return (
    <div className="scrolly">
        <div className="sticky">
            <div className="scrollyStadium">
                <ScrollyStadium
                    selectedGameId="5"
                    selectedSeat={activeSeat}
                    onSelectSeat={setActiveSeat}
                />
                </div>
        </div>
        
        <div className="scrolly_narrative_center">
        <section ref={ref1} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView1 ? "active-step" : ""}>
                Step: 1<br></br>
                플레이오프 구장을 살펴보자
            </p>
            </div>
        </section>

        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
                Step: 2 <br></br>
                여기는 <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em"}}><strong>SKY 상단지정석.</strong> </mark><br></br>
                많이 팔렸네요.
            </p>
            </div>
        </section>

        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
                Step: 3 <br></br>
                여기는 내야지정석. 여기도 많이 팔렸네요
            </p>
            </div>
        </section>

        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
                Step: 4 <br></br>
                여기는 SKY하단지정석. 여기는 원가 25,000원인데 평균 <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em"}}><strong>100,048원</strong></mark>에 팔렸네요 ㅎㄷㄷ
            </p>
            </div>
        </section>

        </div>


    </div>
    );
}

export default ScrollytellingStadium;
