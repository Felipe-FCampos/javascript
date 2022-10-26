
    const num1 = parseFloat(prompt("num1"))
    const num2 = parseFloat(prompt("num2"))
    const num3 = parseFloat(prompt("num3"))

    function triangulo(num1, num2, num3){
        const trian = ((num1 * num3) / 2)
        return trian
    }

    function circulo(num1, num2, num3){
        const circ = (3.14159 * (num3*num3))
        return circ
    }

    function trapezio(num1, num2, num3){
        const trap = (num1 + num2)*num3
        return trap
    }

    function quadrado(num1, num2, num3){
        const quad = num2 * num2
        return quad
    }

    function retangulo(num1, num2, num3){
        const ret = (num1 * num2)
        return ret
    }

    alert(triangulo(num1, num2, num3))
    alert(circulo(num1, num2, num3))
    alert(quadrado(num1, num2, num3))
    alert(retangulo(num1, num2, num3))
    alert(trapezio(num1, num2, num3))

