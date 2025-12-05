const StackTecnologias = () => {
  const tecnologias = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Tailwind", "Git", "GitHub", "Express", "MongoDB"];

  const getColor = (tech) => {
    if (tech === "JavaScript") return "#f7df1e";
    if (tech === "React") return "#61dafb";
    if (tech === "Node.js") return "#3c873a";
    if (tech === "CSS") return "#264de4";
    if (tech === "HTML") return "#e34c26";
    if (tech === "Tailwind") return "#38b2ac";
    if (tech === "Git") return "#f34f29";
    if (tech === "GitHub") return "#000";
    if (tech === "Express") return "#000000";
    if (tech === "MongoDB") return "#4DB33D";
    return "#888";
  };

  return (
    <section>
      <h2>Stack Tecnológico</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {tecnologias.map((tech, index) => (
          <span
            key={index}
            style={{
              background: getColor(tech),
              padding: "8px 12px",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold"
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default StackTecnologias;
