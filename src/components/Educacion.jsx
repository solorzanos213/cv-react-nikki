const Educacion = () => {
  const formacion = [
    { institucion: "SENA", curso: "Tecnólogo ADSO", año: 2024 },
    { institucion: "Google Actívate", curso: "Desarrollo Web", año: 2023 },
    { institucion: "Udemy", curso: "JavaScript Moderno", año: 2023 },
    { institucion: "SENA", curso: "Fundamentos de Programación", año: 2022 },
    { institucion: "Platzi", curso: "React.js", año: 2024 },
    { institucion: "Coursera", curso: "Inglés Técnico", año: 2023 },
    { institucion: "Cisco", curso: "Networking Essentials", año: 2022 },
  ];

  return (
    <section>
      <h2>Educación</h2>
      <ul>
        {formacion.map((item, index) => (
          <li key={index}>
            <strong>{item.curso}</strong> - {item.institucion} ({item.año})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Educacion;
