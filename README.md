# Conversor de Moedas

Este projeto é uma aplicação web de conversão de moedas, que permite ao usuário inserir um valor e converter entre diferentes moedas com taxas de câmbio fixas. A interface é simples e interativa, desenvolvida com HTML, CSS e JavaScript.

## Funcionalidades

- Conversão de valores entre quatro moedas: Real Brasileiro (BRL), Dólar Americano (USD), Euro (EUR) e Libra Esterlina (GBP).
- Taxas de câmbio fixas baseadas nos valores de 24 de outubro de 2024.
- Exibição do valor convertido de forma prática e intuitiva.
- Botão de limpeza para redefinir os campos.

## Estrutura do Projeto

A estrutura do projeto inclui os seguintes arquivos e diretórios:

- **index.html**: Contém a estrutura HTML da aplicação.
- **converter.css**: Estilização principal para layout e formatação.
- **conversor.js**: Script de JavaScript para manipulação de eventos e cálculo da conversão.
- **variables.css** e **fonts/**: Arquivos adicionais para variáveis de estilo e fontes personalizadas.

## Como Usar o Projeto

1. Abra o arquivo [conversor.html](http://127.0.0.1:5500/conversor.html) em um navegador web.
2. Insira o valor, selecione a moeda de origem e a moeda de destino.
3. Clique em **Converter** para obter o valor convertido.
4. Utilize o botão **Limpar** para redefinir todos os campos.

## Estrutura HTML

O `index.html` organiza a interface em seções intuitivas para o usuário:

- **Título**: Exibe o título do projeto "Conversor de Moedas".
- **Entrada de Valor**: Campo para inserir o valor que será convertido.
- **Seleção de Moedas**: Duas listas suspensas para selecionar a moeda de origem e a moeda de destino.
- **Botões de Ação**: Dois botões, um para realizar a conversão e outro para limpar os campos.

### Código HTML

```html
<form action="" id="Form-convert">
    <div class="box-title">
        <div class="title">
            <h1>Conversor de Moedas</h1>
        </div>
    </div>

    <div class="amount-box">
        <div class="content">
            <label for="">Insira um Valor:</label>
            <input type="text" placeholder="Insira o Valor" id="value-amount">
        </div>
    </div>

    <div class="input-box">
        <div class="span">
            <h4>Selecione as moedas para conversão</h4>
        </div>
        <div class="conteiner-elements">
            <div class="element-box">
                <label for="ofCoins">De:</label>
                <select id="ofCoins" required>
                    <option value="BRL">Real(BRL)</option>
                    <option value="USD">Dólar(USD)</option>
                    <option value="EUR">Euro(EUR)</option>
                    <option value="GBP">Libra(GBP)</option>
                </select>
            </div>
            <div class="element-box">
                <label for="forCoins">Para:</label>
                <select id="forCoins" required>
                    <option value="BRL">Real(BRL)</option>
                    <option value="USD">Dólar(USD)</option>
                    <option value="EUR">Euro(EUR)</option>
                    <option value="GBP">Libra(GBP)</option>
                </select>
            </div>
        </div>
    </div>

    <div class="btn-box">
        <div class="btn-element">
            <button type="submit" class="btnConverter"><span>Converter</span></button>
        </div>
        <div class="btn-element">
            <button type="reset" class="btnReset"><span>Limpar</span></button>
        </div>
    </div>

    <div id="conversao"></div>
</form>
```

## Lógica de Conversão em JavaScript

O arquivo `conversor.js` adiciona a funcionalidade principal de conversão. A taxa de câmbio é definida em um objeto e calculada ao pressionar o botão de conversão.

### Código JavaScript

```javascript
document.getElementById('Form-convert').addEventListener('submit', function(event){
    event.preventDefault();

    const valor = parseFloat(document.getElementById("value-amount").value);
    const ofCoins = document.getElementById("ofCoins").value;
    const forCoins = document.getElementById("forCoins").value;

    const exchangesRates = {
        USD: {BRL: 5.70, EUR: 0.93, GBP: 0.77},
        BRL: {USD: 0.18, EUR: 0.16, GBP: 0.14},
        EUR: {USD: 0.83, BRL: 6.16, GBP: 0.83},
        GBP: {USD: 1.30, BRL: 7.39, EUR: 1.20}
    };

    let valorConvertido;
    if (ofCoins === forCoins) {
        valorConvertido = valor;
    } else {
        valorConvertido = valor * exchangesRates[ofCoins][forCoins];
    }

    const conversao = document.getElementById("conversao");
    conversao.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${forCoins}`;
});
```

## Estilização com CSS

O CSS estiliza a interface e os elementos para que o visual seja agradável e intuitivo. Principais estilos aplicados:

- Layout centralizado para o formulário e botões.
- Cores definidas usando variáveis CSS para facilitar ajustes.
- Fontes personalizadas aplicadas para um design mais consistente.

### Exemplo de Estilos no CSS

```css
@import url(./variables.css);

body {
    height: 100vh;
    background-color: var(--corBack);
    font-family: var(--title);
    color: var(--corButton);
}

main {
    display: flex;
    align-items: center;
    place-content: center;
    height: 100%;
}

form {
    background-color: var(--corFundo);
    border-radius: 40px;
    padding: 20px;
    width: 30%;
}
```

## Contatos

Este projeto foi desenvolvido em colaboração com dois colegas de turma, com o auxilio do professor []() combinando esforços para a construção de uma aplicação de conversão de moedas.
* []()
* []()
