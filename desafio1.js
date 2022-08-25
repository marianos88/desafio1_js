let entrada = prompt("Ingrese su nombre completo y luego OK para finalizar")

let texto = " "

while (entrada != "OK" && entrada != "ok") {
    texto += entrada + " "
    entrada = prompt("Ingrese su nombre completo y luego OK para finalizar")
}

alert(texto)


for (let i = 6; i<10; i++){
    alert(`El valor de I es ${i}`)
}

let y = 10

do {
    console.log(y)
    y++
} while (y <= 15);