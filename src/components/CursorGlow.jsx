import { useEffect, useRef } from "react";

/**
 * Custom cursor effect:
 *  - a small dot that tracks the pointer exactly
 *  - a large soft orange glow that trails behind with easing
 * Desktop only (hidden on touch / small screens).
 */
export default function CursorGlow() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let gx = mx;
    let gy = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px)`;
      }
    };

    const loop = () => {
      // ease the glow toward the pointer for a trailing feel
      gx += (mx - gx) * 0.12;
      gy += (my - gy) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx}px, ${gy}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none">
      {/* trailing soft glow */}
      <div ref={glowRef} className="fixed top-0 left-0 z-[60]">
        <div className="w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[90px]" />
      </div>
      {/* precise dot */}
      <div ref={dotRef} className="fixed top-0 left-0 z-[61]">
        <div className="w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>
    </div>
  );
}
