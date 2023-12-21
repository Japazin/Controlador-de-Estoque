import cadastroNovoProduto from "./cadastro-produto/cadastro";
import loginUsuario from "./usuario/usuario";
import barraLateral from "./barraLateral/bar";
import compra from "./compras/compra";

barraLateral();

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

  if (href === './cadastro-produto/indexCastroProduto.html') {
    fetch(href)
      .then(response => response.text())
      .then(html => carregaResultado(html))//carrega herf do html e implementa no <a>
      .then(produto => cadastroNovoProduto(produto)) //envia o formulário do cadastro
      .catch(e => console.log(e));
  }
  if (href === "./usuario/indexusuario.html") {
    fetch(href)
      .then(response => response.text())
      .then(html => carregaResultado(html))
      .then(usuario => loginUsuario(usuario))//carrega o usuario
      .catch(e => console.log(e));
  };
  if (href === "./compras/indexCrompras.html") {
    fetch(href)
      .then(response => response.text())
      .then(html => carregaResultado(html))
      .then(pedido => compra(pedido))//carrega o usuario
      .catch(e => console.log(e));
  };
}

function carregaResultado(response) {
  const result = document.querySelector(".respostabar");
  result.innerHTML = response;
} 
