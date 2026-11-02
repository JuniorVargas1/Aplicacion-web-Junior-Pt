import { useState } from "react";

function RegistroAprendiz() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    function registrarAprendiz(evento) {
        evento.preventDefault();
        setMensaje("Enviando...");
        setEnviado(true);

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: nombre,
                body: correo,
                userId: 1
            })
        })
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error("No se pudo enviar el registro");
            }
            return respuesta.json();
        })
        .then((datos) => {
            setMensaje(`Solicitud exitosa. Id de prueba: ${datos.id}`);
            setNombre("");
            setCorreo("");
        })
        .catch((error) => {
            setMensaje("Ocurrió un error al enviar los datos");
            console.error(error);
        })
        .finally(() => {
            setEnviado(false);
        });
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
                    marginBottom: "40px",
                    textAlign: "left"
                }}
            >
                <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>
                    Registrar aprendiz (prueba)
                </h2>

                <form onSubmit={registrarAprendiz} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label style={{ color: "#ffffff", fontWeight: "500" }}>Nombre completo</label>
                        <input
                            type="text"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                            placeholder="Ingrese su nombre completo"
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
                        <label style={{ color: "#ffffff", fontWeight: "500" }}>Correo electrónico</label>
                        <input
                            type="email"
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
                    
                    <button 
                        type="submit" 
                        disabled={enviado}  
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
                        {enviado ? "Enviando..." : "Enviar"}
                    </button>
                </form>
                 
                {mensaje && (
                    <p style={{ marginTop: "15px", fontWeight: "bold", fontFamily: "inherit", fontSize: "0.9rem", color: "#ffffff", textAlign: "center" }}>
                        {mensaje}
                    </p>
                )}
            </section>
        </div>
    );      
}

export default RegistroAprendiz;