import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { Seat } from "../types";
import ScrollyStadium from "./ScrollyStadium";

function ScrollytellingStadium2() {
  const [activeSeat, setActiveSeat] = useState<Seat | null>(null);
  const [activeGameID] = useState<string | null>("6");
  const seat5: Seat | null=null; //hide graph
  const seat6: Seat={ x: 177,y: 318,구역: "네이비석"}

  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.5 });
  const { ref: ref6, inView: inView6 } = useInView({ threshold: 0.5 });

  // ✅ move state update into useEffect
  useEffect(() => {
    if (inView5) setActiveSeat(seat5);
    else if (inView6) setActiveSeat(seat6);
  }, [inView5, inView6]);

    return (
    <div className="scrolly">
        <div style={{top:"50px"}} className="sticky">
      <h2>
         "암표로 인한 문화접근권 제한 - 대중적인 좌석이 비싸지는 문제"
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

export default ScrollytellingStadium2;
