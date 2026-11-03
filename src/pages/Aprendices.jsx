import React, { useEffect, useState } from "react";

function Aprendices() {
   const [aprendices, setAprendices] = useState([]);
   const [cargando, setCargando] = useState(true);
   const [error, setError] = useState("");

   // Estados para el formulario POST (Actividad A)
   const [nombre, setNombre] = useState("");
   const [correo, setCorreo] = useState("");
   const [enviando, setEnviando] = useState(false);
   const [mensajePost, setMensajePost] = useState(null);

   // Estados para el formulario PUT (Actividad B)
   const [tituloPut, setTituloPut] = useState("");
   const [contenidoPut, setContenidoPut] = useState("");
   const [actualizando, setActualizando] = useState(false);
   const [mensajePut, setMensajePut] = useState(null);

   // Estados para el formulario PATCH (Actividad C)
   const [tituloPatch, setTituloPatch] = useState("");
   const [parcializando, setParcializando] = useState(false);
   const [mensajePatch, setMensajePatch] = useState(null);

   // Estados para la eliminación DELETE (Actividad D)
   const [eliminando, setEliminando] = useState(false);
   const [mensajeDelete, setMensajeDelete] = useState(null);

   // 1. Petición GET inicial
   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then((respuesta) => {
            if (!respuesta.ok) {
               throw new Error("No se pudo consultar la información.");
            }
            return respuesta.json();
         })
         .then((datos) => {
            setAprendices(datos);
         })
         .catch(() => {
            setError("No fue posible cargar los datos. Intenta nuevamente.");
         })
         .finally(() => {
            setCargando(false);
         });
   }, []);

   // 2. Función para manejar el envío del formulario con POST (Actividad A)
   const handleSubmit = (e) => {
      e.preventDefault();
      setEnviando(true);
      setMensajePost(null);

      fetch("https://jsonplaceholder.typicode.com/posts", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            title: nombre,
            body: correo,
            userId: 1,
         }),
      })
         .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Falló la petición");
            return respuesta.json();
         })
         .then((datos) => {
            setEnviando(false);
            setMensajePost({
               tipo: "exito",
               texto: `¡Aprendiz registrado con éxito! ID asignado: ${datos.id}`,
            });
            setNombre("");
            setCorreo("");
         })
         .catch(() => {
            setEnviando(false);
            setMensajePost({
               tipo: "error",
               texto: "Ocurrió un error al enviar los datos.",
            });
         });
   };

   // 3. Función para manejar la actualización con PUT (Actividad B)
   const handleUpdate = (e) => {
      e.preventDefault();
      setActualizando(true);
      setMensajePut(null);

      fetch("https://jsonplaceholder.typicode.com/posts/1", {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            id: 1,
            title: tituloPut,
            body: contenidoPut,
            userId: 1,
         }),
      })
         .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Falló la actualización");
            return respuesta.json();
         })
         .then((datos) => {
            setActualizando(false);
            setMensajePut({
               tipo: "exito",
               texto: `¡Registro ID 1 actualizado con éxito! Título: "${datos.title}"`,
            });
            setTituloPut("");
            setContenidoPut("");
         })
         .catch(() => {
            setActualizando(false);
            setMensajePut({
               tipo: "error",
               texto: "No se pudo actualizar el registro.",
            });
         });
   };

   // 4. Función para manejar la modificación parcial con PATCH (Actividad C)
   const handlePatch = (e) => {
      e.preventDefault();
      setParcializando(true);
      setMensajePatch(null);

      fetch("https://jsonplaceholder.typicode.com/posts/1", {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            title: tituloPatch,
         }),
      })
         .then((respuesta) => {
            if (!respuesta.ok) throw new Error("Falló la modificación parcial");
            return respuesta.json();
         })
         .then((datos) => {
            setParcializando(false);
            setMensajePatch({
               tipo: "exito",
               texto: `¡Título modificado parcialmente! Nuevo título: "${datos.title}"`,
            });
            setTituloPatch("");
         })
         .catch(() => {
            setParcializando(false);
            setMensajePatch({
               tipo: "error",
               texto: "No se pudo modificar el título.",
            });
         });
   };

   // 5. Función para manejar la eliminación con DELETE (Actividad D)
   const handleDelete = () => {
      if (window.confirm("¿Estás seguro de que deseas eliminar el registro ID 1?")) {
         setEliminando(true);
         setMensajeDelete(null);

         fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "DELETE",
         })
            .then((respuesta) => {
               if (!respuesta.ok) throw new Error("Falló la eliminación");
            })
            .then(() => {
               setEliminando(false);
               setMensajeDelete({
                  tipo: "exito",
                  texto: "¡Registro ID 1 eliminado con éxito!",
               });
            })
            .catch(() => {
               setEliminando(false);
               setMensajeDelete({
                  tipo: "error",
                  texto: "No se pudo eliminar el registro.",
               });
            });
      }
   };

   return (
      <section style={{ padding: "20px", color: "#ffffff" }}>
         <h2 style={{ color: "#ffffff" }}>Aprendices (datos de prueba)</h2>

         {/* Contenedor de Formularios y Acciones HTTP */}
         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "20px" }}>
            
            {/* Formulario POST (Actividad A) */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#161b22", border: "1px solid #30363d", padding: "20px", borderRadius: "5px" }}>
               <h3 style={{ color: "#ffffff", marginTop: 0 }}>Registrar Nuevo Aprendiz (POST)</h3>
               <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div>
                     <label style={{ display: "block", marginBottom: "5px" }}>Nombre:</label>
                     <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #30363d", backgroundColor: "#0d1117", color: "#ffffff" }}
                     />
                  </div>
                  <div>
                     <label style={{ display: "block", marginBottom: "5px" }}>Correo:</label>
                     <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #30363d", backgroundColor: "#0d1117", color: "#ffffff" }}
                     />
                  </div>
                  <button
                     type="submit"
                     disabled={enviando}
                     style={{ padding: "10px", backgroundColor: "#238636", color: "#ffffff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
                  >
                     {enviando ? "Enviando..." : "Enviar Datos (POST)"}
                  </button>
               </form>

               {mensajePost && (
                  <p style={{ marginTop: "10px", color: mensajePost.tipo === "exito" ? "#3fb950" : "#ff7b72" }}>
                     {mensajePost.texto}
                  </p>
               )}
            </div>

            {/* Formulario PUT (Actividad B) */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#161b22", border: "1px solid #30363d", padding: "20px", borderRadius: "5px" }}>
               <h3 style={{ color: "#ffffff", marginTop: 0 }}>Actualizar Registro ID 1 (PUT)</h3>
               <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div>
                     <label style={{ display: "block", marginBottom: "5px" }}>Nuevo Título:</label>
                     <input
                        type="text"
                        value={tituloPut}
                        onChange={(e) => setTituloPut(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #30363d", backgroundColor: "#0d1117", color: "#ffffff" }}
                     />
                  </div>
                  <div>
                     <label style={{ display: "block", marginBottom: "5px" }}>Nuevo Contenido:</label>
                     <input
                        type="text"
                        value={contenidoPut}
                        onChange={(e) => setContenidoPut(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #30363d", backgroundColor: "#0d1117", color: "#ffffff" }}
                     />
                  </div>
                  <button
                     type="submit"
                     disabled={actualizando}
                     style={{ padding: "10px", backgroundColor: "#1f6feb", color: "#ffffff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
                  >
                     {actualizando ? "Actualizando..." : "Actualizar Registro (PUT)"}
                  </button>
               </form>

               {mensajePut && (
                  <p style={{ marginTop: "10px", color: mensajePut.tipo === "exito" ? "#3fb950" : "#ff7b72" }}>
                     {mensajePut.texto}
                  </p>
               )}
            </div>

            {/* Formulario PATCH (Actividad C) */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#161b22", border: "1px solid #30363d", padding: "20px", borderRadius: "5px" }}>
               <h3 style={{ color: "#ffffff", marginTop: 0 }}>Modificar Título ID 1 (PATCH)</h3>
               <form onSubmit={handlePatch} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div>
                     <label style={{ display: "block", marginBottom: "5px" }}>Nuevo Título Parcial:</label>
                     <input
                        type="text"
                        value={tituloPatch}
                        onChange={(e) => setTituloPatch(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #30363d", backgroundColor: "#0d1117", color: "#ffffff" }}
                     />
                  </div>
                  <button
                     type="submit"
                     disabled={parcializando}
                     style={{ padding: "10px", backgroundColor: "#8957e5", color: "#ffffff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
                  >
                     {parcializando ? "Modificando..." : "Modificar Título (PATCH)"}
                  </button>
               </form>

               {mensajePatch && (
                  <p style={{ marginTop: "10px", color: mensajePatch.tipo === "exito" ? "#3fb950" : "#ff7b72" }}>
                     {mensajePatch.texto}
                  </p>
               )}
            </div>

            {/* Sección DELETE (Actividad D) */}
            <div style={{ flex: 1, minWidth: "300px", backgroundColor: "#161b22", border: "1px solid #30363d", padding: "20px", borderRadius: "5px" }}>
               <h3 style={{ color: "#ffffff", marginTop: 0 }}>Eliminar Registro ID 1 (DELETE)</h3>
               <p style={{ color: "#8b949e", fontSize: "14px" }}>Haz clic para solicitar la eliminación del recurso de prueba con ID 1.</p>
               
               <button
                  type="button"
                  onClick={handleDelete}
                  disabled={eliminando}
                  style={{ width: "100%", padding: "10px", backgroundColor: "#da3633", color: "#ffffff", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold", marginTop: "10px" }}
               >
                  {eliminando ? "Eliminando..." : "Eliminar Registro (DELETE)"}
               </button>

               {mensajeDelete && (
                  <p style={{ marginTop: "10px", color: mensajeDelete.tipo === "exito" ? "#3fb950" : "#ff7b72" }}>
                     {mensajeDelete.texto}
                  </p>
               )}
            </div>

         </div>

         {/* Listado GET existente */}
         {cargando && <p style={{ color: "#ffffff" }}>Cargando información...</p>}
         {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

         {!cargando && !error && (
            <div>
               {aprendices.map((aprendiz) => (
                  <article key={aprendiz.id} style={{ border: "1px solid #30363d", padding: "15px", margin: "10px 0", borderRadius: "5px", backgroundColor: "#161b22", color: "#ffffff" }}>
                     <h3 style={{ color: "#ffffff", marginTop: 0 }}>{aprendiz.name}</h3>
                     <p style={{ color: "#ffffff", margin: "5px 0" }}>Correo: {aprendiz.email}</p>
                     <p style={{ color: "#ffffff", margin: "5px 0" }}>Ciudad: {aprendiz.address.city}</p>
                  </article>
               ))}
            </div>
         )}
      </section>
   );
}

export default Aprendices;