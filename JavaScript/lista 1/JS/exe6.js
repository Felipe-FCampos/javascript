
    const name = prompt("Digite seu nome:")
    const salary = parseFloat(prompt("Digite quanto é salário:"))
    const price = parseFloat(prompt("Digite a quantidade de dinheiro obtida neste mês:"))

    const bonus = price * 0.15
    const total = (bonus + salary)   

    alert(`Olá ${name}, o valor de seu bônus é ${bonus} e seu salário total é de ${total}`)
