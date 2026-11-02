function Navbar() {
  return (
    <nav style={{ padding: "10px 0" }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", justifyContent: "center", gap: "15px" }}>
        <li><a href="#inicio" style={{ color: "#ffffff" }}>Inicio</a></li>
        <li><a href="#cursos" style={{ color: "#ffffff" }}>Cursos</a></li>
        <li><a href="#nosotros" style={{ color: "#ffffff" }}>Nosotros</a></li>
        <li><a href="#usuarios" style={{ color: "#ffffff" }}>Usuarios</a></li>
        <li><a href="#contacto" style={{ color: "#ffffff" }}>Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;