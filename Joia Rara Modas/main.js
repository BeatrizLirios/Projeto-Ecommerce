import { inicializarCarrinho } from "./src/menuCarrinho";

const catalogo = [
  {
    id: 1,
    nome: "Vestido Rosa",
    marca: "C&A",
    preco: 109,
    imagem: "product-1.jpg",
    feminino: true,
  },
  {
    id: 2,
    nome: "Short Jeans",
    marca: "C&A",
    preco: 90,
    imagem: "product-2.jpg",
    feminino: true,
  },
  {
    id: 3,
    nome: "Short Jeans Bordado",
    marca: "C&A",
    preco: 110,
    imagem: "product-3.jpg",
    feminino: true,
  },
  {
    id: 4,
    nome: "Blusa Azul",
    marca: "C&A",
    preco: 69,
    imagem: "product-4.jpg",
    feminino: true,
  },
  {
    id: 5,
    nome: "Camiseta Vermelha",
    marca: "C&A",
    preco: 90,
    imagem: "product-5.jpg",
    feminino: false,
  },
  {
    id: 6,
    nome: "Camiseta Verde Claro",
    marca: "C&A",
    preco: 85,
    imagem: "product-6.jpg",
    feminino: false,
  },
  {
    id: 7,
    nome: "Camiseta Preta Com Detalhes Branco",
    marca: "C&A",
    preco: 95,
    imagem: "product-7.jpg",
    feminino: false,
  },
  {
    id: 8,
    nome: "Camiseta Amarelo Mostarda",
    marca: "C&A",
    preco: 93,
    imagem: "product-8.jpg",
    feminino: false,
  },

];

for (produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class='border-solid border-2 border-sky-500 w-48 m-2' id="card-produto-${produtoCatalogo.id}">
<img
  src="./assets/img/${produtoCatalogo.imagem}"
  alt="Produto 1 da Joia Rara Modas"
  style="height: 300px"
/>
<p class='marca'>${produtoCatalogo.marca}</p>
<p>${produtoCatalogo.nome}</p>
<p>R$${produtoCatalogo.preco}</p>
<button>Adicionar</button>
</div>`;

document.getElementById("container-produto").innerHTML += cartaoProduto;
}

inicializarCarrinho();
