
let cifra= "";
let acumulado=0;
let p_operacion=true;
let sumar=false;
let restar=false;
let multiplicar=false;
let dividir=false;

function displayNumeros(numero) {

    document.getElementById("display").value=cifra+numero;
    cifra=document.getElementById("display").value;
}

function suma() {
    if(restar){
        acumulado=acumulado-parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }else{
    acumulado=acumulado+parseInt(cifra);
    document.getElementById("display").value = acumulado;
    }
    cifra =""; 
    restar=false;
    sumar=true;
   

}
function resta() {

    if(p_operacion==false){
       if(sumar){
        acumulado=acumulado+parseInt(cifra);
        document.getElementById("display").value = acumulado;
    }else{
    acumulado=acumulado-parseInt(cifra);
    document.getElementById("display").value = acumulado;
    }  
    }else{
        acumulado=parseInt(cifra);
        p_operacion=false;
    }

   
    cifra ="";
    sumar=false;
    restar=true;
 

}
function multi() {

    acumulado=acumulado*parseInt(cifra);
    document.getElementById("display").value = acumulado;
    cifra ="";

}
function divi() {

    acumulado=acumulado/parseInt(cifra);
    document.getElementById("display").value = acumulado;
    cifra ="";

}

function solucion() {

 if(sumar){
    document.getElementById("display").value = acumulado+parseInt(cifra);
 }
 if(restar){
    document.getElementById("display").value = acumulado-parseInt(cifra);
 }

 acumulado = parseInt(document.getElementById("display").value);
 cifra=0;


}