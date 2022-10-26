
    const name = prompt("Digite seu nome:")
    const hours = parseFloat(prompt("Digite quantas horas você trabalhou:"))
    const price = parseFloat(prompt("Digite quanto vale cada hora trabalhada:"))

    const salary = hours * price

    alert(`Olá ${name}, salário mensal é R$${salary.toFixed(2)}`)

