const AcademicInsight = () => {
  return (
    <section
      style={{
        marginTop: "48px",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0b5ed7, #0a3d91)",
          borderRadius: "20px",
          padding: "24px 28px",
          color: "#fff",
          boxShadow: "0 16px 32px rgba(0,0,0,0.25)",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "12px",
          }}
        >
          💡 Insight Académico
        </h3>

        <p
          style={{
            fontSize: "15.5px",
            lineHeight: 1.6,
            opacity: 0.95,
          }}
        >
          El análisis comparativo evidencia una brecha estructural significativa
          entre Ecuador y Dinamarca en términos de digitalización. Mientras
          Dinamarca presenta un ecosistema digital maduro, caracterizado por una
          alta interoperabilidad institucional, adopción tecnológica temprana y
          políticas públicas sostenidas, Ecuador muestra avances progresivos
          pero desiguales, con mayores rezagos en servicios digitales y
          desarrollo de habilidades digitales.
        </p>

        <p
          style={{
            marginTop: "12px",
            fontSize: "15.5px",
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Esta diferencia no responde únicamente a factores tecnológicos, sino
          también a marcos normativos, inversión pública, continuidad de
          estrategias digitales y articulación entre el Estado, el sector
          privado y la academia.
        </p>
      </div>
    </section>
  );
};

export default AcademicInsight;
