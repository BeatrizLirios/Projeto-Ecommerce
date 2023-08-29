const catalogo = [
  {
    id: 1,
    nome: "Vestido Rosa",
    marca: "Zara",
    preco: 109,
    imagem: "product-1.jpg",
    feminino: true,
  },
  {
    id: 2,
    nome: "Short Jeans",
    marca: "Zara",
    preco: 90,
    imagem: "product-2.jpg",
    feminino: true,
  },
];

for (produtoCatalogo of catalogo) {
    const cartaoProduto = `<div id="card-produto-1">
<img
  src="./assets/img/${produtoCatalogo.imagem}"
  alt="Produto 1 da Joia Rara Modas"
  style="height: 300px"
/>
<p>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>R$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}
