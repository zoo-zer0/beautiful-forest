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
  const { ref: ref7, inView: inView7 } = useInView({ threshold: 0.5 });

  // ✅ move state update into useEffect
  useEffect(() => {
    if (inView1 || inView2){ //정규시즌 LG
        setActiveGameID("8");
        if (inView1) setActiveSeat(seat1);
        else if (inView2) setActiveSeat(seat2);
    }
    else if (inView3 || inView4 || inView5 || inView6 || inView7){ // 포스트시즌 LG
         setActiveGameID("6"); 
        if(inView3) setActiveSeat(seat3);
        else if (inView4) setActiveSeat(seat4);
        else if (inView5) setActiveSeat(seat5);
        else if (inView6 || inView7) setActiveSeat(seat6);
    }
    else{

    }
  }, [inView1, inView2, inView3, inView4, inView5, inView6]);

    return (
    <div className="scrolly">
        <div style={{top:"50px"}} className="sticky">
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
8월 8~10일까지 한화 이글스와 LG 트윈스의 3연전이 열린, LG 트윈스의 홈구장 ‘잠실종합운동장 야구장’입니다.            </p>
            </div>
        </section>

        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
월요일을 제외하고 연일 경기가 이어지는 정규 시즌임에도, 티켓 리셀 가격이 원가의 300% 수준에 달했습니다.
            </p>
            </div>
        </section>

        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
포스트시즌이 시작되자, 같은 구장임에도 뚜렷한 차이가 나타났습니다.
            </p>
            </div>
        </section>

        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
한국시리즈 1·2차전이 열린 LG의 홈구장 잠실에서는, 한화 이글스와 LG 트윈스의 경기 티켓 리셀 가격이 원가의 
                <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em",fontWeight: inView4 ? "bold" : "normal"}}>
                    540%
                </mark>
에 달하며 프리미엄이 급등했습니다.
            </p>
            </div>
        </section>

        <section ref={ref5} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView5 ? "active-step" : ""}>
재판매 티켓 가격이 치솟자, 야구를 보고 싶어도 표를 구하지 못하는 팬들이 생겼습니다.
            </p>
            </div>
        </section>

        <section ref={ref6} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView6 ? "active-step" : ""}>
외야석인 그린지정석(원가 3만 5천 원, 프리미엄 비율 619.2%)과 내야석인 블루석(8만 원, 473.6%), 네이비석(5만 원, 562.2%), 레드석(5만5천 원, 517.4%)은 비교적 가격이 합리적이고 시야가 좋아 팬들의 선호도가 높은 좌석입니다.
            </p>
            </div>
        </section>
        <section ref={ref7} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView7 ? "active-step" : ""}>
그러나 이 좌석들의 평균 재판매 가격은 모두 20만원을 넘어, 프리미엄석 정가(16만 원)보다도 높게 형성됐습니다. 일반 관중이 가장 선호하는 ‘가성비 좌석’이 사실상 사라지며, 야구 관람의 문턱이 높아지고 있습니다.            </p>
            </div>
        </section>
        </div>


    </div>
    );
}

export default ScrollytellingStadium;
