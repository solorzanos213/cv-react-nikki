# CV Dinámico - Sofía Solórzano

Proyecto de CV interactivo desarrollado con **React** y **Vite**, con funcionalidades de interactividad y renderizado dinámico.

---

## Funcionalidades principales

1. **Cabecera Dinámica (`CabeceraCV`)**  
   - Muestra el nombre, cargo, ciudad y contacto.  
   - Los datos se pasan como props desde `App.jsx`, lo que hace que el componente sea reutilizable y dinámico.

2. **Educación Dinámica (`Educacion`)**  
   - Renderiza la lista de estudios desde un arreglo de props (`estudios`).  
   - Permite actualizar la lista de educación sin modificar el componente.

3. **Habilidades Dinámicas (`Skills`)**  
   - Renderiza la lista de tecnologías desde el estado en `App.jsx`.  
   - Actualizable mediante el **Formulario de Tecnologías**.

4. **Toggle de Habilidades (`ToggleHabilidades`)**  
   - Permite mostrar u ocultar la sección de habilidades con un botón.  
   - Utiliza `useState` y funciones callback para controlar la visibilidad.

5. **Formulario de Tecnologías (`FormularioTecnologia`)**  
   - Permite agregar nuevas tecnologías al stack dinámicamente.  
   - Inputs controlados con `useState` y evento `onSubmit`.

---

## Capturas de pantalla

- Toggle de habilidades:  
![Toggle Habilidades](captura-toggle.png)

- Formulario de tecnologías:  
![Formulario Tecnologías](captura-formulario.png)

- Lista de tecnologías actualizada:  
![Lista Tecnologías](captura-lista.png)

---

## Estructura de archivos

