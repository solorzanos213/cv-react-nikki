function Experiencia({ lista }) {
  return (
    <section>
      <h3>Experiencia Laboral</h3>

      {lista.map((exp, index) => (
        <div key={index}>
          <h4>{exp.cargo}</h4>
          <p>{exp.empresa}</p>
          <p>{exp.periodo}</p>
          <br />
        </div>
      ))}

      <hr />
    </section>
  );
}

export default Experiencia;