import React from "react";
import Title from "./components/Title";
import Produto from "./components/Produto";

function Produtos() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];
  return (
    <>
      <section>
        <Title text="Produtos" />
        {produtos.map((produto) => (
          <Produto key={produto.nome} {...produto} />
        ))}
      </section>
    </>
  );
}

export default Produtos;
