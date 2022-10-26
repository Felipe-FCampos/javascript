
    const num1 = Number(prompt("Digite o primeiro numero:"))
    const num2 = Number(prompt("Digite o segundo numero:"))

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

    alert(`adição: ` + adicao(num1, num2))
    alert(`subtração: ` + subtracao(num1, num2))
    alert(`multiplicação: ` + multiplicacao(num1, num2))
    alert(`divisão: ` + divisao(num1, num2))
