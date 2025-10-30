import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SusGraph } from "./SusGraph";

function SusScrolly() {
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
                left: 20,       // distance from left
                margin: 0,
            }}>쫌쫌따리 예시 (여기 텍스트는 걍 이전거 그대로...)</h2>
            <SusGraph OnStep={step} />
            </div>
        </div>
        <div className="scrolly_narrative_left">
        <section ref={ref1} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView1 ? "active-step" : ""}>
                와일드카드 1차전 공식 예매가 시작된 오후 2시 이후 첫 30분을 살펴보겠습니다.
            </p>
            </div>
        </section>
        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
                30분만에 티켓베이에 <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em",fontWeight: inView2 ? "bold" : "normal"}}>XX개</mark>의 매물이 올라왔습니다.
            </p>
            </div>
        </section>
        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
                그 중 A씨(ID: XXXX)는 <mark style={{color:"white",backgroundColor:"#b90000ff",padding:"0.05em 0.1em",fontWeight: inView3 ? "bold" : "normal"}}>XX개</mark>나 올렸습니다.
            </p>
            </div>
        </section>
        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
                예매 직후 만매에 난선 것은 관람이 목적이 없었다는 정황으로 볼 수 있습니다.
            </p>
            </div>
        </section>
        </div>
    </div>
    );
}

export default SusScrolly;
