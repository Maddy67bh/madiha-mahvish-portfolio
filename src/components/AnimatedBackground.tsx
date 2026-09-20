import { useEffect } from "react";

export default function AnimatedBackground() {
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "mouse-glow";
    document.body.appendChild(glow);

    const move = (event: MouseEvent) => {
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  return (
    <>
      <div className="portfolio-bg">
        <div className="background-light" />
        <div className="background-light-two" />

        <span className="bg-dot" />
        <span className="bg-dot" />
        <span className="bg-dot" />
        <span className="bg-dot" />
        <span className="bg-dot" />

        <div className="background-scan" />
      </div>

      <div className="background-grain" />
    </>
  );
}
