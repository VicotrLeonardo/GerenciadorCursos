import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./pages/home";
import { Adicionar } from "./pages/Cadastro";
import { Alterar } from "./pages/Alterar";

export function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Adicionar />} path="/adicionar" />
        <Route element={<Alterar />} path="/alterar/:id" />
      </Routes>
    </BrowserRouter>
  );
}
