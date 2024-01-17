
let acciones=[]
let nombre;
let user;
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
    acciones.push("sumar")
}

function restar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let resultado = 0;
    resultado = n1 - n2 - n3;
    alert("el resultado es: " + resultado)
    acciones.push("restar")
}

function multiplicar() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let resultado = 0;
    resultado = n1 * n2 * n3;
    alert("el resultado es: " + resultado)
    acciones.push("multiplicar")
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
    acciones.push("dividir")
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

function moves() {
    let result = "<table>";
    for (const element of acciones) {
        result += "<tr><td>" + element + "</td></tr>";
      }
      result += "</table>";
    let getid=document.getElementById("show-acciones")
    getid.innerHTML=result
}

function search(){    
    let dato=document.getElementById("buscar").value.toLowerCase();
    let items = acciones.filter(accion => accion.toLowerCase() === dato);
    let cantidad=items.length
    alert("La operación " + dato +" se ha realizado " + cantidad + " veces");
}


function perfil(){
   nombre= prompt("ingrese su nombre");
   user = prompt('ingrese su nick');
}

function info(){
    const object = {
        name:nombre,
        nick: user,
    }  
    alert("hola "+object.name + " tu nick es: "+ object.nick);  
}

