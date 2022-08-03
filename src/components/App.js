import React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Habitos from "./Habitos";
import Botao from "../components/Botao/Botao";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";

//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/cadastro" element={<Cadastro />} />
					<Route path="/habitos" element={<Habitos />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
