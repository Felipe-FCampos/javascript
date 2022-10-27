
function calcular(){
    const num1 = Number(document.querySelector('#numero1').value)
    const num2 = Number(document.querySelector('#numero2').value)
}

    function adicao() {
        const soma = num1 + num2
        return soma   
    }

    function subtracao() {
        const sub = num1 - num2
        return sub   
    }

    function multiplicacao() {
        const mult = num1 * num2
        return mult   
    }

    function divisao() {
        const div = num1 / num2
        return div   
    }

    alert(`adição: ` + adicao(num1, num2)
    `subtração: ` + subtracao(num1, num2)
    `multiplicação: ` + multiplicacao(num1, num2)
    `divisão: ` + divisao(num1, num2))
