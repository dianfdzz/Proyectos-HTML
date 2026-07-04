window.alert("Esto es una alerta desde el objeto window.");

function mostrarAlerta() {
    window.alert("Esto es una alerta desde el objeto window.");
}

function mostrarPromtp() {
    let variable = window.prompt("Digite su nombre:", "Nombre");
    window.alert("Hola " + variable + ", bienvenido!");
    console.log("Hola " + variable + ", bienvenido!");
}

function mostrarConfirm() {
    let variable = window.confirm("¿Desea continuar?");
    if (variable) {
        console.log("Ha decidido continuar.");
    } else {
        console.log("Ha decidido no continuar.");
    }
}

function abrirVentana() {
    let ventana = window.open("https://www.google.com", "_blank");
    ventana.document.title = "Nueva Ventana";
    ventana.document.write = "Abrimos una nueva ventana con el objeto window.";
    ventana.log(ventana.outerHeight);
    ventana.log(ventana.outerWidth);
}

function usarLoxation(){
    console.log(window.location.host);
    console.log(window.location.href);
    console.log(window.location.protocol);
}

