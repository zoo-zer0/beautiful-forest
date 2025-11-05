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
                준PO 2차전 공식 예매가 시작된 오후 3시 이후 1시간을 살펴보겠습니다. (1시간이 그래프 이쁘게 나옴)
            </p>
            </div>
        </section>
        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
                1시간만에 티켓베이에 <mark style={{backgroundColor:"#bfc4d9ff",padding:"0.05em 0.1em",fontWeight: inView2 ? "bold" : "normal"}}>XX개</mark>의 매물이 올라왔습니다.
            </p>
            </div>
        </section>
        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
                (이건 렌덤으로 찍음) <br></br>
                그 중 A씨(?) 같은 상세 내용(?) <mark style={{color:"white",backgroundColor:"#b90000ff",padding:"0.05em 0.1em",fontWeight: inView3 ? "bold" : "normal"}}>14개</mark>나 올렸습니다.
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

export default TimeScrollytelling;
