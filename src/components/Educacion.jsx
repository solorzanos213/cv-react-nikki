function Educacion({ lista }) {
  return (
    <section>
      <h3>Educación</h3>

      <ul>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <hr />
    </section>
  );
}

export default Educacion;