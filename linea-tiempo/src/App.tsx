import { useState } from "react";
import Hero from "./components/Hero";
import Indicators from "./components/Indicators";
import TimelineFilters from "./components/TimelineFilters";
import Timeline from "./components/Timeline";
import ComparativeChart from "./components/ComparativeChart";
import DigitalGapCards from "./components/DigitalGapCards";
import AcademicInsight from "./components/AcademicInsight";
import Conclusions from "./components/Conclusions";

function App() {
  const [country, setCountry] = useState("all");
  const [focus, setFocus] = useState("all");

  return (
    <>
      <Hero />
      <Indicators />

      <TimelineFilters
        country={country}
        setCountry={setCountry}
        focus={focus}
        setFocus={setFocus}
      />

      {/* 📌 LÍNEA DE TIEMPO */}
      <Timeline country={country} focus={focus} />

      {/* 📊 ANÁLISIS COMPARATIVO */}
      <ComparativeChart />
      <DigitalGapCards />

      {/* 🔵 INSIGHT ACADÉMICO (CIERRE) */}
      <AcademicInsight />

      <Conclusions /> 
    </>
  );
}

export default App;
