import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { Seat } from "../types";
import ScrollyStadium from "./ScrollyStadium";

function ScrollytellingStadium() {
  const [activeSeat, setActiveSeat] = useState<Seat | null>(null);
  const [activeGameID, setActiveGameID] = useState<string | null>("8");
  const seat1: Seat | null = null;
  const seat2: Seat = {x:-100,y:-1000,구역:""}; //show graph //= { x: 149, y: 388, 구역: "SKY 상단지정석" };
  const seat3: Seat | null = null;
  const seat4: Seat = {x:-100,y:-1000,구역:""}; //show graph
  const seat5: Seat | null=null; //hide graph
  const seat6: Seat={ x: 177,y: 318,구역: "네이비석"}

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.5 });
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.5 });

  // ✅ move state update into useEffect
  useEffect(() => {
    if (inView1 || inView2){ //정규시즌 LG
        setActiveGameID("8");
        if (inView1) setActiveSeat(seat1);
        else if (inView2) setActiveSeat(seat2);
    }
    else if (inView3 || inView4 || inView5 || inView6){ // 포스트시즌 LG
         setActiveGameID("6"); 
        if(inView3) setActiveSeat(seat3);
        else if (inView4) setActiveSeat(seat4);
        else if (inView5) setActiveSeat(seat5);
        else if (inView6) setActiveSeat(seat6);
    }
    else{

    }
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

    return (
    <div className="scrolly">
        <div style={{top:"50px"}} className="sticky">
      <h2>
        {(inView5 || inView6)
          ? "암표로 인한 문화접근권 제한 - 대중적인 좌석이 비싸지는 문제"
          : "정규시즌과 포스트시즌 차이"}
      </h2>
            <div className="scrollyStadium">
                <ScrollyStadium
                    selectedGameId={ activeGameID }
                    selectedSeat={activeSeat}
                    onSelectSeat={setActiveSeat}
                />
                </div>
        </div>
        
        <div className="scrolly_narrative_center">
        <section ref={ref1} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView1 ? "active-step" : ""}>
                8월 8~10일, 한화 이글스와 LG 트윈스의 3연전 열린 LG 트윈스의 홈구장 ‘서울종합운동장 야구장’입니다. 
            </p>
            </div>
        </section>

        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
                티켓 리셀 가격이 이미 원가의 
                    300%
                수준으로 형성된 것을 볼 수 있습니다.
            </p>
            </div>
        </section>

        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
                동일 구장임에도, 포스트시즌이 시작되자 프리미엄 비율의 차이가 나타났습니다.
            </p>
            </div>
        </section>

        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
                한국시리즈 1, 2차전 한화 이글스와 LG 트윈스의 LG 홈구장 경기 티켓 리셀 가격은 원가의 
                <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em",fontWeight: inView2 ? "bold" : "normal"}}>
                    540%
                </mark>
                에 달해, 프리미엄 가격이 급증되는 양상을 보였습니다.
            </p>
            </div>
        </section>

        <section ref={ref5} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView5 ? "active-step" : ""}>
                재판매 티켓 가격이 높아지자 야구 경기를 보고 싶어도 보지 못하는 사람들이 생겼습니다.
            </p>
            </div>
        </section>

        <section ref={ref6} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView6 ? "active-step" : ""}>
                외야석에 해당하는 그린지정석, 내야석에 해당하는 블루석, 
                네이비석, 
                레드석은 비교적 가격이 저렴해 관중들의 선호도가 높은 좌석입니다. 
                이 좌석들의 재판매 가격은 모두 20만원이 넘습니다. 이는 프리미엄석 정가보다 비싼 가격입니다.
            </p>
            </div>
        </section>
        </div>


    </div>
    );
}

export default ScrollytellingStadium;
