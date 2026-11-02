import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import GestionCursos from "./components/GestionCurso";
import RegistroAprendiz from "./components/RegistroAprendiz";
import RegistroAprendizAPI from "./pages/RegistroAprendizAPI"; 
import PresentacionAprendiz from "./components/PresentacionAprendiz";
import AcercaDe from "./pages/AcercaDe";
import Usuarios from "./pages/Usuarios"; 
import Aprendices from "./pages/Aprendices";
import Instructores from "./pages/Instructores";
import Fichas from "./pages/Fichas";
import Competencias from "./pages/Competencias";
import Evaluaciones from "./pages/Evaluaciones";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cursos, setCursos] = useState(() => {
    const cursosGuardados = localStorage.getItem("mis_cursos");
    if (cursosGuardados) {
      return JSON.parse(cursosGuardados);
    }
    return [
      {
        id: 1,
        titulo: "Desarrollo Web",
        nombre: "Desarrollo Web",
        descripcion: "Aprende a crear páginas web modernas y atractivas.",
        informacion: "HTML, CSS y JavaScript desde cero.",
      },
      {
        id: 2,
        titulo: "Bases de Datos",
        nombre: "Bases de Datos",
        descripcion: "Aprende a gestionar y manipular bases de datos.",
        informacion: "Fundamentos de SQL y diseño relacional.",
      },
      {
        id: 3,
        titulo: "Inteligencia Artificial",
        nombre: "Inteligencia Artificial",
        descripcion: "Aprende a desarrollar soluciones basadas en inteligencia artificial.",
        informacion: "Conceptos de Machine Learning y Python.",
      },
      {
        id: 4,
        titulo: "Programación con Java",
        nombre: "Programación con Java",
        descripcion: "Aprende a desarrollar aplicaciones y soluciones mediante el lenguaje java.",
        informacion: "Programación Orientada a Objetos.",
      },
      {
        id: 5,
        titulo: "Curso de Python",
        nombre: "Curso de Python",
        descripcion: "Aprende a desarrollar aplicaciones mediante el entorno de python.",
        informacion: "Sintaxis básica y proyectos prácticos.",
      },
    ];
  });

 
  const [menuAbierto, setMenuAbierto] = useState(null);

  
  const toggleMenu = (nombreMenu) => {
    setMenuAbierto(menuAbierto === nombreMenu ? null : nombreMenu);
  };

  useEffect(() => {
    localStorage.setItem("mis_cursos", JSON.stringify(cursos));
  }, [cursos]);

  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "#0d1117", minHeight: "100vh", color: "#ffffff" }}>
        <Header />

        <nav className="menu-navegacion" style={{ 
          padding: "15px", 
          backgroundColor: "#161b22", 
          borderBottom: "1px solid #30363d", 
          textAlign: "center",
          marginBottom: "20px"
        }}>
          {/* Inicio (Libre) */}
          <Link to="/" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}>Inicio</Link>
          
          {/* Grupo: Cursos */}
          <div style={{ display: "inline-block", marginRight: "20px", position: "relative", verticalAlign: "middle" }}>
            <button 
              onClick={() => toggleMenu("cursos")} 
              style={{ background: "none", border: "none", color: "#ffffff", fontWeight: "bold", cursor: "pointer", fontSize: "16px", padding: 0, outline: "none" }}
            >
              Cursos ▾
            </button>
            {menuAbierto === "cursos" && (
              <div style={{ 
                position: "absolute", 
                backgroundColor: "#161b22", 
                border: "1px solid #30363d", 
                padding: "10px 15px", 
                borderRadius: "5px",
                marginTop: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                textAlign: "left",
                zIndex: 10,
                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                left: "0"
              }}>
                <Link to="/cursos" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Catálogo</Link>
                <Link to="/gestion" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Gestión</Link>
              </div>
            )}
          </div>

          {/* Grupo: Registros */}
          <div style={{ display: "inline-block", marginRight: "20px", position: "relative", verticalAlign: "middle" }}>
            <button 
              onClick={() => toggleMenu("registros")} 
              style={{ background: "none", border: "none", color: "#ffffff", fontWeight: "bold", cursor: "pointer", fontSize: "16px", padding: 0, outline: "none" }}
            >
              Registros ▾
            </button>
            {menuAbierto === "registros" && (
              <div style={{ 
                position: "absolute", 
                backgroundColor: "#161b22", 
                border: "1px solid #30363d", 
                padding: "10px 15px", 
                borderRadius: "5px",
                marginTop: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                textAlign: "left",
                zIndex: 10,
                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                left: "0"
              }}>
                <Link to="/registro" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Registro</Link>
                <Link to="/registro-api" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Registro API</Link>
              </div>
            )}
          </div>

          {/* Grupo: Académico */}
          <div style={{ display: "inline-block", marginRight: "20px", position: "relative", verticalAlign: "middle" }}>
            <button 
              onClick={() => toggleMenu("academico")} 
              style={{ background: "none", border: "none", color: "#ffffff", fontWeight: "bold", cursor: "pointer", fontSize: "16px", padding: 0, outline: "none" }}
            >
              Académico ▾
            </button>
            {menuAbierto === "academico" && (
              <div style={{ 
                position: "absolute", 
                backgroundColor: "#161b22", 
                border: "1px solid #30363d", 
                padding: "10px 15px", 
                borderRadius: "5px",
                marginTop: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                textAlign: "left",
                zIndex: 10,
                boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                left: "0"
              }}>
                <Link to="/usuarios" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Usuarios</Link>
                <Link to="/aprendices" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Aprendices</Link>
                <Link to="/instructores" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Instructores</Link>
                <Link to="/fichas" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Fichas</Link>
                <Link to="/competencias" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Competencias</Link>
                <Link to="/evaluaciones" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Evaluaciones</Link>
              </div>
            )}
          </div>

          {/* Acerca de (Libre) */}
          <Link to="/acerca-de" onClick={() => setMenuAbierto(null)} style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Acerca&nbsp;de</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos cursos={cursos} />} />
          <Route path="/gestion" element={<GestionCursos cursos={cursos} setCursos={setCursos} />} />
          <Route path="/registro" element={
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 20px" }}>
              <RegistroAprendiz />
              <hr style={{ margin: "30px 0", borderColor: "#30363d" }} />
              <PresentacionAprendiz listaCursos={cursos} />
            </div>
          } />
          <Route path="/registro-api" element={<RegistroAprendizAPI />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/aprendices" element={<Aprendices />} />
          <Route path="/instructores" element={<Instructores />} />
          <Route path="/fichas" element={<Fichas />} />
          <Route path="/competencias" element={<Competencias />} />
          <Route path="/evaluaciones" element={<Evaluaciones />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>

        <hr style={{ margin: "40px 0", borderColor: "#30363d" }} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;