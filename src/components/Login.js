import { Link } from "react-router-dom";
import { postLog } from "./services/trackit";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import track from "../assets/images/Track.png";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";

export default function Login() {
	const { email, setEmail, password, setPassword, objLogin, setObjLogin } =
		useContext(UserContext);

	const navigate = useNavigate();

	function postLogin(event) {
		event.preventDefault();
		const dados = {
			email: email,
			password: password,
		};

		postLog(dados).then((response) => {
			setObjLogin(response.data);
			navigate("/habitos");
		});
	}

	return (
		<Container>
			<img src={track} alt="oi" />
			<input
				type="text"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>

			<input
				type="text"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Senha"
			/>

			<Botao onClick={postLogin}>Entrar</Botao>

			<Link to="/cadastro">
				<Cadastre>Não tem uma conta? Cadastre-se!</Cadastre>
			</Link>
		</Container>
	);
}

const Container = styled.div`
	background-color: white;
	width: 375px;
	height: 667px;
	border: 1px solid grey; /*TEMPORARIO*/
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	input::placeholder {
		color: #bababa;
	}

	input {
		padding-left: 20px;
		margin: 4px 0;
		width: 303px;
		height: 45px;
		border: solid 1px #d5d5d5;
		border-radius: 5px;
		outline-width: 0;
		font-size: 20px;
		font-weight: 400;
		font-style: normal;
		color: #dbdbdb;
	}
	img {
		margin-bottom: 33px;
	}
`;

const Botao = styled.div`
	margin: 4px 0;
	font-size: 21px;
	font-weight: 400;
	color: white;
	width: 303px;
	height: 45px;
	border-radius: 5px;
	background-color: #52b6ff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Cadastre = styled.div`
	margin-top: 25px;
	font-size: 14px;
	font-weight: 400;
	line-height: 17px;
	color: #52b6ff;
	text-decoration-line: underline;
`;
