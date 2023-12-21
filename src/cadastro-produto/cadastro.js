const fs = require('fs').promises;
const path = require('path');
const caminho = path.resolve(__dirname, './', 'jsonProdutos.json');//caminho para criar o Json para teste, simulando o recebimento do BackEnd



export default function cadastroNovoProduto() {
    document.getElementById('myForm').addEventListener('submit', function (event) {
     event.preventDefault(); // Evita que o formulário seja enviado da maneira tradicional

     // Obter os valores dos campos do formulário
     var nome = document.getElementById('nome').value;
     var valor = document.getElementById('valor').value;
  
     // Criar um objeto JSON com os dados do formulário
     var jsonData = {
         nome: nome,
         valor: valor
     };

     // Converter o objeto JSON em uma string JSON
     var jsonProduct = JSON.stringify(jsonData);
     fs.writeFile(caminho, jsonProduct, { flag: 'w' });
     // Exibir a string JSON no console (você pode enviá-la para um servidor neste ponto)
     console.log(jsonProduct);
 });

}