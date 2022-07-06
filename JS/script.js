// TODAS AS VARIÁVEIS DOCUMENT
let enviarBTN = document.getElementById("enviarBTN");
let doneSymbol = document.getElementById("doneSymbol");
let starSymbol = document.getElementById("starSymbol");
let horaAtual = document.getElementById("horaAtual");
let dataAtual = document.getElementById("dataAtual");
let listaP = document.getElementById("listaP");
let lista = document.getElementById("lista");
let barraDeTarefa = document.getElementById("barraDeTarefa");
let mudarTemaBTN = document.getElementById("mudarTemaBTN");
let mudarTemaCirculo = document.getElementById("mudarTemaCirculo");
let toggleOn = false;
// ==========================

// TODAS AS VARIÁVEIS GLOBAIS
let tarefaPriorizada = false;
let data = new Date()
let hora = data.getHours();
let min = data.getMinutes();
let dia = data.getDate()
let diaDeSemana = data.getDay();
let mes = data.getMonth();
let ano = data.getFullYear();
let dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// ==========================

// TODOS OS EVENTOS
mudarTemaBTN.addEventListener("click", mudarTema);

enviarBTN.addEventListener("mouseenter", () => {
    enviarBTN.style.backgroundColor = "green";
    doneSymbol.style.color = "white";
})
enviarBTN.addEventListener("mouseleave", () => {
    enviarBTN.style.backgroundColor = "white";
    doneSymbol.style.color = "green";
})

starSymbol.addEventListener("click", () => {
    if (tarefaPriorizada == false) {
        tarefaPriorizada = true;
        starSymbol.style.color = "#ffe600";
        starSymbol.style.textShadow = "0 0 12px rgb(255, 208, 0)"
    } else {
        tarefaPriorizada = false;
        starSymbol.style.color = "grey";
        starSymbol.style.textShadow = "none";
    }
});
enviarBTN.addEventListener("click", criarLi);
document.addEventListener("keydown", criarLiOnKD);
listaP.addEventListener("click", excluirLiP);
lista.addEventListener("click", excluirLi);

// ================
dataAtual.innerText = "Dia " + dia + " de " + meses[mes] + " de " + ano + ", " + dias[diaDeSemana];
if(horaAtual.innerText.length == 4 ){
    horaAtual.innerText = hora + ":0" + min;
}else{
    horaAtual.innerText = hora + ":" + min;
}

setInterval(() => {
    data = new Date()
    hora = data.getHours();
    min = data.getMinutes();
    dia = data.getDate()
    diaDeSemana = data.getDay();
    mes = data.getMonth();
    ano = data.getFullYear();

    if(horaAtual.innerText.length == 4 ){
        horaAtual.innerText = hora + ":0" + min;
    }else{
        horaAtual.innerText = hora + ":" + min;
    }

    dataAtual.innerText = "Dia " + dia + " de " + meses[mes] + " de " + ano + ", " + dias[diaDeSemana];

}, 10000);

function mudarTema(){
    mudarTemaCirculo.classList.toggle("toggleOnOff");
    if(mudarTemaCirculo.classList == "toggleOnOff"){
        toggleOn = true;
    }else{
        toggleOn = false;
    }
    
    if(toggleOn == false){
        temaEscuro();
    }else{
        temaClaro();
    }
};

// if(tema)

function temaEscuro(){
    mudarTemaCirculo.style.backgroundColor = "whitesmoke";
    mudarTemaBTN.style.backgroundColor = "grey";
    document.getElementById("header").style.backgroundColor = "rgb(55, 55, 55)";
    document.getElementById("header").style.boxShadow = "0 0 8px 2px black";
    document.getElementById("dataAtual").style.color = "whitesmoke";
    document.getElementById("horaAtual").style.color = "whitesmoke";
    document.body.style.backgroundColor = "rgb(70,70,70)";
    document.getElementById("areaDeDados").style.boxShadow = "0 0 7px black"
    document.getElementById("areaDeDados").style.backgroundColor = "rgb(70, 70, 70)";  
    lista.style.color = "whitesmoke";
}

function temaClaro(){
    mudarTemaCirculo.style.backgroundColor = "rgb(255, 217, 0)";
    mudarTemaBTN.style.backgroundColor = "rgb(80, 80, 80)";
    document.getElementById("header").style.backgroundColor = "rgb(239, 239, 239)";
    document.getElementById("header").style.boxShadow = "0 0 8px 2px rgb(131, 131, 131)";
    document.getElementById("dataAtual").style.color = "rgb(60, 60, 60)";
    document.getElementById("horaAtual").style.color = "rgb(60, 60, 60)";
    document.body.style.backgroundColor = "rgb(226, 226, 226)";
    document.getElementById("areaDeDados").style.boxShadow = "0 0 7px rgb(10, 10, 10)"
    document.getElementById("areaDeDados").style.backgroundColor = "rgba(0, 0, 0, 0)";
    lista.style.color = "black";
}

function criarLi() {
    if(barraDeTarefa.value != ""){
    if (tarefaPriorizada == true) {
        let novoLiP = document.createElement("li");
        novoLiP.innerText = barraDeTarefa.value;
        listaP.appendChild(novoLiP);
        localStorage.setItem("listaPLS", listaP.innerHTML);
    } else {
        let novoLi = document.createElement("li");
        novoLi.innerText = barraDeTarefa.value;
        lista.appendChild(novoLi);
        localStorage.setItem("listaLS", lista.innerHTML);
    }
    barraDeTarefa.value = "";
}
};

function criarLiOnKD() {
    if(barraDeTarefa.value != ""){
    if (event.keyCode !== 13) return;
    if (tarefaPriorizada == true) {
        let novoLiP = document.createElement("li");
        novoLiP.innerText = barraDeTarefa.value;
        listaP.appendChild(novoLiP);
        localStorage.setItem("listaPLS", listaP.innerHTML);
    } else {
        let novoLi = document.createElement("li");
        novoLi.innerText = barraDeTarefa.value;
        lista.appendChild(novoLi);
        localStorage.setItem("listaLS", lista.innerHTML);
    }
    barraDeTarefa.value = "";
}
};


function excluirLiP(element){
    listaP.removeChild(element.target);
    localStorage.setItem("listaPLS", listaP.innerHTML);
}
function excluirLi(element){
    lista.removeChild(element.target);
    localStorage.setItem("listaLS", lista.innerHTML);
}

lista.innerHTML = localStorage.getItem("listaLS");
listaP.innerHTML = localStorage.getItem("listaPLS");