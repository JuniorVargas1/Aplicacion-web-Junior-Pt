import { useEffect, useState } from "react";

function Fichas() {
   const [fichas, setFichas] = useState([]);
   const [cargando, setCargando] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/posts")
       .then((respuesta) => {
         if (!respuesta.ok) {
           throw new Error("No se pudo consultar la información.");
         }
         return respuesta.json();
       })
       .then((datos) => {
         setFichas(datos);
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
       <h2 style={{ color: "#ffffff" }}>Fichas (datos de prueba)</h2>
       
       {cargando && <p style={{ color: "#ffffff" }}>Cargando información...</p>}
       {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

       {!cargando && !error && (
         <div>
           {fichas.map((ficha) => (
             <article key={ficha.id} style={{ border: "1px solid #30363d", padding: "15px", margin: "10px 0", borderRadius: "5px", backgroundColor: "#161b22", color: "#ffffff" }}>
               <h3 style={{ color: "#ffffff", textTransform: "capitalize", marginTop: 0 }}>{ficha.title}</h3>
               <p style={{ color: "#ffffff", margin: "5px 0" }}>{ficha.body}</p>
             </article>
           ))}
         </div>
       )}
     </section>
   );
}

export default Fichas;