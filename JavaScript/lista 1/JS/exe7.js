
    const num = parseFloat(prompt("Digite o primeiro numero:"))
    const num2 = parseFloat(prompt("Digite o segundo numero:"))
    const num3 = parseFloat(prompt("Digite o terceiro numero:"))

    const trian = ((num * num3) / 2)
    const circ = (3.14 * (num3 * num3))
    const trape = (((num + num2) * num3) / 2)
    const quad = num2 * num2
    const ret = num * num2

    alert(`Área do triângulo: ${trian.toFixed(3)} - - - 
        Área de circunferência: ${circ.toFixed(3)} - - - 
        Área do trapézio: ${trape.toFixed(3)} - - - 
        Área do quadrado: ${quad.toFixed(3)} - - - 
        Área do retângulo: ${ret.toFixed(3)}`)
