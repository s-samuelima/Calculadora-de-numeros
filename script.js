document.addEventListener("DOMContentLoaded", function () {
    const calcularBtn = document.getElementById("calcular");
    const numeroInicialInput = document.getElementById("n1");
    const numeroFinalInput = document.getElementById("n2");
    const somaTotal = document.getElementById("soma-total");
    const somaPares = document.getElementById("soma-pares");
    const somaImpares = document.getElementById("soma-impares");
    const quantidadePares = document.getElementById("quantidade-pares");
    const quantidadeImpares = document.getElementById("quantidade-impares");

    calcularBtn.addEventListener("click", function tabela() {
        const numInicial = parseInt(numeroInicialInput.value);
        const numFinal = parseInt(numeroFinalInput.value);

        let total = 0;
        let somaParesResult = 0;
        let somaImparesResult = 0;
        let qtdPares = 0;
        let qtdImpares = 0;

        for (let i = numInicial; i <= numFinal; i++) {
            total += i;
            if (i % 2 === 0) {
                somaParesResult += i;
                qtdPares++;
            } else {
                somaImparesResult += i;
                qtdImpares++;
            }
        }

        somaTotal.textContent = `Soma total dos números: ${total}`;
        somaPares.textContent = `Soma dos números pares: ${somaParesResult}`;
        somaImpares.textContent = `Soma dos números ímpares: ${somaImparesResult}`;
        quantidadePares.textContent = `Quantidade de números pares: ${qtdPares}`;
        quantidadeImpares.textContent = `Quantidade de números ímpares: ${qtdImpares}`;
    });
});
