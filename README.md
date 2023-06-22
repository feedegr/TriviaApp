# Trivia Game - Juego de Preguntas y Respuestas

Este proyecto es una página web interactiva que ofrece un juego de trivia con preguntas aleatorias y múltiples opciones de respuesta. Los jugadores pueden poner a prueba sus conocimientos en diferentes categorías y tratar de seleccionar la respuesta correcta para acumular puntos.

## Características principales

- **Preguntas aleatorias:** El juego de trivia presenta preguntas seleccionadas al azar de una base de datos. Cada vez que se inicia una partida, se generan preguntas nuevas para brindar una experiencia de juego variada y desafiante.

- **Categorías temáticas:** Las preguntas se agrupan en diferentes categorías temáticas, como deportes, historia, ciencia, entretenimiento, etc. Los jugadores pueden elegir la categoría en la que desean jugar y responder preguntas relacionadas.

- **Opciones de respuesta:** Para cada pregunta, se muestran varias opciones de respuesta. Los jugadores deben seleccionar la opción que consideren correcta antes de que se acabe el tiempo. Se proporciona retroalimentación inmediata para indicar si la respuesta fue correcta o incorrecta.

- **Puntuación y clasificación:** Los jugadores acumulan puntos por cada respuesta correcta. Al final del juego, se muestra la puntuación obtenida y se proporciona una clasificación de los jugadores según sus resultados.

## Tecnologías utilizadas

- **Frontend:** La página web se desarrolló utilizando React.js, una biblioteca popular de JavaScript para construir interfaces de usuario interactivas. Se utilizó Bootstrap para el estilizado y diseño responsivo de la página, lo que facilita la creación de una interfaz atractiva y adaptable a diferentes dispositivos.

- **Gestión de estado:** Para gestionar el estado de la aplicación, se utilizó el Context API de React, lo que permite compartir y actualizar datos entre componentes de manera eficiente.

- **API de preguntas:** Las preguntas y opciones de respuesta se obtienen de una API externa, que proporciona una amplia variedad de preguntas en diferentes categorías. Se utilizó fetch para realizar las solicitudes a la API y obtener los datos necesarios para el juego.

