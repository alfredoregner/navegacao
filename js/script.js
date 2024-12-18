// Direcionamentos
function home(){
    window.location = "index.html";
}
function ex1(){
    window.location = "exercicio1.html";
}
function ex2(){
    window.location = "exercicio2.html";
}
function ex3(){
    window.location = "exercicio3.html";
}
function ex4(){
    window.location = "exercicio4.html";
}
function ex5(){
    window.location = "exercicio5.html";
}
function ex6(){
    window.location = "exercicio6.html";
}


// Exercício 1
function verificar(){

    let numVariavel = parseInt(document.querySelector(".numVariavel").value);
    let numSecreto = Math.floor(Math.random()*10) +1; //Math.floor Arredonda o valor da variável. Math.round também funciona (casas decimais são arredondadas para o mais próximo)

    if(numSecreto != numVariavel){
        alert(`Tente novamente!\nNúmero secreto: ${numSecreto}. \nPalpite: ${numVariavel}`);
        window.location.reload();
    } else {
        alert(`Parabéns, você acertou!\nNúmero secreto: ${numSecreto}. \nPalpite: ${numVariavel}`);
    }
    window.location.reload();
}

// Exercício 2
function bissexto(){
    let ano = parseInt(document.querySelector(".ano").value);

    if(ano % 4 == 0){
        alert(`${ano} é um ano bissexto`)
    }else{
        alert(`${ano} não é um ano bissexto`)
    }
}

// Exercício 3
function nota(){
    let nota1 = parseFloat(document.querySelector(".nota1").value);
    let nota2 = parseFloat(document.querySelector(".nota2").value);
    let nota3 = parseFloat(document.querySelector(".nota3").value);
    let nota4 = parseFloat(document.querySelector(".nota4").value);

    let media = ((nota1 + nota2 + nota3 + nota4) / 4);

    if(media > 10){
        alert(`A média do aluno não pode ser maior que 10! \nMédia: ${media.toFixed(2)}`);

    }else if(media.toFixed(2) <=10 && media.toFixed(2) >=7){
        alert(`Aprovado \nMédia: ${media.toFixed(2)}`);

    }else if(media.toFixed(2) <7 && media.toFixed(2) >= 5){
        alert(`Recuperação \nMédia: ${media.toFixed(2)}`);

    }else if(media.toFixed(2) < 5 && media.toFixed(2) >= 0){
        alert(`Reprovado \nMédia: ${media.toFixed(2)}`);

    }else{
        alert(`A média do aluno não pode ser menor que 0! \nMédia: ${media.toFixed(2)}`);

    }
    window.location.reload();
}

// Exercício 4
function calcular(){
    let conta = parseFloat(document.querySelector(".conta").value);
    let avaliacao = document.querySelector(".avaliacao").value;

    if(avaliacao == "excelente"){
        let gorjeta = conta * 0.20;
        let total = conta + gorjeta;

        alert(`Gorjeta R$${gorjeta}\nTotal R$${total}`);
    }else if (avaliacao == "ótimo"){
        let gorjeta = conta * 0.15;
        let total = conta + gorjeta;

        alert(`Gorjeta R$${gorjeta}\nTotal R$${total}`);
    }else if (avaliacao == "bom"){
        let gorjeta = conta * 0.10;
        let total = conta + gorjeta;

        alert(`Gorjeta R$${gorjeta}\nTotal R$${total}`);
    }else{
        alert(`Não tem gorjeta. \nValor final da conta R$${conta}`);
    }
    window.location.reload();
}

// Exercício 5
function hora(){
    let dia = new Date().getHours()

    if(dia >= 6 && dia < 12){
        alert("Bom dia!");
    }else if (dia >= 12 && dia < 18){
        alert("Boa tarde!");
    }else {
        alert("Boa noite!");
    }
}

// Exercício 6
function senha(){
    let senha = "JavaScript123";
    let validar = document.querySelector(".validar").value;
    let resultado = document.createElement("h3");
    let campoResultado = document.querySelector("#resultado");

    if(validar == senha){
        resultado = `SENHA CORRETA!`;
        campoResultado.innerHTML= resultado;
        campoResultado.classList.replace("oculto", "visivel");
    } else if(validar.length >= 8 && validar != senha){
        resultado = `SENHA INCORRETA!`;
        campoResultado.innerHTML= resultado;
        campoResultado.classList.replace("oculto", "visivel");
    } else{
        resultado = `SENHA INVÁLIDA! Senha contém mais do que 8 caracteres`;
        campoResultado.innerHTML= resultado;
        campoResultado.classList.replace("oculto", "visivel");
    }
}

function mostrarSenha(){
    let mostrarSenha = document.querySelector(".validar");
    if(mostrarSenha.type == "password"){
        mostrarSenha.type = 'text';
    }else{
        mostrarSenha.type = 'password';
    }
}

//Desafio for
function receita(){
    let checkboxes = document.querySelectorAll('input[type="checkbox"]')
    let showSelectedBtn = document.getElementById('show-selected')
    let resultDiv = document.getElementById('result')
    
    showSelectedBtn.addEventListener('click', () => {
        let selectedIngredients = [] 
    
        function verificaCheckbox(checkbox) {
            if (checkbox.checked) {
                selectedIngredients.push(checkbox.value) 
            }
        }
    
        checkboxes.forEach(verificaCheckbox)
        
        if (selectedIngredients.length > 0) {
            resultDiv.textContent = `Ingredientes para a receita: ${selectedIngredients.join(', ')}`
        } else {
            resultDiv.textContent = 'Nenhum ingrediente foi selecionado.'
        }
    })
}
