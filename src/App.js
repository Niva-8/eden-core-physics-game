import React, { useEffect, useRef } from "react";
import { EdenPhysics } from "./engine/edenPhysics";
import { handleInput } from "./engine/motionHandlers";

export default function App() {
  const canvasRef = useRef(null);
  const physics = useRef(null);
  const keys = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    physics.current = new EdenPhysics(canvas);
    let last = 0;

    function loop(t) {
      const dt = (t - last) / 1000;
      last = t;
      physics.current.update(dt, keys.current);
      physics.current.render(ctx);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    window.addEventListener("keydown", e => (keys.current[e.key] = true));
    window.addEventListener("keyup", e => (keys.current[e.key] = false));

    // Touch controls for mobile
    handleInput(keys.current);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at center, #0a0a0a, #000)",
      }}
    />
  );
}
