import React from "react";
import { TopicoDTO } from "../../dtos/CardDTO";
import { FiUser } from "react-icons/fi";
import {
  Container,
  Cartao,
  Id,
  Nome,
  Descricao,
  IconDiv,
  Content,
  Header,
} from "./style";

interface TopicosProps extends TopicoDTO {
  onClick: (data: any) => void;
}

export function Card({
  id,
  ds_topico,
  ds_mensagem,
  nm_usuario,
  onClick,
}: TopicosProps) {
  return (
    <>
      <Container onClick={onClick}>
        <Cartao>
          <Header>
            <IconDiv>
              <FiUser name="user" size={24} color="black" />
            </IconDiv>
            <Nome>{nm_usuario}</Nome>
          </Header>
          <Content>
            <Id>{ds_topico}</Id>
          </Content>

          <Descricao disabled>{ds_mensagem}</Descricao>
        </Cartao>
      </Container>
    </>
  );
}
