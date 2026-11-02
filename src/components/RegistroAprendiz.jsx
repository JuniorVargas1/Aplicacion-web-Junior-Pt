import { useState } from "react";

function RegistroAprendiz() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  function manejarRegistro(evento) {
    evento.preventDefault();

    // Validar que ningún campo esté vacío
    if (nombre.trim() === "" || correo.trim() === "" || contrasena.trim() === "") {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }

    // Mensaje de éxito en la pantalla
    setMensaje(`¡Usuario ${nombre} registrado exitosamente!`);

    // Resetear / limpiar campos del formulario
    setNombre("");
    setCorreo("");
    setContrasena("");
  }

  return (
    <div 
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
      <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>
        Registro
      </h2>

      <form onSubmit={manejarRegistro} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="nombre-input" style={{ color: "#ffffff", fontWeight: "500" }}>Nombre:</label>
          <input
            id="nombre-input"
            type="text"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="correo-input" style={{ color: "#ffffff", fontWeight: "500" }}>Correo:</label>
          <input
            id="correo-input"
            type="email"
            placeholder="Ingrese su correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
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

        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <label htmlFor="pass-input" style={{ color: "#ffffff", fontWeight: "500" }}>Contraseña:</label>
          <input
            id="pass-input"
            type="password"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
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

        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <button 
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#238636",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "14px"
            }}
          >
            Registrarse
          </button>
        </div>
      </form>

      {/* Mensaje dinámico en pantalla con estilo unificado */}
      {mensaje && (
        <p style={{ marginTop: "15px", fontWeight: "bold", fontFamily: "inherit", fontSize: "0.9rem", color: "#ffffff", textAlign: "center" }}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default RegistroAprendiz;