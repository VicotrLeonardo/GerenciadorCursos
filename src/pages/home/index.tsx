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
  Link,
} from "./styles";

export function Home() {
  const [cards, setCards] = useState<CardsProps[]>([]);
  const navigate = useNavigate();

  function handleClickAdd() {
    navigate("/adicionar");
  }

  api
    .get("/cursos")
    .then((response) => setCards(response.data))
    .catch((error) => {
      console.error("ops!! ocorreu um erro " + error);
    });

  useEffect(() => {
    async function teste() {
      await api
        .get("/cursos")
        .then((response) => setCards(response.data))
        .catch((error) => {
          console.error("ops!! ocorreu um erro " + error);
        });
    }

    try {
      teste();
    } catch (error) {
      console.log(`Codigo do Erro: ${error}`);
    }
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
                <Link
                  style={{ textDecoration: "none" }}
                  key={card.id}
                  to={`/alterar/${card.id}`}
                >
                  <Card
                    id={card.id}
                    titulo={card.titulo}
                    descricao={card.descricao}
                    onClick={() => navigate("/alterar", { state: card.id })}
                  />
                </Link>
              );
            })}
          </Div>
        </Sessao>
      </Container>
    </>
  );
}
