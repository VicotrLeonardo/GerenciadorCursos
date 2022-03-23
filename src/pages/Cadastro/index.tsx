import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { ImHome } from "react-icons/im";

import { v4 as uuidv4 } from "uuid";

import { useForm } from "react-hook-form";

import {
  Header,
  Text,
  ButtonAdicionar,
  Cabecalho,
  Container,
  Sessao,
  Formulario,
  Div,
  TextH3,
  Input,
  InputDescricao,
  ButtonBack,
  Error,
} from "./style";

interface Form {
  ds_topico: any;
  ds_mensagem: any;
}

import { TopicoDTO } from "../../dtos/CardDTO";

export function Adicionar() {
  const navigate = useNavigate();
  const id = uuidv4();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function apiPost({ ds_topico, ds_mensagem }: any) {
    const novoTopico: TopicoDTO = {
      id: uuidv4(),
      ds_topico: ds_topico,
      ds_mensagem: ds_mensagem,
      nm_usuario: "Victor Leonardo",
    };

    await api
      .post("/topicos", novoTopico)
      .then(() => navigate("/"))
      .catch((error) => {
        alert("Ocorreu um erro ao Adicionar o Topico: " + error.message);
        navigate("/");
      });
  }

  function handleClickHome() {
    navigate("/");
  }

  return (
    <>
      <Header>
        <Cabecalho>
          <Text>Novo Tópico</Text>
        </Cabecalho>
        <ButtonBack onClick={handleClickHome}>
          <ImHome size={20} />
        </ButtonBack>
      </Header>
      <Container>
        <Sessao>
          <Formulario onSubmit={handleSubmit(apiPost)}>
            <Div>
              <TextH3>ID</TextH3>
              <Input disabled type="string" className="id" value={id}></Input>
            </Div>

            <Div>
              <TextH3>Titulo do Tópico</TextH3>
              <Input
                className="titulo"
                {...register("ds_topico", { required: true })}
              ></Input>
              {errors.ds_topico && <Error>O Titulo é obrigatório</Error>}
            </Div>

            <Div>
              <TextH3>Mensagem</TextH3>
              <InputDescricao
                className="descricao"
                {...register("ds_mensagem", { required: true })}
              ></InputDescricao>
              {errors.ds_mensagem && <Error>A mensagem é obrigatória</Error>}
            </Div>

            <ButtonAdicionar>POSTAR</ButtonAdicionar>
          </Formulario>
        </Sessao>
      </Container>
    </>
  );
}
