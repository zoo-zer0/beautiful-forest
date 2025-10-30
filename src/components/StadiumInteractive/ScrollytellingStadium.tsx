import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { Seat } from "../types";
import ScrollyStadium from "./ScrollyStadium";

function ScrollytellingStadium() {
  const [activeSeat, setActiveSeat] = useState<Seat | null>(null);
  const [activeGameID, setActiveGameID] = useState<string | null>("5");
  const seat1: Seat | null = null;
  const seat2: Seat = { x: 149, y: 388, 구역: "SKY 상단지정석" };
  const seat3: Seat = { x: 240, y: 296, 구역: "내야지정석" };
  const seat4: Seat = { x: 174, y: 320, 구역: "SKY하단지정석"};
  const seat5: Seat | null=null;
  const seat6: Seat={ x: 247,y: 135,구역: "외야 지정석"}

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.5 });
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.5 });

  // ✅ move state update into useEffect
  useEffect(() => {
    if (inView1 || inView2 || inView3 || inView4){
        setActiveGameID("5");
        if (inView1) setActiveSeat(seat1);
        else if (inView2) setActiveSeat(seat2);
        else if (inView3) setActiveSeat(seat3);
        else if (inView4) setActiveSeat(seat4);
    }
    else if (inView5 || inView6){
         setActiveGameID("4");
        if(inView5) setActiveSeat(seat5);
        else if (inView6) setActiveSeat(seat6);
    }
    else{

    }
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

    return (
    <div className="scrolly">
        <div style={{top:"150px"}} className="sticky">
            <h2>현황(?)</h2>
            <div className="scrollyStadium">
                <ScrollyStadium
                    selectedGameId={ activeGameID }
                    selectedSeat={activeSeat}
                    onSelectSeat={setActiveSeat}
                />
                </div>
        </div>
        
        <div className="scrolly_narrative_center">
        <section ref={ref1} style={{marginTop:"-50vh", height: "100vh"}}>
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
                여기는 <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em",fontWeight: inView2 ? "bold" : "normal"}}>SKY 상단지정석. </mark><br></br>
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
                여기는 SKY하단지정석. 여기는 원가 25,000원인데 평균 <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em",fontWeight: inView4 ? "bold" : "normal"}}>100,048원</mark>에 팔렸네요 ㅎㄷㄷ
            </p>
            </div>
        </section>

        <section ref={ref5} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView5 ? "active-step" : ""}>
                Step: 5 <br></br>
                플레이오프 한화 구장을 살펴보자
            </p>
            </div>
        </section>

        <section ref={ref6} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView6 ? "active-step" : ""}>
                Step: 6 <br></br>
                외야 지정석은 이럼.
            </p>
            </div>
        </section>
        </div>


    </div>
    );
}

export default ScrollytellingStadium;
