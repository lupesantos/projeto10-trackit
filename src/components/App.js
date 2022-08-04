import React from "react";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Habitos from "./Habitos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import { useState } from "react";
import UserContext from "../contexts/UserContext";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [token, setToken] = useState("");
	const [objLogin, setObjLogin] = useState([]);

	return (
		<>
			<UserContext.Provider
				value={{
					email,
					setEmail,
					password,
					setPassword,
					name,
					setName,
					image,
					setImage,
					token,
					setToken,
					objLogin,
					setObjLogin,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<Cadastro />} />
						<Route path="/habitos" element={<Habitos objLogin={objLogin} />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
