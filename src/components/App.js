import React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Habitos from "./Habitos";
import Botao from "../components/Botao/Botao";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import { useState } from "react";

//import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [token, setToken] = useState("");

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Login
								email={email}
								setEmail={setEmail}
								password={password}
								setPassword={setPassword}
								toke={token}
								setToken={setToken}
							/>
						}
					/>
					<Route
						path="/cadastro"
						element={
							<Cadastro
								email={email}
								setEmail={setEmail}
								password={password}
								setPassword={setPassword}
								name={name}
								setName={setName}
								image={image}
								setImage={setImage}
								toke={token}
								setToken={setToken}
							/>
						}
					/>
					<Route path="/habitos" element={<Habitos />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
