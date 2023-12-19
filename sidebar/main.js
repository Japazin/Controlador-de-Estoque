
//Seleciona os itens clicado
var menuItem = document.querySelectorAll('.item-menu')

function selectLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

//Expandir o menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

document.addEventListener("click", (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === "a" || tag === "i" || tag === "span") {
      e.preventDefault();
      carregaPagina(el);
    }
  });

  function carregaPagina(el) {
    
    const href = el.getAttribute("href");
    
    if(href==='./cadastro-produto/indexCastroProduto.html'){
      fetch(href)
      .then(response => response.text())
      .then( html => carregaResultado(html))//carrega herf do html e implementa no <a>
      .then(produto => cadastroNovoProduto(produto)) //envia o formulário do cadastro
      .catch(e => console.log(e));
    } 
    if (href==="./usuario/indexusuario.html"){
      fetch(href)
      .then(response => response.text())
      .then( html => carregaResultado(html))
      .then(usuario => loginUsuario(usuario))
      .catch(e => console.log(e));
    };  
  }
  function cadastroNovoProduto() {
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
     var jsonString = JSON.stringify(jsonData);

     // Exibir a string JSON no console (você pode enviá-la para um servidor neste ponto)
     console.log(jsonString);
 });

}

  function carregaResultado(response) {
    const result = document.querySelector(".respostabar");
    result.innerHTML = response;
  } 

  function loginUsuario() {
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