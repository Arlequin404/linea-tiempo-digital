import Reveal from "./Reveal";

type GapCardProps = {
  title: string;
  value: string;
  progress: number;
  color: string;
};

const GapCard = ({ title, value, progress, color }: GapCardProps) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <span style={styles.title}>{title}</span>
        <span style={{ fontSize: "18px" }}>↗</span>
      </div>

      <div style={styles.value}>{value}</div>

      <div style={styles.barBg}>
        <div
          style={{
            ...styles.bar,
            width: `${progress}%`,
            background: color,
          }}
        />
      </div>
    </div>
  );
};

const DigitalGapCards = () => {
  return (
    <Reveal>
      <section style={styles.section}>
        <div style={styles.grid}>
          <GapCard
            title="Brecha en Índice Digital"
            value="46 pts"
            progress={46}
            color="linear-gradient(90deg, #ef4444, #f97316)"
          />
          <GapCard
            title="Brecha en Servicios Online"
            value="63%"
            progress={63}
            color="linear-gradient(90deg, #f59e0b, #fbbf24)"
          />
          <GapCard
            title="Brecha en Internet"
            value="29%"
            progress={29}
            color="linear-gradient(90deg, #22c55e, #4ade80)"
          />
          <GapCard
            title="Brecha en Habilidades"
            value="50%"
            progress={50}
            color="linear-gradient(90deg, #f97316, #ef4444)"
          />
        </div>
      </section>
    </Reveal>
  );
};

const styles = {
  section: {
    padding: "40px 60px 120px",
  },
  grid: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "18px",
    padding: "22px",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(10px)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
    color: "#9ca3af",
    fontSize: "14px",
  },
  title: {
    fontWeight: 500,
  },
  value: {
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "16px",
  },
  barBg: {
    height: "8px",
    borderRadius: "8px",
    background: "#1f2937",
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    borderRadius: "8px",
  },
};

export default DigitalGapCards;
