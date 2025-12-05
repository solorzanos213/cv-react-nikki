function Educacion({ estudios }) {
  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {estudios.map((estudio, index) => (
          <li key={index}>{estudio}</li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;
