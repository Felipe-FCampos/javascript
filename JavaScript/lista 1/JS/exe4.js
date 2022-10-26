
    const num = Number(prompt("Digite o primeiro numero entre 0 e 10?"))
    const num2 = Number(prompt("Digite o primeiro numero entre 0 e 10?"))
    const num3 = Number(prompt("Digite o primeiro numero entre 0 e 10?"))

    const pond = ((num * 2) + (num2 * 3) + (num3 * 5))
    const media = pond / 10

    alert("Sua media é: " + media.toFixed(1))
