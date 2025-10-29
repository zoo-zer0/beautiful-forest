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
            <h1>스크롤리텔링</h1>
            <TimeGraph OnStep={step} />
            </div>
        </div>
        <div className="scrolly_narrative_left">
        <section ref={ref1} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView1 ? "active-step" : ""}>
                XX경기 티켓팅 예매가 시작된 12시 이후 첫 30분을 살펴보겠습니다.
            </p>
            </div>
        </section>
        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
                XX경기 티켓팅 예매가 시작된 12시 이후 첫 30분을 살펴보겠습니다.
            </p>
            </div>
        </section>
        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
                XX경기 티켓팅 예매가 시작된 12시 이후 첫 30분을 살펴보겠습니다.
            </p>
            </div>
        </section>
        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
                XX경기 티켓팅 예매가 시작된 12시 이후 첫 30분을 살펴보겠습니다.
            </p>
            </div>
        </section>
        </div>
    </div>
    );
}

export default TimeScrollytelling;
