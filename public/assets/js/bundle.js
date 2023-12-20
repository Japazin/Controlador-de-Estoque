/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/barraLateral/bar.js":
/*!*********************************!*\
  !*** ./src/barraLateral/bar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ barraLateral)
/* harmony export */ });
//Seleciona os itens clicado

function barraLateral() {
  var menuItem = document.querySelectorAll('.item-menu');
  function selectLink() {
    menuItem.forEach(function (item) {
      return item.classList.remove('ativo');
    });
    this.classList.add('ativo');
  }
  menuItem.forEach(function (item) {
    return item.addEventListener('click', selectLink);
  });

  //Expandir o menu

  var btnExp = document.querySelector('#btn-exp');
  var menuSide = document.querySelector('.menu-lateral');
  btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir');
  });
}
barraLateral();

/***/ }),

/***/ "./src/cadastro-produto/cadastro.js":
/*!******************************************!*\
  !*** ./src/cadastro-produto/cadastro.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cadastroNovoProduto)
/* harmony export */ });
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

/***/ }),

/***/ "./src/compras/compra.js":
/*!*******************************!*\
  !*** ./src/compras/compra.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compra)
/* harmony export */ });
function compra() {
  fetch('./testeCadastro.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    // Obtém o contêiner onde os produtos serão exibidos
    var produtosContainer = document.getElementById('produtos-container');

    // Itera sobre cada produto no JSON
    data.forEach(function (produto) {
      // Cria elementos HTML para cada produto
      var produtoDiv = document.createElement('div');
      produtoDiv.className = 'produto';
      var nomeProduto = document.createElement('h2');
      nomeProduto.textContent = "Produto ".concat(produto.id, ": ").concat(produto.nome);
      var precoProduto = document.createElement('p');
      precoProduto.textContent = "Pre\xE7o: ".concat(produto.valor);

      // Adiciona os elementos ao contêiner
      produtoDiv.appendChild(nomeProduto);
      produtoDiv.appendChild(precoProduto);
      produtosContainer.appendChild(produtoDiv);
    });
  })["catch"](function (error) {
    return console.error('Erro ao carregar o arquivo JSON:', error);
  });
}

/***/ }),

/***/ "./src/usuario/usuario.js":
/*!********************************!*\
  !*** ./src/usuario/usuario.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginUsuario)
/* harmony export */ });
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cadastro_produto_cadastro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-produto/cadastro */ "./src/cadastro-produto/cadastro.js");
/* harmony import */ var _usuario_usuario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usuario/usuario */ "./src/usuario/usuario.js");
/* harmony import */ var _barraLateral_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./barraLateral/bar */ "./src/barraLateral/bar.js");
/* harmony import */ var _compras_compra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compras/compra */ "./src/compras/compra.js");




(0,_barraLateral_bar__WEBPACK_IMPORTED_MODULE_2__["default"])();
document.addEventListener("click", function (e) {
  var el = e.target;
  var tag = el.tagName.toLowerCase();
  if (tag === "a" || tag === "i" || tag === "span") {
    e.preventDefault();
    carregaPagina(el);
  }
});
function carregaPagina(el) {
  var href = el.getAttribute("href");
  if (href === './cadastro-produto/indexCastroProduto.html') {
    fetch(href).then(function (response) {
      return response.text();
    }).then(function (html) {
      return carregaResultado(html);
    }) //carrega herf do html e implementa no <a>
    .then(function (produto) {
      return (0,_cadastro_produto_cadastro__WEBPACK_IMPORTED_MODULE_0__["default"])(produto);
    }) //envia o formulário do cadastro
    ["catch"](function (e) {
      return console.log(e);
    });
  }
  if (href === "./usuario/indexusuario.html") {
    fetch(href).then(function (response) {
      return response.text();
    }).then(function (html) {
      return carregaResultado(html);
    }).then(function (usuario) {
      return (0,_usuario_usuario__WEBPACK_IMPORTED_MODULE_1__["default"])(usuario);
    }) //carrega o usuario
    ["catch"](function (e) {
      return console.log(e);
    });
  }
  ;
  if (href === "./compras/indexCrompras.html") {
    fetch(href).then(function (response) {
      return response.text();
    }).then(function (html) {
      return carregaResultado(html);
    }).then(function (pedido) {
      return (0,_compras_compra__WEBPACK_IMPORTED_MODULE_3__["default"])(pedido);
    }) //carrega o usuario
    ["catch"](function (e) {
      return console.log(e);
    });
  }
  ;
}
function carregaResultado(response) {
  var result = document.querySelector(".respostabar");
  result.innerHTML = response;
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map