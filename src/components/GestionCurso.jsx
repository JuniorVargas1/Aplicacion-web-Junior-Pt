import { useState } from "react";

function GestionCursos({ cursos = [], setCursos }) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [informacion, setInformacion] = useState("");
    const [mensaje, setMensaje] = useState("");

    function limpiarFormulario() {
        setNombre("");
        setDescripcion("");
        setInformacion("");
    }

    function manejarEnvio(evento) {
        evento.preventDefault();

        if (
            nombre.trim() === "" ||
            descripcion.trim() === "" ||
            informacion.trim() === ""
        ) {
            setMensaje("Completa todos los campos.");
            return;
        }

        const nuevoCurso = {
            id: Date.now(),
            nombre: nombre.trim(),
            titulo: nombre.trim(),
            descripcion: descripcion.trim(),
            informacion: informacion.trim(),
        };

        setCursos([...cursos, nuevoCurso]);
        setMensaje("Curso agregado correctamente.");
        limpiarFormulario();
    }

    
    function eliminarCurso(id) {
        const cursosActualizados = cursos.filter((curso) => curso.id !== id);
        setCursos(cursosActualizados);
        setMensaje("Curso eliminado correctamente.");
    }

    return (
        <div style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
            <section 
                id="gestion-cursos" 
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
                <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "10px" }}>
                    Administración de cursos
                </h2>

                <p style={{ color: "#8b949e", textAlign: "center", marginBottom: "20px", fontSize: "14px" }}>
                    Registra cursos nuevos para la plataforma.
                </p>

                <form onSubmit={manejarEnvio} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                        <label htmlFor="nombre-curso" style={{ color: "#ffffff", fontWeight: "500" }}>
                            Nombre del curso:
                        </label>
                        <input
                            id="nombre-curso"
                            type="text"
                            value={nombre}
                            onChange={(evento) => setNombre(evento.target.value)}
                            placeholder="Ej. Inteligencia Artificial"
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
                        <label htmlFor="descripcion-curso" style={{ color: "#ffffff", fontWeight: "500" }}>
                            Descripción:
                        </label>
                        <input
                            id="descripcion-curso"
                            type="text"
                            value={descripcion}
                            onChange={(evento) => setDescripcion(evento.target.value)}
                            placeholder="Describe el curso"
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
                        <label htmlFor="informacion-curso" style={{ color: "#ffffff", fontWeight: "500" }}>
                            Información adicional:
                        </label>
                        <textarea
                            id="informacion-curso"
                            value={informacion}
                            onChange={(evento) => setInformacion(evento.target.value)}
                            placeholder="¿Qué aprenderá el aprendiz?"
                            rows={3}
                            style={{
                                padding: "10px",
                                backgroundColor: "#0d1117",
                                border: "1px solid #30363d",
                                borderRadius: "6px",
                                color: "#ffffff",
                                fontSize: "14px",
                                resize: "vertical",
                                outline: "none",
                                fontFamily: "inherit"
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
                        Agregar curso
                    </button>
                </form>

                {mensaje && (
                    <p className="mensaje" role="status" style={{ marginTop: "15px", fontWeight: "bold", fontFamily: "inherit", fontSize: "0.9rem", color: "#ffffff", textAlign: "center" }}>
                        {mensaje}
                    </p>
                )}
            </section>

            {/* Sección para listar y eliminar los cursos existentes */}
            <section style={{ backgroundColor: "#161b22", border: "1px solid #333", borderRadius: "8px", padding: "30px" }}>
                <h3 style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>
                    Cursos Registrados ({cursos.length})
                </h3>

                {cursos.length === 0 ? (
                    <p style={{ color: "#8b949e", textAlign: "center" }}>No hay cursos registrados actualmente.</p>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        {cursos.map((curso) => (
                            <div 
                                key={curso.id} 
                                style={{ 
                                    backgroundColor: "#0d1117", 
                                    border: "1px solid #30363d", 
                                    borderRadius: "6px", 
                                    padding: "15px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    gap: "15px"
                                }}
                            >
                                <div>
                                    <h4 style={{ color: "#ffffff", margin: "0 0 5px 0" }}>{curso.nombre || curso.titulo}</h4>
                                    <p style={{ color: "#8b949e", margin: "0 0 5px 0", fontSize: "13px" }}>{curso.descripcion}</p>
                                    <small style={{ color: "#58a6ff" }}>{curso.informacion}</small>
                                </div>
                                <button
                                    onClick={() => eliminarCurso(curso.id)}
                                    style={{
                                        padding: "8px 12px",
                                        backgroundColor: "#da3633",
                                        color: "#ffffff",
                                        border: "none",
                                        borderRadius: "6px",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                        fontSize: "12px",
                                        whiteSpace: "nowrap"
                                    }}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default GestionCursos;