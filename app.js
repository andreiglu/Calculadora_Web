const btnCalcular = document.getElementById("btn-calcular");
const resultado = document.querySelector(".resultado");
const opcionTele = document.getElementById("opcion-tele");
const opcionLavadora = document.getElementById("opcion-lavadora");
const opcionComputadora = document.getElementById("opcion-computadora");
const opcionMusica = document.getElementById("opcion-musica");
const opcionRefrigerador = document.getElementById("opcion-refrigerador");
const opcionPlancha = document.getElementById("opcion-plancha");
const resultadoFinal = document.getElementById("total");
const modal = document.querySelector(".modal");
const btnAceptar = document.getElementById("btn-accept");
const gridContainer = document.querySelector(".grid-container");

let tiempoTele,tiempoLavadora,tiempoComputadora,resultadoDia,tiempoMusica,tiempoRefrigerador,tiempoPlancha;
let calculoTele,calculoLavadora,calculaComputadora,calculoMusica,calculoRefrigerador,calculoPlancha;
let teleWatts = 75, lavadoraWatts = 330, computadoraWatts = 160 , musicaWatts = 190, refrigeradorWatts = 225, planchaWatts = 1000;
let resultadoTotal;

opcionTele.addEventListener('change',(e)=>{

    let valor = e.currentTarget.value;
    if (valor==22){
        alert("Por favor completa el campo de televisión");
    }

    if(valor===0){
        tiempoTele = 0;
    }else{
        tiempoTele = valor;
    }
    calculoTele = tiempoTele*teleWatts;
});

opcionLavadora.addEventListener('change', (e)=>{

    let valorL = e.currentTarget.value;
    if(valorL==20){
        tiempoLavadora = 0.3;
    }else if(valorL==30){
        tiempoLavadora = 0.5;
    }else if(valorL == 45){
        tiempoLavadora = 0.75;
    }else if(valorL==1){
        tiempoLavadora = 1;
    } else if(valorL==0){
        tiempoLavadora = 0;
    }

    calculoLavadora = tiempoLavadora*lavadoraWatts;

});

opcionComputadora.addEventListener('change',(e)=>{
    let valorC = e.currentTarget.value;

    if(valorC === 0){
        tiempoComputadora = 0;
    } else{
        tiempoComputadora = valorC;
    }
    calculaComputadora = tiempoComputadora*computadoraWatts;
});

opcionMusica.addEventListener('change', (e) => {
    let valorM = e.currentTarget.value;
    if(valorM === 0){
        tiempoMusica = 0;
    }else{
        tiempoMusica = valorM;
    }
    calculoMusica = tiempoMusica*musicaWatts;
});

opcionRefrigerador.addEventListener('change', (e)=>{
    let valorR = e.currentTarget.value;

    if(valorR === 0 ){
        tiempoRefrigerador = 0;
    }else{
        tiempoRefrigerador = valorR;
    }
    calculoRefrigerador = tiempoRefrigerador*refrigeradorWatts;
    
});

opcionPlancha.addEventListener('change',(e)=>{
    let valorP = e.currentTarget.value;

    if(valorP == 0){
        tiempoPlancha = 0;
    }else if(valorP==10){
        tiempoPlancha = 0.16;
    }else if(valorP==15){
        tiempoPlancha = 0.25;
    }else if (valorP == 25) {
        tiempoPlancha = 0.5;
    }
    calculoPlancha = tiempoPlancha*planchaWatts;
});



btnCalcular.addEventListener("click",()=>{

    resultadoTotal = calculoTele + calculoLavadora + calculoRefrigerador + calculoMusica + calculoPlancha + calculaComputadora;
    console.log(calculoTele);
    console.log(calculoLavadora);
    console.log(calculaComputadora);
    console.log(calculoMusica);
    console.log(calculoRefrigerador);
    console.log(calculoPlancha);
    console.log(resultadoTotal);
    if(isNaN(resultadoTotal)){
        alert("Falta completar un campo");
    }else{
        resultadoFinal.textContent = `${resultadoTotal} W`;
        resultadoFinal.style.color = "red";
        modal.style.visibility = "visible";
        gridContainer.style.visibility = "hidden";
        modal.style.animation = "aparecer 1s forwards";
        window.scroll(0,0);
        btnAceptar.addEventListener("click", ()=>{
            location.reload();
        });
    }

});



