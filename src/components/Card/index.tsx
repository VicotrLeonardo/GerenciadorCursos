import React from "react";
import { useNavigate } from "react-router-dom";

import { Container, Cartao, Id, Titulo, Descricao } from "./style";

interface CardProps {
  id: number;
  titulo: string;
  descricao: string;
}

interface dataProps {
  data: CardProps;
}

export function Card({ id, titulo, descricao }: CardProps) {
  const navigate = useNavigate();

  const data = { id, titulo, descricao };

  function handleClickAlterar() {
    navigate("/alterar");
  }
  return (
    <>
      <Container onClick={handleClickAlterar}>
        <Cartao>
          <Id>{id}</Id>
          <Titulo>{titulo}</Titulo>
          <Descricao disabled>{descricao}</Descricao>
        </Cartao>
      </Container>
    </>
  );
}
