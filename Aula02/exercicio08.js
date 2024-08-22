function processarSalario(nome, salarioInicial) {
    let salarioAumentado = salarioInicial * 1.15;
    let salarioFinal = salarioAumentado * 0.92;
    let funcionario = {
        nome: nome,
        salarioInicial: salarioInicial,
        salarioFinal: salarioFinal
    };
    return funcionario;
}
function lerDadosFuncionarios() {
    for (let i = 1; i <= 3; i++) {
        let nome = prompt(`Digite o nome do funcionário ${i}:`);
        let salarioInicial = parseFloat(prompt(`Digite o salário inicial do funcionário ${i}:`));
        let funcionario = processarSalario(nome, salarioInicial);
        listaFuncionarios.push(funcionario);
    }
}
function exibirDadosFuncionarios() {
    console.log("Dados dos Funcionários:");
    listaFuncionarios.forEach(funcionario => {
        Console.log(`Nome: ${funcionario.nome}`);
        console.log(`Salário Inicial: R$${funcionario.salarioInicial.toFixed(2)}`);
        console.log(`Salário Final: R$${funcionario.salarioFinal.toFixed(2)}`);
        console.log('------------------------');
    })
}
lerDadosFuncionarios();
exibirDadosFuncionarios();