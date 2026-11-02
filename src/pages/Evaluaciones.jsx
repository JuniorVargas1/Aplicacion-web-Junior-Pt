import { useEffect, useState } from "react";

function Evaluaciones() {
   const [evaluaciones, setEvaluaciones] = useState([]);
   const [cargando, setCargando] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/comments")
       .then((respuesta) => {
         if (!respuesta.ok) {
           throw new Error("No se pudo consultar la información.");
         }
         return respuesta.json();
       })
       .then((datos) => {
         setEvaluaciones(datos);
       })
       .catch(() => {
         setError("No fue posible cargar los datos. Intenta nuevamente.");
       })
       .finally(() => {
         setCargando(false);
       });
   }, []);

   return (
     <section style={{ padding: "20px", color: "#ffffff" }}>
       <h2 style={{ color: "#ffffff" }}>Evaluaciones (datos de prueba)</h2>
       
       {cargando && <p style={{ color: "#ffffff" }}>Cargando información...</p>}
       {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

       {!cargando && !error && (
         <div>
           {evaluaciones.map((evaluacion) => (
             <article key={evaluacion.id} style={{ border: "1px solid #30363d", padding: "15px", margin: "10px 0", borderRadius: "5px", backgroundColor: "#161b22", color: "#ffffff" }}>
               <h3 style={{ color: "#ffffff", marginTop: 0 }}>{evaluacion.name}</h3>
               <p style={{ color: "#ffffff", margin: "5px 0" }}>Correo: {evaluacion.email}</p>
               <p style={{ color: "#ffffff", margin: "5px 0" }}>Comentario: {evaluacion.body}</p>
             </article>
           ))}
         </div>
       )}
     </section>
   );
}

export default Evaluaciones;