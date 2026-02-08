import Reveal from "./Reveal";

const Conclusions = () => {
  return (
    <Reveal>
      <section style={styles.section}>
        {/* TÍTULO */}
        <h2 style={styles.title}>Conclusiones y Reflexiones</h2>
        <p style={styles.subtitle}>
          Análisis académico de las lecciones aprendidas y oportunidades futuras
        </p>

        {/* GRID 4 CARDS */}
        <div style={styles.grid}>
          <Card
            icon="💡"
            title="Lecciones Aprendidas"
            text="La transformación digital requiere una estrategia integral que combine marco legal robusto, inversión tecnológica sostenida y desarrollo de capacidades institucionales. El caso danés demuestra que la digitalización exitosa es un proceso de décadas, no de años."
          />

          <Card
            icon="📘"
            title="Factores Críticos de Éxito"
            text="La identificación única centralizada (CPR en Dinamarca, cédula digital en Ecuador) es fundamental para la interoperabilidad de servicios. La voluntad política sostenida y la inversión continua en infraestructura son pilares esenciales."
          />

          <Card
            icon="📈"
            title="Oportunidades para Ecuador"
            text="Ecuador tiene la ventaja de poder adoptar tecnologías más modernas sin las limitaciones de sistemas legacy. La conectividad móvil puede ser un acelerador clave, como ha ocurrido en otros países en desarrollo."
          />

          <Card
            icon="⚠️"
            title="Desafíos Pendientes"
            text="La brecha en habilidades digitales y la desigualdad en el acceso a Internet son obstáculos significativos. Se requiere inversión en educación digital y expansión de conectividad en zonas rurales."
          />
        </div>

        {/* CARD GRANDE FINAL */}
        <div style={styles.finalCard}>
          <h3 style={styles.finalTitle}>📊 Reflexión Final</h3>

          <p style={styles.finalText}>
            La comparación entre Ecuador y Dinamarca no busca establecer una
            competencia, sino evidenciar que la transformación digital es un
            proceso multidimensional que requiere tiempo, recursos y compromiso
            institucional sostenido. Cada país enfrenta contextos y desafíos
            únicos.
          </p>

          <p style={styles.finalText}>
            Dinamarca tuvo la ventaja de iniciar su digitalización en un momento
            de menor complejidad tecnológica, permitiendo construir sistemas
            sólidos progresivamente. Ecuador, por su parte, enfrenta el desafío
            de implementar transformaciones en un ecosistema más complejo, pero
            también tiene acceso a tecnologías avanzadas y puede aprender de
            experiencias internacionales.
          </p>

          <div style={styles.quote}>
            “La digitalización no es un destino, sino un viaje continuo de
            adaptación, innovación y aprendizaje institucional.”
          </div>
        </div>

        {/* FOOTER ACADÉMICO */}
        <div style={styles.footer}>
          <div style={styles.footerGrid}>
            <div>
              <h4 style={styles.footerTitle}>🎓 Proyecto Final</h4>
              <p style={styles.footerText}>
                Micrositio desarrollado con fines educativos para el análisis
                comparativo de la transformación digital entre Ecuador y
                Dinamarca.
              </p>
            </div>

            <div>
              <h4 style={styles.footerTitle}>📚 Integrantes</h4>
              <ul style={styles.footerList}>
                <li>Kevin Anchali</li>
                <li>Andy Chiquin</li>
                <li>Jessica Centeno</li>
                <li>Sebastian Granda</li>
                <li>Alex Ortiz</li>

              </ul>
            </div>

            <div>
              <h4 style={styles.footerTitle}>📩 Curso</h4>
              <p style={styles.footerText}>Legislación Informatica</p>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

const Card = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div style={styles.card}>
    <h4 style={styles.cardTitle}>
      <span>{icon}</span> {title}
    </h4>
    <p style={styles.cardText}>{text}</p>
  </div>
);

const styles = {
  section: {
    padding: "120px 60px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  title: {
    fontSize: "60px",
    fontWeight: 700,
    textAlign: "center" as const,
    marginBottom: "16px",
  },

  subtitle: {
    fontSize: "35px",
    textAlign: "center" as const,
    color: "#9ca3af",
    marginBottom: "80px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
    gap: "32px",
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    borderRadius: "18px",
    padding: "28px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
  },

  cardTitle: {
    fontSize: "35px",
    fontWeight: 600,
    marginBottom: "12px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },

  cardText: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#d1d5db",
  },

  /* 🔹 CUADRO FINAL ESTILO REFERENCIA */
  finalCard: {
    marginTop: "60px",
    padding: "32px",
    borderRadius: "22px",
    background: "rgba(15,23,42,0.85)", // fondo oscuro real
    border: "2px solid transparent",
    backgroundImage:
      "linear-gradient(#0b1220, #0b1220), linear-gradient(135deg, #3b82f6, #22c55e)",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
  },

  finalTitle: {
    fontSize: "26px",
    fontWeight: 600,
    marginBottom: "18px",
    color: "#f8fafc",
  },

  finalText: {
    fontSize: "16px",
    lineHeight: 1.7,
    marginBottom: "14px",
    color: "#d1d5db",
  },

  quote: {
    marginTop: "22px",
    padding: "16px 18px",
    borderLeft: "4px solid #3b82f6",
    background: "rgba(59,130,246,0.08)",
    borderRadius: "12px",
    fontStyle: "italic",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "#e5e7eb",
  },
  footer: {
    marginTop: "80px",
    paddingTop: "40px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "40px",
  },

  footerTitle: {
    fontSize: "16px",
    fontWeight: 600,
    marginBottom: "12px",
    color: "#e5e7eb",
  },

  footerText: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#9ca3af",
  },

  footerList: {
    listStyle: "disc",
    paddingLeft: "18px",
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#9ca3af",
  },

  footerLink: {
    fontSize: "14px",
    color: "#60a5fa",
    cursor: "pointer",
  },
};

export default Conclusions;
