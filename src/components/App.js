import "../assets/css/reset.css";
import "../assets/css/style.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Habitos from "./Habitos";
import Cadastro from "./Cadastro";
import UserContext from "../contexts/UserContext";

function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [token, setToken] = useState("");
	const [objLogin, setObjLogin] = useState([]);
	const [habList, setHabList] = useState([]);
	const [hab, setHab] = useState(false);

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
					habList,
					setHabList,
					hab,
					setHab,
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<Cadastro />} />
						<Route path="/habitos" element={<Habitos />} />
					</Routes>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}

export default App;
