
    const prod = Number(prompt("Digite o preço do produto"))
    const quant = Number(prompt("Digite quantos você comprou"))
    const valor = Number(prompt("Digite quanto você pagou"))
    const total = prod * quant

    if(valor > total){
        const pag = (((prod * quant) - valor)* -1)
        alert(`Você receberá de troco: ${pag}`)
    } else {
        alert(`Valor insuficiente`)
    }
