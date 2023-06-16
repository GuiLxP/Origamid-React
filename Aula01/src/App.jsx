// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const Guilherme = {
  cliente: "Guilherme",
  idade: 21,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
    { nome: "Baixo", preco: "R$ 3500" },
  ],
};

export default function App() {
  const dados = luana;
  return (
    <>
      <div>
        {`Nome: ${dados.cliente}`}
        <br />
        {`Idade: ${dados.idade}`}
        <br />
        {`Situação: `}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
        <br />
        {`Total gasto: R$ ${dados.compras
          .map((item) => +item.preco.replace("R$ ", ""))
          .reduce((anterior, atual) => anterior + atual)}`}
        <br />
        {`Compras: ${dados.compras.map((item) => item.nome).join(", ")}`}
        <br />
        {dados.compras
          .map((item) => +item.preco.replace("R$ ", ""))
          .reduce((anterior, atual) => anterior + atual) > 10000 && (
          <span style={{ color: "red" }}>Você está gastando muito</span>
        )}
      </div>
    </>
  );
}
