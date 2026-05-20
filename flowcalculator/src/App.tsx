import React, { useState, useEffect } from "react";

export default function HydraulicFlowCalculatorSite() {
  const [diameter, setDiameter] = useState(50);
  const [velocity, setVelocity] = useState(2);
  const [flow, setFlow] = useState("0.00");

  useEffect(() => {
    const diameterMeters = diameter / 1000;
    const area = Math.PI * Math.pow(diameterMeters / 2, 2);
    const flowM3s = area * velocity;
    const flowLMin = flowM3s * 1000 * 60;

    setFlow(flowLMin.toFixed(2));
  }, [diameter, velocity]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%)",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <header style={{ marginBottom: "50px" }}>
          <h1
            style={{
              fontSize: "52px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Calculadora de Vazão Hidráulica
          </h1>

          <p
            style={{
              fontSize: "20px",
              color: "#cbd5e1",
            }}
          >
            Ferramenta profissional para cálculos hidráulicos.
          </p>
        </header>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              padding: "30px",
              borderRadius: "24px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ marginBottom: "25px", fontSize: "32px" }}>
              Dados da Tubulação
            </h2>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>
                Diâmetro do tubo (mm)
              </label>

              <input
                type="number"
                value={diameter}
                onChange={(e) => setDiameter(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "18px",
                }}
              />
            </div>

            <div>
              <label style={{ display: "block", marginBottom: "10px" }}>
                Velocidade do fluido (m/s)
              </label>

              <input
                type="number"
                value={velocity}
                onChange={(e) => setVelocity(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "15px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "18px",
                }}
              />
            </div>
          </div>

          <div
            style={{
              background: "white",
              color: "#0f172a",
              padding: "30px",
              borderRadius: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
              Vazão Calculada
            </h2>

            <div
              style={{
                fontSize: "72px",
                fontWeight: "bold",
                color: "#2563eb",
              }}
            >
              {flow}
            </div>

            <p style={{ marginTop: "10px", fontSize: "22px" }}>litros/minuto</p>
          </div>
        </div>

        <section
          style={{
            marginTop: "50px",
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "24px",
          }}
        >
          <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
            Fórmula Utilizada
          </h2>

          <div style={{ fontSize: "24px", marginBottom: "20px" }}>
            Q = A × V
          </div>

          <p style={{ lineHeight: 1.8, color: "#cbd5e1" }}>
            A vazão hidráulica é calculada utilizando a área interna da
            tubulação e a velocidade do fluido.
          </p>
        </section>

        <section
          style={{
            marginTop: "40px",
            background: "white",
            color: "#111827",
            padding: "30px",
            borderRadius: "24px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>Espaço para Google AdSense</h2>

          <p>
            Aqui você pode inserir o código oficial do Google AdSense para
            monetização.
          </p>
        </section>
      </div>
    </div>
  );
}
