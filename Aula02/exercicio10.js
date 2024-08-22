function ehPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(numero); i += 2) {
        if (numero % i === 0) return false;
    }
    return true;
}
function encontrarPrimos() {
    console.log("Números primos entre 0 e 100:");
    for (let i = 0; i <= 100; i++) {
        if (ehPrimo(i)) {
            console.log(i);
        }
    }
}
encontrarPrimos();