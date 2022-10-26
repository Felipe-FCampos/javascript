
    const nota = Number(prompt("Digite sua nota no 1ºbimestre"))
    const nota2 = Number(prompt("Digite sua nota no 1ºbimestre"))
    const nota3 = Number(prompt("Digite sua nota no 1ºbimestre"))
    const nota4 = Number(prompt("Digite sua nota no 1ºbimestre"))

    const media = ((nota + nota2 + nota3 + nota4) / 4)

    if(media > 6){
        alert(`Sua média é ${media.toFixed(1)}`)
    } else {
        alert(`Sua média é ${media.toFixed(1)} você foi reprovado.`)
    }
