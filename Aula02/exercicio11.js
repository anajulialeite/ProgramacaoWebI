function gerarFibonacci(n) {
    let fibonacci = [];
    let a = 0, b = 1;
    fibonacci.push(a);
    fibonacci.push(b);
    for (let i = 2; i < n; i++) {
        let c = a + b;
        fibonacci.push(c);
        a = b;
        b = c;
    }
    console.log(`Os ${n} primeiros números da sequência de Fibonacci são:`);
    console.log(fibonacci.join(', '));
}
gerarFibonacci(50);