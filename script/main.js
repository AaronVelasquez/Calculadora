function sumar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let resultado = 0;
    if(isNaN(n1) || isNaN(n2)|| isNaN(n3)){
        alert("debe ingresar tres números")
    }
    else{
        resultado = n1 + n2 + n3;
    alert("el resultado es: " + resultado)
    }
}
function restar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let resultado = 0;
    resultado = n1 - n2 - n3;
    alert("el resultado es: " + resultado)
}
function multiplicar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let resultado = 0;
    resultado = n1 * n2 * n3;
    alert("el resultado es: " + resultado)
}
function dividir() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let resultado = 0;
    if (n3 == 0) {
        alert("imposible dividir entre 0");
    }
    else {
        resultado = n1 / n2 / n3;
        alert("el resultado es: " + resultado)
 
    }
}
function mensaje(){
    let n4=prompt("Digite un número mayor a 0");
    let result=parseInt(n4);
    if(isNaN(result)){
        alert("Ingrese un número")
    }
    else{
        let resultado="";
    for(let i=1;i<11;i++){
        resultado += `${result} * ${i} = ${result * i}\n`;
    }
    alert(resultado);
 
    }
}