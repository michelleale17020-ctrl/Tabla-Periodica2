// Inicializacion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timerInicial = 30;
let timer = 30;
let tiempoRegresivoId = null;

//Apuntando a documentos HTML
let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');
//Generacion de numeros Aleatorios
let elementos = ["Carbono", "C", "Cobre", "Cu", "Zinc", "Zn", "Hierro", "Fe", "Litio", "Li", "Plata", "Ag", "Plomo", "Pb", "Cloro", "Cl"];

elementos.sort(function() {
    return Math.random() - 0.5;
});

console.log(elementos);

//Funciones
function contarTiempo(){
   tiempoRegresivoId = setInterval(()=>{
    timer--;
    mostrarTiempo.innerHTML = `Temporizador: ${timer} segundos`;
    if(timer==0){
clearInterval(tiempoRegresivoId);
    bloquearTarjetas();
    }
    }, 1000)
}

function bloquearTarjetas(){
    for(let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = elementos[i];
        tarjetaBloqueada.disabled = true;
    }
}


/*Funcion Principal*/
function destapar(id){

if(temporizador==false){
    contarTiempo();
    temporizador = true;
}

 tarjetasDestapadas++;
 console.log(tarjetasDestapadas);

  if(tarjetasDestapadas==1){
    //Mostrar el primer numero
tarjeta1 = document.getElementById(id);
primerResultado = elementos[id];
tarjeta1.innerHTML = primerResultado;


   //Deshabilitar el primer boton
   tarjeta1.disabled = true;
  } else if(tarjetasDestapadas==2){
    //Mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = elementos[id];
    tarjeta2.innerHTML = segundoResultado;

    //Desabilitar segundo boton
    tarjeta2.disabled = true;

    //Incrementar movimientos
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

if((primerResultado=="Carbono" || segundoResultado=="Carbono") && (primerResultado=="C" || segundoResultado=="C")){ 
    //Encerrar contador tarjetas destapadas
    tarjetasDestapadas = 0;

    //Aumentar Aciertos
    aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
 }
else if((primerResultado=="Cobre" || segundoResultado=="Cobre") && (primerResultado=="Cu" || segundoResultado=="Cu")){ 
tarjetasDestapadas = 0;
aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
}
else if((primerResultado=="Hierro" || segundoResultado=="Hierro") && (primerResultado=="Fe" || segundoResultado=="Fe")){ 
tarjetasDestapadas = 0;
aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
}
else if((primerResultado=="Litio" || segundoResultado=="Litio") && (primerResultado=="Li" || segundoResultado=="Li")){ 
tarjetasDestapadas = 0;
aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
}
else if((primerResultado=="Plata" || segundoResultado=="Plata") && (primerResultado=="Ag" || segundoResultado=="Ag")){ 
tarjetasDestapadas = 0;
aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
}
else if((primerResultado=="Plomo" || segundoResultado=="Plomo") && (primerResultado=="Pb" || segundoResultado=="Pb")){ 
tarjetasDestapadas = 0;
aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
}
else if((primerResultado=="Cloro" || segundoResultado=="Cloro") && (primerResultado=="Cl" || segundoResultado=="Cl")){ 
tarjetasDestapadas = 0;
aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
}
else if((primerResultado=="Zinc" || segundoResultado=="Zinc") && (primerResultado=="Zn" || segundoResultado=="Zn")){ 
tarjetasDestapadas = 0;
aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
}


 else{
    //Mostrar momentaneamente valores y volver a tapar
    setTimeout(()=>{
        tarjeta1.innerHTML = ' ';
        tarjeta2.innerHTML = ' ';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
    }, 800)
 }
}
if(aciertos == 8){
    clearInterval(tiempoRegresivoId);
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😱​`;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🤟​😎​​`;
    mostrarTiempo.innerHTML = `Fantastico 🎉​ solo demoraste : ${timerInicial - timer} segundos​​`;
}
}
