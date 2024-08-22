function calcularTotalLitros(latas350ml, garrafas600ml, garrafas2L) {
    let litrosLatas350ml = latas350ml * 0.350;
    let litrosGarrafas600ml = garrafas600ml * 0.600;
    let litrosGarrafas2L = garrafas2L * 2.000;
    let totalLitros = litrosLatas350ml + litrosGarrafas600ml + litrosGarrafas2L;
    return totalLitros;
}
let latas350ml = 10;
let garrafas600ml = 5;
let garrafas2L = 2;
let total = calcularTotalLitros(latas350ml, garrafas600ml, garrafas2L);
console.log(`O total de litros a ser produzido é: ${total} L`);