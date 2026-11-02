import Curso from "../components/Curso";

function Cursos({ cursos }) {
  return (
    <section id="cursos" style={{ margin: "30px auto", maxWidth: "900px", padding: "0 20px" }}>
      {/* Título en color blanco con alto contraste */}
      <h2 style={{ color: "#ffffff", marginBottom: "25px", textAlign: "center" }}>
        Nuestros cursos
      </h2>

      {/* Reestructuración en cuadrícula 2-2-1 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        {cursos.map((curso, index) => (
          <div
            key={curso.id}
            style={{
              gridColumn: index === 4 ? "1 / -1" : "auto",
              justifySelf: index === 4 ? "center" : "stretch",
              width: index === 4 ? "100%" : "auto",
              maxWidth: index === 4 ? "450px" : "none",
              backgroundColor: "#161b22",
              border: "1px solid #30363d",
              borderRadius: "8px",
              padding: "20px",
              boxSizing: "border-box",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Curso
              nombre={curso.nombre || curso.titulo}
              titulo={curso.titulo || curso.nombre}
              descripcion={curso.descripcion}
              informacion={curso.informacion}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cursos;