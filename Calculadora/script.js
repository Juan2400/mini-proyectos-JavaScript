function temporal(operacion) {
    let valorPantalla = parseFloat(document.getElementById("pantalla").value);
    let valorTemporal = parseFloat(document.getElementById("temporal").innerHTML);
    if (!isNaN(valorTemporal)) {
        if(operacion === "suma"){
            suma(valorPantalla, valorTemporal);
        }else if(operacion === "resta"){
            resta(valorPantalla, valorTemporal);
        }else if(operacion === "multiplicacion"){
            multiplicacion(valorPantalla,valorTemporal);
        }else if(operacion === "divicion"){
            division(valorPantalla,valorTemporal);
        }else if(operacion === "modulo"){
            modulo(valorPantalla,valorTemporal);
        }
        valorTemporal = parseFloat(document.getElementById("pantalla").value);
    } else {
        valorTemporal = valorPantalla; 
    }

    document.getElementById("temporal").innerHTML = valorTemporal;
    document.getElementById("operacion").innerHTML = operacion;
    document.getElementById("pantalla").value = "";
}

function suma(valorPantalla, valorTemporal) {
    if (!isNaN(valorPantalla) && !isNaN(valorTemporal)) {
        let resultado = valorTemporal + valorPantalla;
        document.getElementById("pantalla").value = resultado;
    }
}

function resta(valorPantalla,valorTeporal) {
    if(valorPantalla !== null && valorTeporal !== null){
        let resultado = valorTeporal - valorPantalla;
        document.getElementById("pantalla").value = resultado;
    }
}

function multiplicacion(valorPantalla,valorTeporal) {
    if(valorPantalla !== null && valorTeporal !== null){
        let resultado = valorTeporal * valorPantalla;
        document.getElementById("pantalla").value = resultado;
    }
}

function division(valorPantalla,valorTeporal) {
    if(valorPantalla !== null && valorTeporal !== null){
        if(valorPantalla != 0){
            let resultado = valorTeporal / valorPantalla;
            document.getElementById("pantalla").value = resultado;
        }else{
            document.getElementById("pantalla").value = "No se puede dividir entre 0";
        }
    }
}

function modulo(valorPantalla,valorTeporal){
    if(valorPantalla !== null && valorTeporal !== null){
        let resultado = valorTeporal % valorPantalla;
        document.getElementById("pantalla").value = resultado;
    }
}

function agregar(number){
    document.getElementById("pantalla").value += number;
}

function limpiar(){
    document.getElementById("temporal").innerHTML= "";
    document.getElementById("pantalla").value = "";
    document.getElementById("operacion").innerHTML= "";
}

function igual(){
    let valorPantalla = parseFloat(document.getElementById("pantalla").value);
    let valorTeporal = parseFloat(document.getElementById("temporal").innerHTML);
    let operacion = document.getElementById("operacion").innerHTML;
    limpiar();
    if(operacion === "suma"){
        suma(valorPantalla,valorTeporal)
    }else if(operacion === "resta"){
        resta(valorPantalla,valorTeporal)
    }else if(operacion === "multiplicacion"){
        multiplicacion(valorPantalla,valorTeporal)
    }else if(operacion === "division"){
        division(valorPantalla,valorTeporal)
    }else if(operacion === "modulo"){
        modulo(valorPantalla,valorTeporal)
    }
}

function eliminar() {
    let remueva = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = remueva.slice(0, -1);
}

// Agregar los eventos de clic
document.getElementById("suma").addEventListener('click', () => temporal ("suma"));
document.getElementById("resta").addEventListener('click', () => temporal ("resta"));
document.getElementById("multiplicacion").addEventListener('click', () =>  temporal ("multiplicacion"));
document.getElementById("division").addEventListener('click', () => temporal ("division"));
document.getElementById("modulo").addEventListener('click', () => temporal ("modulo"));
document.getElementById("limpiar").addEventListener('click',limpiar);
document.getElementById("igual").addEventListener('click', () => igual ());
document.getElementById("eliminar").addEventListener('click', () => eliminar ());

document.getElementById("numero1").addEventListener('click', function() {
    agregar(1);
});
document.getElementById("numero2").addEventListener('click', () => agregar(2));
document.getElementById("numero3").addEventListener('click', () => agregar(3));
document.getElementById("numero4").addEventListener('click', () => agregar(4));
document.getElementById("numero5").addEventListener('click', () => agregar(5));
document.getElementById("numero6").addEventListener('click', () => agregar(6));
document.getElementById("numero7").addEventListener('click', () => agregar(7));
document.getElementById("numero8").addEventListener('click', () => agregar(8));
document.getElementById("numero9").addEventListener('click', () => agregar(9));
document.getElementById("numero0").addEventListener('click', () => agregar(0));





