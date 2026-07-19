$(document).ready(function () {
    // Espera a que toda la página cargue antes de ejecutar el código.


    // 1.Cambia la imagen del perro cuando el cursor pasa sobre ella.

    $("#imagen1").mouseenter(function () {
        $(this).attr("src", "img/Capibara.png");
    });

    $("#imagen1").mouseleave(function () {
        $(this).attr("src", "img/Perrito.png");
    });


    $("#imagen2").mouseenter(function () {
        $(this).attr("src", "img/Gato2.png");
    });

    $("#imagen2").mouseleave(function () {
        $(this).attr("src", "img/Gatito.png");
    });


    $("#imagen3").mouseenter(function () {

        // Muestra la segunda imagen.
        $(this).attr("src", "img/Pez.png");
    });

    // Restaura la imagen original cuando el cursor sale.
    $("#imagen3").mouseleave(function () {

        // Vuelve a mostrar la imagen inicial.
        $(this).attr("src", "img/Hamster.png");
    });


    // Almacena los colores que se usarán en el cuadro, como una lista.
    let colores = ["steelblue", "tomato", "mediumseagreen", "hotpink"];

    // Guarda la posición del color actual.
    let indiceColor = 0;


    // Almacena los mensajes que se mostrarán en el párrafo como s i fuera una lista.
    let mensajes = [
        "Bienvenido al Museo de Mascotas. Explora nuestra galería y descubre a nuestros adorables amigos de cuatro patas.",
        "¡Amemos a las mascotas juntos!",
        "Cada mascota merece un hogar lleno de cariño.",
        "Las mascotas nos enseñan amistad, lealtad y amor incondicional."
    ];

    // Guarda la posición del mensaje actual.
    let indiceMensaje = 0;

    // 2.Cambia el color del cuadro cada vez que se presiona el botón.

    $("#btnColor").click(function () {

        // Avanza al siguiente color de la lista.
        indiceColor++;

        // Reinicia el ciclo al llegar al último color.
        if (indiceColor >= colores.length) {
            indiceColor = 0;
        }

        // Aplica el nuevo color al cuadro.
        $("#cuadro").css("background-color", colores[indiceColor]);

    });


    // 3.Cambia el mensaje del párrafo cada vez que se presiona el botón.

    $("#btnTexto").click(function () {

        // Avanza al siguiente mensaje.
        indiceMensaje++;

        // Reinicia el ciclo al llegar al último mensaje.
        if (indiceMensaje >= mensajes.length) {
            indiceMensaje = 0;
        }

        // Muestra el nuevo mensaje en el párrafo.
        $("#parrafo").text(mensajes[indiceMensaje]);
    });


    // Animacion al presionar un boton
    $("#btnAnimar").click(function () {
        $("#imagenAnimada").animate({
            width: "350px",
            height: "350px",
            opacity: 0.5
        }, 1000);
    });

    // Esconde el elemento al hacer click sobre el
    $("#imagenOcultar").click(function () {
        $(this).hide();

    });
});

