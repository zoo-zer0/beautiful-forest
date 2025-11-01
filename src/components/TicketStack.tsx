import { useEffect, useRef } from "react";

export default function TicketStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const images = containerRef.current?.querySelectorAll(".image-container");
    images?.forEach((img) => observer.observe(img));

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (<>
    <style>{`
        .stack-container {
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;  /* ✅ center horizontally */
        position: relative;
        margin-bottom:50px;
        }

        .image-container {
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #ddd;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);

        opacity: 0;
        transform: translateY(40px); /* start hidden lower */
        transition: opacity 0.8s ease, transform 0.8s ease;

        }

        /* Reveal effect */
        .image-container.visible {
        opacity: 1;
        transform: translateY(0) rotate(var(--angle, 0deg)) translateX(var(--offset, 0));
        }

        /* Custom rotations/offsets (use CSS vars so they merge with translateY animation) */
        .image-container:nth-child(1) { --angle: -3deg; --offset: -50; }
        .image-container:nth-child(2) { --angle: 4deg;  --offset: 20px; }
        .image-container:nth-child(3) { --angle: -2deg; --offset: -30px; }
        .image-container:nth-child(4) { --angle: 3deg;  --offset: 40px; }
        .image-container:nth-child(5) { --angle: -3deg; --offset: -20px; }

        .image-container img {
        display: block;
        max-width: 500px; /* set ticket size */
        height: auto;
        }
    `}</style>

    <div className="stack-container" ref={containerRef}>
        {[1, 2, 3, 4, 5].map((n) => (
          <div className="image-container" key={n}>
            <img src={`/img/tickets/${n}.png`} alt={`ticket ${n}`} />
          </div>
        ))}
    </div>
  </>);
}
