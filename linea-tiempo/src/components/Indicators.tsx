import CountrySummary from "./CountrySummary";
import Reveal from "./Reveal";



type IndicatorProps = {
  title: string;
  ecValue: number;
  dkValue: number;
};

const IndicatorCard = ({ title, ecValue, dkValue }: IndicatorProps) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>

      <div style={styles.row}>
        <span>EC Ecuador</span>
        <span>{ecValue}%</span>
      </div>
      <div style={styles.barBackground}>
        <div style={{ ...styles.barEC, width: `${ecValue}%` }} />
      </div>

      <div style={{ ...styles.row, marginTop: "14px" }}>
        <span>DK Dinamarca</span>
        <span>{dkValue}%</span>
      </div>
      <div style={styles.barBackground}>
        <div style={{ ...styles.barDK, width: `${dkValue}%` }} />
      </div>
    </div>
  );
};

const Indicators = () => {
  return (
    <Reveal>
      <section style={styles.section}>

        {/* TÍTULO */}
        <h2 style={styles.title}>Comparación de Indicadores</h2>
        <p style={styles.subtitle}>
          Análisis cuantitativo de los principales indicadores de transformación digital
        </p>

        {/* 1️⃣ TARJETAS PEQUEÑAS */}
        <div style={styles.grid}>
          <IndicatorCard title="Índice Digital" ecValue={52} dkValue={98} />
          <IndicatorCard title="Servicios Online" ecValue={35} dkValue={98} />
          <IndicatorCard title="Penetración de Internet" ecValue={70} dkValue={99} />
          <IndicatorCard title="Habilidades Digitales" ecValue={45} dkValue={95} />
        </div>

        {/* 5️⃣ TARJETAS GRANDES */}
        <div style={styles.countries}>
          <CountrySummary
            code="EC"
            country="Ecuador"
            description="Ecuador ha mostrado avances significativos en la última década..."
            maturity="Media"
            speed="Media"
            variant="ec"
          />

          <CountrySummary
            code="DK"
            country="Dinamarca"
            description="Dinamarca lidera consistentemente los rankings globales..."
            maturity="Muy Alta"
            speed="Alta"
            variant="dk"
          />
        </div>

      </section>
    </Reveal>
  );
};


const styles = {
  section: {
    padding: "120px 60px",
  },
  title: {
    fontSize: "48px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
    textAlign: "center" as const,
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "20px",
    textAlign: "center" as const,
    color: "#9ca3af",
    marginBottom: "80px",
  },

  /* GRID TARJETAS PEQUEÑAS */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "32px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "20px",
    padding: "28px",
    minHeight: "220px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
  },
  cardTitle: {
    fontSize: "22px",
    fontWeight: 600,
    marginBottom: "26px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
    fontWeight: 500,
    color: "#d1d5db",
  },
  barBackground: {
    height: "10px",
    borderRadius: "10px",
    background: "#1f2937",
    overflow: "hidden",
    marginTop: "8px",
  },
  barEC: {
    height: "100%",
    background: "linear-gradient(90deg, #3b82f6, #60a5fa)",
  },
  barDK: {
    height: "100%",
    background: "linear-gradient(90deg, #22c55e, #4ade80)",
  },

  /* TARJETAS GRANDES */
  countries: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
    gap: "32px",
    marginTop: "80px",
    maxWidth: "1300px",
    marginInline: "auto",
  },
};

export default Indicators;
