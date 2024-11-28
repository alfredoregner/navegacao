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

function bissexto(){
    let ano = parseInt(document.querySelector(".ano").value);

    if(ano % 4 == 0){
        alert(`${ano} é um ano bissexto`)
    }else{
        alert(`${ano} não é um ano bissexto`)
    }
}

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