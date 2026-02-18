// Función para sumar los números ingresados
function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

// Función para restar los números ingresados
function restar() {
    var num1 = parseFloat(document.getElementById("num1").value) || 0;
    var num2 = parseFloat(document.getElementById("num2").value) || 0;
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

// Completa agregando las funciones multiplicar() y dividir()
