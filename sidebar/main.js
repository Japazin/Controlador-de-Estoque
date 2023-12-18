
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

  const cadastroNovoProduto = require("./cadastro-usuario/cadastroProduto")
  function carregaPagina(el) {
    
    const href = el.getAttribute("href");
    if(href==="./cadastro-usuario/indexCadastroUsuario.html"){
      fetch(href)
      .then(response => response.text())
      .then( html => carregaResultado(html))
      .then(produto => cadastroNovoProduto.cadastroNovoProduto(produto))
      .catch(e => console.log(e));
    } else{
      fetch(href)
      .then(response => response.text())
      .then( html => carregaResultado(html))
      .catch(e => console.log(e));
    }
    
  }
  function carregaResultado(response) {
    const result = document.querySelector(".respostabar");
    result.innerHTML = response;
  } 