function verificaSeChuteValido(chute) {
    const numero = parseInt(chute)

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += "<div>Não é um número válido<div>"
        return
    }
    if (numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += (`<div>O número deve estar entre ${menorValor} e ${maiorValor}<div>`)
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou o número secreto ${numeroSecreto}</h2>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener("click", (e) => {
    if (e.target.id === "jogar-novamente") {
        window.location.reload()
    }
})