const Experiencia = () => {
  const experiencias = [
    { cargo: "Desarrollador Frontend", empresa: "TechSolutions", año: 2023, descripcion: "Creación de interfaces en React" },
    { cargo: "Soporte TI", empresa: "DataCorp", año: 2022, descripcion: "Mantenimiento de equipos" },
    { cargo: "Proyecto Personal", empresa: "GitHub", año: 2024, descripcion: "App CRUD con Node.js" },
    { cargo: "Freelancer", empresa: "Upwork", año: 2023, descripcion: "Desarrollo de landing pages" },
    { cargo: "Proyecto ADSO", empresa: "SENA", año: 2024, descripcion: "Mini sitio web con buenas prácticas" },
    { cargo: "Backend Junior", empresa: "SistemasPro", año: 2023, descripcion: "APIs en Express" },
    { cargo: "Proyecto SQL", empresa: "SENA", año: 2024, descripcion: "Consultas y diseño de BD" },
    { cargo: "Ayudante Técnico", empresa: "ComputerFix", año: 2021, descripcion: "Reparación de equipos" },
    { cargo: "Proyecto React", empresa: "Personal", año: 2024, descripcion: "SPA con rutas dinámicas" },
    { cargo: "Aprendiz ADSO", empresa: "SENA", año: 2024, descripcion: "Construcción de software" },
  ];

  return (
    <section>
      <h2>Experiencia Laboral</h2>
      {experiencias.map((exp, index) => (
        <div key={index} className="item">
          <h3>{exp.cargo} - {exp.empresa}</h3>
          <p><strong>Año:</strong> {exp.año}</p>
          <p>{exp.descripcion}</p>
        </div>
      ))}
    </section>
  );
};

export default Experiencia;
