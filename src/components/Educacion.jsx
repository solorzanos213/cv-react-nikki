function Educacion({ lista }) {
  return (
    <section>
      <h3>Educación</h3>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <hr />
    </section>
  );
}

export default Educacion;