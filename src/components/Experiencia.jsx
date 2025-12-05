<<<<<<< HEAD
function CabeceraCV() {
  return <h1>Pio es linod 123</h1>
}

export default CabeceraCV
=======
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
>>>>>>> a8ebe187ad0cfd67e9c95a8e00eb4615006ddfb9
