// Adiciona um escutador de eventos ao formulário de conversão
document.getElementById('Form-convert').addEventListener('submit', function(event){
    // Previne o recarregamento da página ao enviar o formulário
    event.preventDefault();

    // Obter o valor inserido pelo usuário e convertê-lo para número decimal
    const valor = parseFloat(document.getElementById("value-amount").value);
    // Obter o tipo de moeda de origem selecionado
    const ofCoins = document.getElementById("ofCoins").value;
    // Obter o tipo de moeda de destino selecionado
    const forCoins = document.getElementById("forCoins").value;

    // Definir taxas de câmbio fixas (valores baseados na data 24/10/2024)
    const exchangesRates = {
        USD: {BRL: 5.70, EUR: 0.93, GBP: 0.77}, // Dólar para outras moedas
        BRL: {USD: 0.18, EUR: 0.16, GBP: 0.14}, // Real para outras moedas
        EUR: {USD: 0.83, BRL: 6.16, GBP: 0.83}, // Euro para outras moedas
        GBP: {USD: 1.30, BRL: 7.39, EUR: 1.20}  // Libra para outras moedas
    };

    // Lógica de conversão de moeda
    let valorConvertido;
    if (ofCoins === forCoins) {
        // Se as moedas de origem e destino forem iguais, o valor convertido é o mesmo
        valorConvertido = valor;
    } else {
        // Caso contrário, multiplica o valor pela taxa de câmbio apropriada
        valorConvertido = valor * exchangesRates[ofCoins][forCoins];
    }

    // Exibe o resultado da conversão no elemento com o id "conversao"
    const conversao = document.getElementById("conversao");
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${forCoins}`;
});
