function Header() {
  return (
    <header 
      style={{ 
        backgroundColor: "#0d1117", 
        padding: "20px", 
        borderBottom: "1px solid #30363d" 
      }}
    >
      {/* Contenedor Flexbox para alinear el logo y los textos en horizontal */}
      <div 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          gap: "15px" 
        }}
      >
        <img 
          src="/logo-sena.png" 
          alt="Logo SENA" 
          style={{ 
            maxHeight: "60px", 
            objectFit: "contain" 
          }} 
        />
        
        <div style={{ textAlign: "left" }}>
          <h1 style={{ color: "#ffffff", margin: 0, fontSize: "1.8rem", fontWeight: "bold" }}>
            Centro Nacional Colombo Alemán
          </h1>
          <p style={{ color: "#ffffff", margin: "5px 0 0 0", fontSize: "0.95rem" }}>
            Formación para el futuro
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;