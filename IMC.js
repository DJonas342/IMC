//1. Buscar por chave e valor em storage ao carregar o conteudo da página
document.addEventListener("DOMContentLoaded", () => {
    const campos = ["peso", "altura"];

    campos.forEach(campo => {
        const valor = sessionStorage.getItem(campo);
        //2. Caso tenha, atribuir valor ao campo de peso e altura
        if (valor){
            const input = document.getElementById(campo);
            if(input){
                input.value = valor;
            }
        }
    });
});

//3. Adicionar evento ao para salvar altura e peso ao clique do botão
document.getElementById("calcular").addEventListener("click", (evento) => {
    const button = evento.target;
    // Entrada //

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    //Salvar campos em storage
    sessionStorage.setItem("peso", peso);
    sessionStorage.setItem("altura", altura);
    // Processamento //

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } 
    else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau II';
    } else {
        classificacao = 'Obesidade grau III';
    }
    // Saida //
    document.getElementById("resultado").textContent = "O IMC é = "+ imc.toFixed(2);
    document.getElementById("classificação").textContent = "Classificação do IMC = "+ classificacao
});