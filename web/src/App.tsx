import { useEffect, useState } from "react";
import { Shell } from "./components/Shell";

const COUNT_KEY = "counter:count";

function loadCount(): number {
  const n = Number(localStorage.getItem(COUNT_KEY));
  return Number.isFinite(n) ? n : 0;
}

export default function App() {
  const [count, setCount] = useState(loadCount);

  useEffect(() => {
    localStorage.setItem(COUNT_KEY, String(count));
  }, [count]);

  const small = {
    padding: "0.75rem 1.5rem",
    borderRadius: "999px",
    border: "1px solid var(--line-strong)",
    background: "var(--panel)",
    color: "var(--ink)",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
  } as const;

  return (
    <Shell>
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
          padding: "1rem 0",
        }}
      >
        <button
          type="button"
          aria-label={`Count ${count}. Tap to add one`}
          onClick={() => setCount((c) => c + 1)}
          style={{
            width: "min(16rem, 70vw)",
            aspectRatio: "1",
            borderRadius: "50%",
            border: "none",
            background: "var(--accent)",
            color: "#fff",
            fontFamily: "ui-monospace, SF Mono, Menlo, monospace",
            fontSize: "clamp(3rem, 16vw, 5rem)",
            fontVariantNumeric: "tabular-nums",
            fontWeight: 700,
            cursor: "pointer",
            touchAction: "manipulation",
            userSelect: "none",
          }}
        >
          {count}
        </button>
        <p style={{ color: "var(--muted)", margin: 0 }}>Tap the circle to count.</p>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <button type="button" style={small} onClick={() => setCount((c) => c - 1)}>
            −1
          </button>
          <button
            type="button"
            style={small}
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </Shell>
  );
}
