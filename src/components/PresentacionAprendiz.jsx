import { useState } from "react";

function PresentacionAprendiz({ listaCursos }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [curso, setCurso] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [esError, setEsError] = useState(false);

  const [mostrarInfo, setMostrarInfo] = useState(false);
  const [datosGuardados, setDatosGuardados] = useState(null);

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (nombre.trim() === "" || correo.trim() === "" || curso === "") {
      setMensaje("Completa los campos obligatorios antes de continuar.");
      setEsError(true);
      return;
    }

    setDatosGuardados({ nombre, correo, curso });
    setMensaje("✓ Presentación enviada correctamente.");
    setEsError(false);
    limpiarCampos();
  }

  function limpiarCampos() {
    setNombre("");
    setCorreo("");
    setCurso("");
  }

  function manejarLimpiezaManual() {
    limpiarCampos();
    setMensaje("");
    setEsError(false);
    setDatosGuardados(null);
    setMostrarInfo(false);
  }

  return (
    <div 
      className="presentacion-container" 
      style={{
        backgroundColor: "#161b22",
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "30px",
        maxWidth: "500px",
        margin: "0 auto 30px auto",
        boxSizing: "border-box",
        textAlign: "left"
      }}
    >
      <h3 style={{ textAlign: "center", color: "#ffffff", marginBottom: "20px" }}>MI PRESENTACIÓN</h3>

      <form onSubmit={manejarEnvio} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombre" style={{ color: "#ffffff", fontWeight: "500" }}>Nombre:</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
            style={{
              padding: "10px",
              backgroundColor: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: "6px",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none"
            }}
          />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="correo" style={{ color: "#ffffff", fontWeight: "500" }}>Correo electrónico:</label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="ejemplo@correo.com"
            style={{
              padding: "10px",
              backgroundColor: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: "6px",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none"
            }}
          />
        </div>

        <div className="form-group" style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="curso" style={{ color: "#ffffff", fontWeight: "500" }}>Curso:</label>
          <select
            id="curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            style={{
              padding: "10px",
              backgroundColor: "#0d1117",
              border: "1px solid #30363d",
              borderRadius: "6px",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none"
            }}
          >
            <option value="">Selecciona un curso</option>
            {listaCursos &&
              listaCursos.map((item) => (
                <option key={item.id} value={item.titulo}>
                  {item.titulo}
                </option>
              ))}
          </select>
        </div>

        <div className="button-group" style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
          <button 
            type="submit"
            style={{
              padding: "10px 16px",
              backgroundColor: "#238636",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            Enviar presentación
          </button>
          <button 
            type="button" 
            onClick={manejarLimpiezaManual}
            style={{
              padding: "10px 16px",
              backgroundColor: "#21262d",
              color: "#ffffff",
              border: "1px solid #30363d",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            Limpiar formulario
          </button>
        </div>
      </form>

      {mensaje && (
        <div className={esError ? "mensaje-error" : "mensaje-exito"} style={{ marginTop: "15px", textAlign: "center", color: esError ? "#ff6b6b" : "#4caf50", fontWeight: "bold" }}>
          {mensaje}
        </div>
      )}

      {datosGuardados && (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h2 style={{ color: "#ffffff", letterSpacing: "1px", marginBottom: "20px" }}>
            MI PERFIL DE APRENDIZ
          </h2>

          <button
            onClick={() => setMostrarInfo(!mostrarInfo)}
            style={{
              backgroundColor: "#21262d",
              color: "#ffffff",
              border: "1px solid #30363d",
              padding: "10px 20px",
              borderRadius: "6px",
              fontSize: "16px",
              cursor: "pointer",
              marginBottom: "20px",
              fontWeight: "bold"
            }}
          >
            {mostrarInfo ? "Ocultar información" : "Mostrar información"}
          </button>

          {mostrarInfo && (
            <div
              className="tarjeta-perfil"
              style={{
                backgroundColor: "#0d1117",
                border: "1px solid #30363d",
                borderRadius: "6px",
                padding: "20px",
                maxWidth: "450px",
                margin: "0 auto",
                textAlign: "left"
              }}
            >
              <p style={{ color: "#ffffff", margin: "10px 0", fontSize: "16px" }}>
                <strong>Nombre:</strong> {datosGuardados.nombre}
              </p>
              <p style={{ color: "#ffffff", margin: "10px 0", fontSize: "16px" }}>
                <strong>Curso de interés:</strong> {datosGuardados.curso}
              </p>
              <p style={{ color: "#ffffff", margin: "10px 0", fontSize: "16px" }}>
                <strong>Programa:</strong> Desarrollo de Software
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PresentacionAprendiz;