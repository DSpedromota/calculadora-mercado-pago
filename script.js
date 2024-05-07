let fvalue = document.querySelector('input#fkm')
let res = document.querySelector('div#res')

function calcular() {
    let value = Number(fvalue.value)
    let taxa = 0.0555
    let calculo = value * taxa
    let calculoFinal = calculo + value

    res.innerHTML = `<p> Precisamos cobrar do cliente o valor de ${calculoFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} para receber o valor acima. <\p>`
}

