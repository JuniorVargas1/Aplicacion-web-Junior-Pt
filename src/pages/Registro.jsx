import { useState } from "react";

function Registro() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  function manejarRegistro(evento) {
    evento.preventDefault();

    if (nombre.trim() === "" || correo.trim() === "" || contrasena.trim() === "") {
      setMensaje("Por favor, completa todos los campos.");
      return;
    }

    setMensaje(`¡Usuario ${nombre} registrado exitosamente!`);
    setNombre("");
    setCorreo("");
    setContrasena("");
  }

  return (
    <section 
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        backgroundColor: "#161b22",
        border: "1px solid #333",
        borderRadius: "8px",
        padding: "30px",
        boxSizing: "border-box"
      }}
    >
      <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>
        Registro de Aprendiz
      </h2>

      <form onSubmit={manejarRegistro} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
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

        <input
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

        <input
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

        <button 
          type="submit"
          style={{
            marginTop: "10px",
            padding: "12px",
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
      </form>

      {mensaje && (
        <p style={{ marginTop: "15px", fontWeight: "bold", fontFamily: "inherit", fontSize: "0.9rem", color: "#ffffff", textAlign: "center" }}>
          {mensaje}
        </p>
      )}
    </section>
  );
}

export default Registro;