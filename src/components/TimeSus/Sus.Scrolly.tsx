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
                2025-10-09T20:42:45Z - 44.05 80초를 살펴보겠다. 
            </p>
            </div>
        </section>
        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
                취재진은 하나 올리는데 <mark style={{color: "white",backgroundColor:"#775496ff",padding:"0.05em 0.1em",fontWeight: inView2 ? "bold" : "normal"}}>40초 걸림.</mark>
            </p>
            </div>
        </section>
        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
                암표상은 80초 안에 <mark style={{color:"white",backgroundColor:"#b90000ff",padding:"0.05em 0.15em",fontWeight: inView3 ? "bold" : "normal"}}>7개</mark>나 올렸습니다.
            </p>
            </div>
        </section>
        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
                빨리빨리 수상수상
            </p>
            </div>
        </section>
        </div>
    </div>
    );
}

export default SusScrolly;
