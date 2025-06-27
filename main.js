function Gerador() {
    let numbers = [];
    let elementos = document.getElementsByClassName('number');
    
    while (numbers.length < 6) {
        let numero = Math.floor(Math.random() * 60) + 1;
        if (!numbers.includes(numero)) {
            numbers.push(numero);
        }
    }
    
    for (let i = 0; i < elementos.length && i < numbers.length; i++) {
        let resultado = document.createElement("p");
        // Coloca zero à esquerda se for menor que 10
        let numFormatado = numbers[i] < 10 ? "0" + numbers[i] : numbers[i];
        resultado.innerText = numFormatado;
        elementos[i].innerHTML = "";
        elementos[i].appendChild(resultado);
    }
    
}

const gerar = document.getElementById('gerar')
gerar.addEventListener('click', () => {
    Gerador() 
})