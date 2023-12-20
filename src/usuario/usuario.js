
  export default function loginUsuario() {
    document.getElementById('myForm2').addEventListener('submit', function (event) {
     event.preventDefault(); // Evita que o formulário seja enviado da maneira tradicional

     // Obter os valores dos campos do formulário
     var nome = document.getElementById('nome').value;
     var email = document.getElementById('email').value;
  
     // Criar um objeto JSON com os dados do formulário
     var jsonData = {
         nome: nome,
         email: email
     };

     // Converter o objeto JSON em uma string JSON
     var jsonString = JSON.stringify(jsonData);

     // Exibir a string JSON no console (você pode enviá-la para um servidor neste ponto)
     console.log(jsonString);
 });
}