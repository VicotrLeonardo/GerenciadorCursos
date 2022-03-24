import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/Card";
import { TopicoDTO } from "../../dtos/CardDTO";
import api from "../../services/api";
import { MdOutlineQueue } from "react-icons/md";

import {
  Header,
  Text,
  ButtonAdicionar,
  Cabecalho,
  Sessao,
  TextH1,
  Content,
  Link,
  Container,
} from "./styles";

export function Home() {
  const [topicos, setTopicos] = useState<TopicoDTO[]>([]);

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
      alert("Ocorreu um erro ao buscar os Topicos");
    }
  }, []);

  const navigate = useNavigate();

  function handleClickAdd() {
    navigate("/adicionar");
  }

  return (
    <Container>
      <Header>
        <Cabecalho>
          <Text>TÓPICOS</Text>
          <ButtonAdicionar onClick={handleClickAdd}>
            <MdOutlineQueue size={40} color={"#fff"} />
          </ButtonAdicionar>
        </Cabecalho>
      </Header>
      <Content>
        <TextH1>ULTIMAS POSTAGENS</TextH1>
        <Sessao>
          {topicos.map((topico) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "black" }}
                key={String(topico.id)}
                to={`/topicopage/${topico.id}`}
              >
                <Card
                  id={topico.id}
                  ds_topico={topico.ds_topico}
                  ds_mensagem={topico.ds_mensagem}
                  nm_usuario={topico.nm_usuario}
                  onClick={() => navigate("/topicopage", { state: topico.id })}
                />
              </Link>
            );
          })}
        </Sessao>
      </Content>
    </Container>
  );
}
