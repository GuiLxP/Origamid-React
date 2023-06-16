import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal)
    return (
      <>
        Este é um modal <button onClick={() => setModal(false)}>Fechar</button>
      </>
    );
  return null;
};

export default Modal;
