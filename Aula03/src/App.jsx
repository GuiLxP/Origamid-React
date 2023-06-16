import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form/Form";

const Titulo = ({ cor, texto, children }) => {
  return (
    <h1 style={{ color: cor }}>
      {texto} {children}
    </h1>
  );
};

function App() {
  return (
    <>
      {/* <Header /> */}
      <Form />

      {/* <Footer /> */}
    </>
  );
}

export default App;
