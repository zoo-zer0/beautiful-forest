import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TimeGraph } from "./TimeGraph";


function TimeScrollytelling() {
  const [step, setStep] = useState<number | null>(null);

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.5 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.5 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.5 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.5 });

  // ✅ move state update into useEffect
  useEffect(() => {
    if (inView1) setStep(1);
    else if (inView2) setStep(2);
    else if (inView3) setStep(3);
    else if (inView4) setStep(4)
  }, [inView1, inView2, inView3, inView4]);

    return (
    <div className="scrolly">
        <div className="sticky_right">
            <div>
            <h2 style={{
                position: "absolute",
                top: 10,        // distance from top of container
                left: 300,       // distance from left
                margin: 0,
            }}>티켓 거래 속에 드러난 수상한 흔적</h2>
            <TimeGraph OnStep={step} />
            </div>
        </div>
        <div className="scrolly_narrative_left">
        <section ref={ref1} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView1 ? "active-step" : ""}>
준플레이오프 2차전 공식 예매가 시작된 오후 3시 이후,  한 시간 사이에 등록된 재판매 티켓 물량을 살펴봤습니다.
             </p>
            </div>
        </section>
        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
단 1시간 만에 1,146개의 매물이 올라왔습니다. 
            </p>
            </div>
        </section>
        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
특히 약 2억 원 상당의 티켓을 등록한 것으로 추정되는 D씨는, 1시간 동안 14개의 티켓을 게시했습니다.
            </p>
            </div>
        </section>
        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
예매 직후 판매에 나선 점으로 미뤄볼 때, 관람 목적이 아닌 <strong>영리 추구</strong>로 해석됩니다.
            </p>
            </div>
        </section>
        </div>
    </div>
    );
}

export default TimeScrollytelling;
