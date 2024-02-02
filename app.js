

function calcularV(){

    let distancia=parseFloat( document.getElementById("distancia").value);         //distancia en km
    let tiempo=parseFloat(document.getElementById("tiempo").value) ;//tiempo en minutos




    var velocidad=distancia/tiempo

   document.getElementById("result1").textContent=velocidad.toString() + "m/s";




}


//ejercicio 2

function clasificar(){
    var lado1=parseFloat(document.getElementById("lado1").value);
    var lado2=parseFloat(document.getElementById("lado2").value);
    var lado3=parseFloat(document.getElementById("lado3").value);

    clasificarTriangulo(lado1, lado2, lado3);



}

function clasificarTriangulo(lado1, lado2, lado3) {
    var resultado;
    if (lado1 === lado2 && lado2 === lado3) {
        resultado= "Equilátero"; 
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        resultado= "Isósceles"; 
    } else {
        resultado= "Escaleno"; 
    }

    document.getElementById("resultTriangulos").textContent=resultado;
}



//ejercicio 3

function calcular(){

   

    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);

    var operacion=document.getElementById("operacion").value;
    var resultado;

    switch(operacion){
        case "suma":
            resultado=num1+num2;
            break
        case "resta":
            resultado=num1-num2;
            break;
        case "dividir":
            resultado=num1/num2;
            break;
        case "multiplicar":
            resultado=num1*num2;


    }

    document.getElementById("resultCalculadora").textContent=resultado.toString();


}


//ejericio 4

function comprobar(){

    var numero=parseInt(document.getElementById("num").value);
    numPrimo(numero)

}
function numPrimo(numero){
    var resultado;

    if(numero %2==0){
       resultado="El número no es primo"
    }else{
        resultado="El número es primo"
    }

    document.getElementById("resultPrimo").textContent=resultado;


}