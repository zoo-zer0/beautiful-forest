import React from "react";

const DesktopNotice: React.FC = () => {
  const isMobile = window.innerWidth < 720; // or use a more robust detection if needed

  if (!isMobile) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.95)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        textAlign: "center",
        padding: "4rem",
      }}
    >
<h2 style={{ fontSize: "4.5rem", marginBottom: "1rem" }}>
  데스크톱 환경에서 가장 잘 보이는 페이지입니다 💻
</h2>
<p style={{ fontSize: "3.5rem", color: "#555" }}>
  모바일에서는 일부 기능이 제대로 표시되지 않을 수 있습니다.
  <br />
  <a href="https://brunch.co.kr/">브런치</a>에서 스토리를 읽어보세요.
</p>

    </div>
  );
};

export default DesktopNotice;
