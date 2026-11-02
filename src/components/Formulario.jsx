import { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  function registrar(e) {
    e.preventDefault();
    alert("¡Bienvenido! Tu registro ha sido exitoso." + nombre);
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
      <section 
        style={{
          backgroundColor: "#161b22",
          border: "1px solid #333",
          borderRadius: "8px",
          padding: "30px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          marginBottom: "40px"
        }}
      >
        <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>
          Registro
        </h2>

        <form onSubmit={registrar} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="nombre" style={{ color: "#ffffff", fontWeight: "500" }}>
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              minLength={3}
              required
              placeholder="Ingrese su nombre"
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
            <label htmlFor="correo" style={{ color: "#ffffff", fontWeight: "500" }}>
              Correo:
            </label>
            <input
              type="email"
              id="correo"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
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

          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <label htmlFor="contraseña" style={{ color: "#ffffff", fontWeight: "500" }}>
              Contraseña:
            </label>
            <input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              minLength={8}
              required
              placeholder="••••••••"
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
      </section>
    </div>
  );
}

export default Formulario;