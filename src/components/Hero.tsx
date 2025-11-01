import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const titleRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position:"relative",
        display:"inline-block"
      }}
    >
      {/* background image */}
      <img
        src="./public/img/title.png"
        alt="Hero background"
        style={{
          height: "100vh",
          width: "99vw",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* overlay title */}
      <div style={{
          position: "absolute",
          top: "50%",
          left: "54%",
          textAlign: "center",
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          transform: "translate(-50%,-50%)"
        }}>
      <h1 ref={titleRef} style={{fontSize:"40px", marginBlock:0}}>가지도 않을 표를<br></br> 사는 사람들</h1>
      <p>by Beautiful숲</p>
      </div>
    </div>
  );
}
