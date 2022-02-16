import React from "react";

import { Cards } from "../Cards";
import { Header, Text, ButtonAdicionar, Cabecalho } from "./style";

export function Home() {
  return (
    <>
      <Header>
        <Cabecalho>
          <Text>GERENCIADOR DE TAREFAS</Text>
          <ButtonAdicionar>ADICIONAR</ButtonAdicionar>
        </Cabecalho>
      </Header>
      <Cards />
    </>
  );
}
