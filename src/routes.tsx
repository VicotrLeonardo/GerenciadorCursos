import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Adicionar } from "./pages/Cadastro";
import { Alterar } from "./pages/Alterar";
import { TopicoPage } from "./pages/TopicoPage";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Adicionar />} path="/adicionar" />
        <Route element={<Alterar />} path="/alterar/:id" />
        <Route element={<TopicoPage />} path="/topicopage/:id" />
      </Routes>
    </BrowserRouter>
  );
}
