
function calcular(){
    const num1 = Number(document.querySelector('#numero1').value)
    const num2 = Number(document.querySelector('#numero2').value)

    const res = document.querySelector('.resultado')

    res.innerHTML= `
        <p>
        adição: ${adicao(num1, num2)} <br>
        subtração: ${subtracao(num1, num2)} <br>
        multiplicação: ${multiplicacao(num1, num2)} <br>
        divisão: ${divisao(num1, num2)} <br>
        </p>
    `
}

    function adicao(num1, num2) {
        const soma = num1 + num2
        return soma   
    }

    function subtracao(num1, num2) {
        const sub = num1 - num2
        return sub   
    }

    function multiplicacao(num1, num2) {
        const mult = num1 * num2
        return mult   
    }

    function divisao(num1, num2) {
        const div = num1 / num2
        return div   
    }
