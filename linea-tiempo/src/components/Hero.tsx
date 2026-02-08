const Hero = () => {
  return (
    <section style={styles.hero}>
      <span style={styles.badge}>Análisis Comparativo 1992–2024</span>

      <h1 style={styles.title}>
        Evolución de la <br />
        <span style={styles.gradient}>Digitalización</span>
      </h1>

      <p style={styles.subtitle}>
        Ecuador vs Dinamarca <br />
        Un recorrido analítico por los hitos legales, tecnológicos e
        institucionales que marcaron su transformación digital.
      </p>

      <button style={styles.button}>Explorar Timeline ↓</button>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
    padding: "0 20px",
  },
  badge: {
    padding: "8px 18px",
    borderRadius: "22px",
    background: "#0f1b33",
    color: "#6ee7f9",
    marginBottom: "28px",
    fontSize: "25px",
    fontWeight: 500,
    letterSpacing: "0.5px",
  },

  title: {
    fontSize: "56px",
    lineHeight: "1.1",
    marginBottom: "20px",
  },
  gradient: {
    background: "linear-gradient(90deg, #22d3ee, #22c55e)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    maxWidth: "700px",
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "40px",
  },
  button: {
    padding: "14px 26px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(90deg, #2563eb, #22c55e)",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Hero;
