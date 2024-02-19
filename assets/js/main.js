let form = document.querySelector("form");

function mostraImcPagina(imcFrase){
    if(document.querySelector(".imc")){
        document.querySelector(".imc").innerHTML = imcFrase;
    }else{
        let div = document.createElement('div')
        div.className = "imc"
        div.innerHTML = imcFrase;
        document.querySelector("form").appendChild(div);
    }
}

function calcularImc(peso, altura){
    let imc = peso/(altura * altura);
    let imcRounded = imc.toFixed(2);
    if(imc < 18.5){
        return imcRounded + " Abaixo do peso"
    }
        else if(imc > 18.5 && imc < 24.9 ){
        return imcRounded + " Peso normal";
    }
    else if(imc > 25 && imc <29,9 ){
        return imcRounded + " Sobrepeso";
    }
    else if(imc > 30 && imc < 34,9  ){
        return imcRounded + " Obesidade grau 1";
    }
    else if(imc > 35 && imc < 39,9){
        return imcRounded + " Obesidade grau 2";
    }
    else if(imc > 50 ){
        return imcRounded + " Obesidade grau 3";
    }
}



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let peso = document.querySelector("#peso").value;
    let altura = document.querySelector("#altura").value;

    let imcFrase = calcularImc(peso, altura);
    mostraImcPagina(imcFrase);
})