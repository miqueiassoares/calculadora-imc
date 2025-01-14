"use strict";

const button = document.querySelector("#submit");
const modalX = document.querySelector(".click");
const areaClick = document.querySelector(".area-click");

areaClick.addEventListener("click", (event) => {
    if(event.target === areaClick) {
        areaClick.style.display = "none";
    }
});


function gerarCorDeTexto(texto, aviso) {
    switch (texto) {
        case "Abaixo do peso":
            aviso.style.color = "rgb(197, 232, 145)";
            break;
        case "Peso ideal":
            aviso.style.color = "greenyellow";
            break;
        case "Levemente acima do peso":
            aviso.style.color = "rgb(87, 128, 0)";
            break;
        case "Obesidade I":
            aviso.style.color = "rgb(128, 117, 0)";
            break;
        case "Obesidade II":
            aviso.style.color = "rgb(128, 34, 0)";
            break;
        case "Obesidade III":
            aviso.style.color = "rgb(128, 0, 0)";
            break;
        case "Erro":
            aviso.style.color = "red";
            break;
    }
}

function gerarTexto(imc) {
    return imc<18.5 ? "Abaixo do peso" : imc>18.4 && imc<25 ? "Peso ideal" : imc>24.9 && imc<30 ? "Levemente acima do peso" : imc>29.9 && imc<35 ? "Obesidade I" : imc>34.9 && imc<40? "Obesidade II": imc> 39.9? "Obesidade III" : "Erro";
}

function abrirModal(imc) {
    const aviso = document.querySelector(".aviso");
    const modal = document.querySelector(".area-click");
    modal.style.display = "flex";
    const resultado = document.querySelector("#result");
    resultado.textContent = imc;
    const texto = gerarTexto(imc);
    gerarCorDeTexto(texto, aviso);
    aviso.textContent = texto;
}

function calcular(peso, altura) {
    const imc = peso/altura**2;
    abrirModal(imc.toFixed(1));
}

button.addEventListener("click", (event) => {
    event.preventDefault();
    const altura = Number(document.querySelector("#height").value);
    const peso = Number(document.querySelector("#weight").value);
    if (!(isNaN(peso)) && !(isNaN(altura)) && peso !== 0 && altura !== 0) {
        calcular(peso, altura);  
    }else {
        alert('Por favor, insira valores válidos para peso e altura');
    }
    document.querySelector("#height").value = "";
    document.querySelector("#weight").value = "";
});

modalX.addEventListener("click", () => {
    const modal = document.querySelector(".area-click");
    modal.style.display = 'none';
});

// DARK MODE - LIGHT MODE:

function ativarModo(element) {
    const lightMode = document.querySelector(".light-mode");
    const darkMode = document.querySelector(".dark-mode");
    const body = document.querySelector("body");
    const legend = document.querySelector("#title-form");
    if (element === darkMode && darkMode.classList.contains("desligado")){
        element.classList.toggle("desligado");
        element.classList.toggle("ligado");
        lightMode.classList.toggle("desligado");
        lightMode.classList.toggle("ligado");
        body.classList.toggle("light-mode-body")
        legend.classList.remove("legend");
    } else if (element === lightMode && lightMode.classList.contains("desligado")) {
        element.classList.toggle("desligado");
        element.classList.toggle("ligado");
        darkMode.classList.toggle("desligado");
        darkMode.classList.toggle("ligado");
        body.classList.toggle("light-mode-body")
        legend.classList.add("legend");
    }
}

const mode = document.querySelectorAll(".mode");
mode.forEach((element) => {
    element.addEventListener("click", () => {
        ativarModo(element);
    });
});