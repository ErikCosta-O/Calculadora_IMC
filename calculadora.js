let calcular = document.getElementById('calcular')

function imc(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        let valorImc = (peso/(altura*altura)).toFixed(2)

        if (valorImc <18.5) {
            valor ="Abaixo do peso"
        }else if(valorImc <24.9) {
            valor ="Peso ideal"
        }else if (valorImc <29.9) {
            valor ="Levemente acima do Peso"
        }else if (valorImc <34.9) {
            valor="Obesidade Grau 1"
        }else if (valorImc <39.9) {
            valor="Obesidade Grau 2"
        }else{
            valor="Obesidade Grau 3"
        }
        resultado.textContent =`${nome} seu IMC é ${valorImc} e voçê está ${valor}`
    } else{
        resultado.textContent = `Prencha todos os campos`
    }
}
