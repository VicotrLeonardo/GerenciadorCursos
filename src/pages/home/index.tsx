import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { CardsProps } from "../../dtos/CardDTO";
import api from "../../services/api";

import {
  Header,
  Text,
  ButtonAdicionar,
  Cabecalho,
  Sessao,
  TextH1,
  Container,
  Div,
} from "./styles";

export function Home() {
  const [cards, setCards] = useState<CardsProps[]>([]);
  const navigate = useNavigate();

  function handleClickAdd() {
    navigate("/adicionar");
  }

  useEffect(() => {
    api
      .get("/cursos")
      .then((response) => setCards(response.data))
      .catch((error) => {
        console.error("ops!! ocorreu um erro " + error);
      });
  }, []);

  return (
    <>
      <Header>
        <Cabecalho>
          <Text>GERENCIADOR DE TAREFAS</Text>
          <ButtonAdicionar onClick={handleClickAdd}>ADICIONAR</ButtonAdicionar>
        </Cabecalho>
      </Header>
      <Container>
        <TextH1>LISTA DE TAREFAS</TextH1>
        <Sessao>
          <Div>
            {cards.map((card) => {
              return (
                <Card
                  id={card.id}
                  titulo={card.titulo}
                  descricao={card.descricao}
                />
              );
            })}
          </Div>
        </Sessao>
      </Container>
    </>
  );
}
