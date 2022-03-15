import React from "react";

import { Container, Cartao, Id, Titulo, Descricao } from "./style";

interface CardProps {
  id: number;
  titulo: string;
  descricao: string;
  onClick: (data: any) => void;
}

export function Card({ id, titulo, descricao, onClick }: CardProps) {
  return (
    <>
      <Container onClick={onClick}>
        <Cartao>
          <Id>{id}</Id>
          <Titulo>{titulo}</Titulo>
          <Descricao disabled>{descricao}</Descricao>
        </Cartao>
      </Container>
    </>
  );
}
