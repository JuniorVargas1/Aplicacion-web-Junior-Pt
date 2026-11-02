import { useState } from "react";

function Curso({ nombre, titulo, descripcion }) {
  const [inscritos, setInscritos] = useState(0);
  const [interesados, setInteresados] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const nombreCurso = titulo || nombre || "este curso";

  function manejarInscripcion() {
    setInscritos(inscritos + 1);
    setMensaje(`¡Te has inscrito al curso de ${nombreCurso}!`);
  }

  function manejarInteres() {
    setInteresados(interesados + 1);
    setMensaje(`Has marcado interés en el curso de ${nombreCurso}.`);
  }

  function manejarInformacion() {
    setMensaje(`Información: ${descripcion}`);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* Bloque superior: Título y descripción */}
      <div>
        <h3 style={{ color: "#ffffff", marginBottom: "10px" }}>{nombreCurso}</h3>
        <p style={{ color: "#cccccc", marginBottom: "15px" }}>{descripcion}</p>
      </div>

      {/* Bloque inferior: Contadores, botones y mensajes */}
      <div>
        <p style={{ color: "#aaaaaa", margin: "5px 0" }}>Cantidad de inscritos: {inscritos}</p>
        <p style={{ color: "#aaaaaa", margin: "5px 0" }}>Cantidad de interesados: {interesados}</p>

        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "15px" }}>
          <button onClick={manejarInformacion}>Ver información</button>
          <button onClick={manejarInscripcion}>Inscribirme</button>
          <button onClick={manejarInteres}>Me interesa</button>
        </div>

        {mensaje && (
          <p style={{ marginTop: "12px", color: "#4caf50", fontWeight: "bold" }}>
            {mensaje}
          </p>
        )}
      </div>
    </div>
  );
}

export default Curso;