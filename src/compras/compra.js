export default function compra(){
  

        fetch('testeCadastro.json')
            .then(response => response.json())
            .then(data => {
                // Obtém o contêiner onde os produtos serão exibidos
                const produtosContainer = document.getElementById('produtos-container');
    
                // Itera sobre cada produto no JSON
                data.forEach(produto => {
                    // Cria elementos HTML para cada produto
                    const produtoDiv = document.createElement('div');
                    produtoDiv.className = 'produto';
    
                    const nomeProduto = document.createElement('h2');
                    nomeProduto.textContent = `Produto ${produto.id}: ${produto.nome}`;
    
                    const precoProduto = document.createElement('p');
                    precoProduto.textContent = `Preço: ${produto.valor}`;
    
                    // Adiciona os elementos ao contêiner
                    produtoDiv.appendChild(nomeProduto);
                    produtoDiv.appendChild(precoProduto);
                    produtosContainer.appendChild(produtoDiv);
                });
            })
            .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));
    
    
}