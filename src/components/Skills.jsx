function Skills({ tecnologias }) {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <ul>
        {tecnologias.map((tec, index) => (
          <li key={index}>{tec}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
