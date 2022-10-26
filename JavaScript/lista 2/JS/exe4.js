
    const glic = Number(prompt("Digite a sua glicose"))
    if (glic <= 100){
        alert("Sua classificação é: Normal")
    } else if(glic > 100 && glic <= 140){
        alert("Sua classificação é: Elevado")
    } else if(glic > 140){
        alert("Sua classificação é: Diabetes")
    }
