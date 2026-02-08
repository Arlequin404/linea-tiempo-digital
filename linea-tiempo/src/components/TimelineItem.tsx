import Reveal from "./Reveal";
import type { TimelineItem as Item } from "../data/timelineData";

const TimelineItem = ({
  item,
  side,
}: {
  item: Item;
  side: "left" | "right";
}) => {
  return (
    <Reveal>
      <div style={{ position: "relative" }}>
        {/* 🔵 NODO CENTRAL */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "40px",
            transform: "translateX(-50%)",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            background:
              item.country === "ec"
                ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                : "linear-gradient(135deg, #22c55e, #4ade80)",
            boxShadow:
              item.country === "ec"
                ? "0 0 12px rgba(59,130,246,0.6)"
                : "0 0 12px rgba(34,197,94,0.6)",
            zIndex: 2,
          }}
        />

        {/* CARD */}
        <div
          style={{
            display: "flex",
            justifyContent: side === "left" ? "flex-end" : "flex-start",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              width: "420px",
              background: "rgba(255,255,255,0.05)",
              borderRadius: "20px",
              padding: "28px",
              border:
                item.country === "ec"
                  ? "1.5px solid rgba(59,130,246,0.6)"
                  : "1.5px solid rgba(34,197,94,0.6)",
            }}
          >
            <span style={{ fontSize: "14px", opacity: 0.7 }}>
              {item.year} · {item.country === "ec" ? "EC" : "DK"}
            </span>

            <h3 style={{ fontSize: "22px", marginTop: "10px" }}>
              {item.title}
            </h3>

            <p style={{ marginTop: "10px", opacity: 0.85 }}>
              {item.description}
            </p>

            <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
              {item.focus.map((f) => (
                <span
                  key={f}
                  style={{
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    background:
                      f === "legal"
                        ? "#2563eb"
                        : f === "tech"
                          ? "#22c55e"
                          : "#a855f7",
                  }}
                >
                  {f === "legal"
                    ? "Legal"
                    : f === "tech"
                      ? "Tecnológico"
                      : "Institucional"}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default TimelineItem;
