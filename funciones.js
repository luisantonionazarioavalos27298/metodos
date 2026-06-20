const num1 = document.querySelector("#numero_1")
const num2 = document.querySelector("#numero_2")
const buttonSuma = document.querySelector("#btnSuma")
const buttonResta = document.querySelector("#btnResta")
const buttonMultiplica = document.querySelector("#btnMultiplica")
const buttonDivide = document.querySelector("#btnDivide")
const resultado = document.querySelector("#resultado")

buttonSuma.addEventListener("click", () => {
    mostrarResultado(suma(num1.value, num2.value))
})

buttonResta.addEventListener("click", () => {
    mostrarResultado(resta(num1.value, num2.value))
})

buttonMultiplica.addEventListener("click", () => {
    mostrarResultado(multiplica(num1.value, num2.value))
})

buttonDivide.addEventListener("click", () => {
    if (parseFloat(num2.value) === 0) {
        resultado.textContent = "No se puede dividir entre 0"
        limpiar(num1, num2)
        return
    }

    mostrarResultado(divide(num1.value, num2.value))
})

function mostrarResultado(res) {
    resultado.textContent = "Resultado: " + res
    limpiar(num1, num2)
}

function suma(a, b) {
    return parseFloat(a) + parseFloat(b)
}

function resta(a, b) {
    return parseFloat(a) - parseFloat(b)
}

function multiplica(a, b) {
    return parseFloat(a) * parseFloat(b)
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b)
}

function limpiar(num1, num2) {
    num1.value = ""
    num2.value = ""
}
