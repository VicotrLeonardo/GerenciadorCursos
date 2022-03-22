import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { CardsProps, TopicoDTO } from "../../dtos/CardDTO";
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
  const [topicos, setTopicos] = useState<TopicoDTO[]>([]);
  const navigate = useNavigate();

  function handleClickAdd() {
    navigate("/adicionar");
  }

  useEffect(() => {
    async function getTopicos() {
      await api
        .get("/topicos")
        .then((response) => setTopicos(response.data))
        .catch((error) => {
          alert(`Ocorreu um erro ao buscar os Topicos ${error.message}`);
        });
    }

    try {
      getTopicos();
    } catch (error) {
      console.log(`Codigo do Erro: ${error}`);
    }
  }, []);

  return (
    <>
      <Header>
        <Cabecalho>
          <Text>TÓPICOS</Text>
          <ButtonAdicionar onClick={handleClickAdd}>ADICIONAR</ButtonAdicionar>
        </Cabecalho>
      </Header>
      <Container>
        <TextH1>ULTIMAS POSTAGENS</TextH1>
        <Sessao>
          <Div>
            {topicos.map((topico) => {
              return (
                <Link
                  style={{ textDecoration: "none" }}
                  key={String(topico.id)}
                  to={`/alterar/${topico.id}`}
                >
                  <Card
                    id={topico.id}
                    ds_topico={topico.ds_topico}
                    ds_mensagem={topico.ds_mensagem}
                    nm_usuario={topico.nm_usuario}
                    onClick={() => navigate("/alterar", { state: topico.id })}
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
