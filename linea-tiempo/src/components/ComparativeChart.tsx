import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Reveal from "./Reveal";

const data = [
  {
    name: "Índice Digital",
    Ecuador: 52,
    Dinamarca: 98,
  },
  {
    name: "Servicios Online",
    Ecuador: 35,
    Dinamarca: 98,
  },
  {
    name: "Penetración Internet",
    Ecuador: 70,
    Dinamarca: 99,
  },
  {
    name: "Habilidades Digitales",
    Ecuador: 45,
    Dinamarca: 95,
  },
];

const ComparativeChart = () => {
  return (
    <Reveal>
      <section style={styles.section}>
        <h2 style={styles.title}>Análisis Comparativo</h2>
        <p style={styles.subtitle}>
          Visualización de la brecha digital entre Ecuador y Dinamarca
        </p>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>
            Comparación de Indicadores Clave
          </h3>

          <div style={{ width: "100%", height: 360 }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    background: "#020617",
                    borderRadius: "10px",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                />
                <Legend />
                <Bar dataKey="Ecuador" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                <Bar
                  dataKey="Dinamarca"
                  fill="#10b981"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

const styles = {
  section: {
    padding: "140px 60px",
  },
  title: {
    fontSize: "56px",
    fontWeight: 700,
    textAlign: "center" as const,
    marginBottom: "16px",
  },
  subtitle: {
    fontSize: "20px",
    textAlign: "center" as const,
    color: "#9ca3af",
    marginBottom: "80px",
  },
  card: {
    maxWidth: "1300px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "24px",
    padding: "32px",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: 600,
    marginBottom: "24px",
  },
};

export default ComparativeChart;
