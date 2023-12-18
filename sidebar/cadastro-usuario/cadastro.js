
 function novoProduto() {

    document.getElementById('myForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Evita que o formulário seja enviado da maneira tradicional
      alert("formulario enviado");
      // Obter os valores dos campos do formulário
      var nome = document.getElementById('nome').value;
      var valor = document.getElementById('valor').value;
      var parcelas = document.getElementById('parcelas').value;
  
      // Criar um objeto JSON com os dados do formulário
      var jsonData = {
        nome: nome,
        valor: valor,
        parcelas: parcelas
      };
  
      // Converter o objeto JSON em uma string JSON
      var jsonString = JSON.stringify(jsonData);
  
      // Exibir a string JSON no console (você pode enviá-la para um servidor neste ponto)
      console.log(jsonString);
    });
}
