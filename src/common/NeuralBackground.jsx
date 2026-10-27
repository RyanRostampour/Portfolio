import { useEffect, useRef } from "react";

const CONNECT_DIST = 200;
const MOUSE_DIST   = 220;
const REPEL_DIST   = 100;
const BASE_SPEED   = 0.38;

function NeuralBackground() {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -999, y: -999 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    let animId;
    let nodes    = [];
    let lastTime = null;
    const CAP_MS = 14; // ~71fps max — keeps VS Code & Firefox in sync

    function resize() {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initNodes() {
      const count = Math.min(
        Math.max(Math.floor((canvas.width * canvas.height) / 7000), 60),
        130
      );
      nodes = Array.from({ length: count }, () => ({
        x:   Math.random() * canvas.width,
        y:   Math.random() * canvas.height,
        vx:  (Math.random() - 0.5) * BASE_SPEED,
        vy:  (Math.random() - 0.5) * BASE_SPEED,
        r:   Math.random() > 0.88 ? 2.8 : Math.random() > 0.55 ? 2.0 : 1.4,
        dim: Math.random() > 0.6,
      }));
    }

    function getColors() {
      const dark = document.body.dataset.theme === "dark";
      return {
        line:         dark ? "210,225,240"           : "50,50,50",
        nodeA:        dark ? "rgba(235,245,255,1)"   : "rgba(30,30,30,0.9)",
        nodeB:        dark ? "rgba(160,185,210,0.75)": "rgba(90,90,90,0.65)",
        glowA:        dark ? "rgba(255,255,255,0.9)" : "rgba(30,30,30,0.4)",
        glowB:        dark ? "rgba(180,200,220,0.8)" : "rgba(90,90,90,0.3)",
        mouse:        dark ? "255,255,255"           : "20,20,20",
        lineOpacity:  dark ? 0.30 : 0.28,
        mouseOpacity: dark ? 0.60 : 0.55,
      };
    }

    function draw(ts) {
      animId = requestAnimationFrame(draw);

      if (lastTime !== null && ts - lastTime < CAP_MS) return;
      const delta = lastTime !== null ? Math.min((ts - lastTime) / 16.667, 3) : 1;
      lastTime = ts;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { x: mx, y: my } = mouseRef.current;
      const c = getColors();

      for (const n of nodes) {
        const dx   = n.x - mx;
        const dy   = n.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_DIST && dist > 0) {
          const force = ((REPEL_DIST - dist) / REPEL_DIST) * 0.9;
          n.vx += (dx / dist) * force * 0.055 * delta;
          n.vy += (dy / dist) * force * 0.055 * delta;
        }

        const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (spd > BASE_SPEED * 1.4) {
          const damp = Math.pow(0.985, delta);
          n.vx *= damp;
          n.vy *= damp;
        } else if (spd < BASE_SPEED * 0.6) {
          const angle = Math.atan2(n.vy, n.vx);
          n.vx = Math.cos(angle) * BASE_SPEED * 0.8;
          n.vy = Math.sin(angle) * BASE_SPEED * 0.8;
        }

        n.x += n.vx * delta;
        n.y += n.vy * delta;
        if      (n.x < -12)                n.x = canvas.width  + 12;
        else if (n.x > canvas.width  + 12) n.x = -12;
        if      (n.y < -12)                n.y = canvas.height + 12;
        else if (n.y > canvas.height + 12) n.y = -12;
      }

      // Node-to-node connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx   = nodes[i].x - nodes[j].x;
          const dy   = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * c.lineOpacity;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${c.line},${alpha})`;
            ctx.lineWidth   = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse-to-node connections
      for (const n of nodes) {
        const dx   = n.x - mx;
        const dy   = n.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST) {
          const alpha = (1 - dist / MOUSE_DIST) * c.mouseOpacity;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${c.mouse},${alpha})`;
          ctx.lineWidth   = 0.9;
          ctx.moveTo(mx, my);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }

      // Nodes with glow
      ctx.save();
      for (const n of nodes) {
        ctx.shadowBlur  = n.r > 2 ? 16 : 8;
        ctx.shadowColor = n.dim ? c.glowB : c.glowA;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.dim ? c.nodeB : c.nodeA;
        ctx.fill();
      }
      ctx.restore();

    }

    const handleResize     = () => { resize(); initNodes(); };
    const handleMouseMove  = (e) => { mouseRef.current = { x: e.clientX, y: e.clientY }; };
    const handleMouseLeave = ()  => { mouseRef.current = { x: -999, y: -999 }; };

    resize();
    initNodes();
    animId = requestAnimationFrame(draw);

    window.addEventListener("resize",    handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize",    handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}

export default NeuralBackground;
