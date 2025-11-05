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
            }}></h2>
            <SusGraph OnStep={step} />
            </div>
        </div>
        <div className="scrolly_narrative_left">
        <section ref={ref1} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView1 ? "active-step" : ""}>
업로드 시점을 좀 더 들여다보았을 때, 10월 9일 오후 8시 42분 45초부터 44분 5초 사이 특이한 점을 발견했습니다. 
            </p>
            </div>
        </section>
        <section ref={ref2} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView2 ? "active-step" : ""}>
취재진이 직접 업로드를 시도한 결과, 티켓 1장을 등록하는 데 약 40초가 소요됐습니다. 같은 시간에 최대 2개의 매물만 게시할 수 있었습니다.
            </p>
            </div>
        </section>
        <section ref={ref3} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView3 ? "active-step" : ""}>
그러나 D씨는<strong>불과 80초 만에 7개</strong>의 매물을 올렸습니다.
            </p>
            </div>
        </section>
        <section ref={ref4} style={{ height: "100vh"}}>
            <div className="scroll-box">
            <p className={inView4 ? "active-step" : ""}>
<strong>매크로(자동 입력 프로그램)</strong>를 이용했을 가능성이 높은 대목입니다.
            </p>
            </div>
        </section>
        </div>
    </div>
    );
}

export default SusScrolly;
