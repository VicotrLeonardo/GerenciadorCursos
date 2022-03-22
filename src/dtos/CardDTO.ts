import { v4 as uuidv4 } from "uuid";

export interface CardsProps {
  id: number;
  titulo: string;
  descricao: string;
}

export interface TopicoDTO {
  id: typeof uuidv4;
  ds_topico: string;
  ds_mensagem: string;
  nm_usuario: string;
}
