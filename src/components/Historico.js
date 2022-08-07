import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";

export default function Historico() {
	const { objLogin } = useContext(UserContext);
	return (
		<>
			<Container>
				<Link to="/">
					<Header>
						TrackIt
						<img src={objLogin.image} alt="oi" />
					</Header>
				</Link>
				<Text>
					<Hist>Histórico</Hist>
					<NenhumHabito>
						Em breve você poderá ver o histórico dos seus hábitos aqui!
					</NenhumHabito>
				</Text>

				<Footer>
					<Link to="/habitos">
						<h1>Hábitos</h1>
					</Link>

					<Link to="/hoje">
						<Circulo>Hoje</Circulo>
					</Link>

					<h1>Histórico</h1>
				</Footer>
			</Container>
		</>
	);
}

const Text = styled.div`
	width: 375px;
	height: 100%;
	padding-left: 20px;
`;

const Hist = styled.div`
	font-size: 23px;
	font-weight: 400;
	color: #126ba5;
	margin: 20px 0;
`;

const Container = styled.div`
	background-color: #f2f2f2;
	width: 375px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	margin-bottom: 70px;
	padding-bottom: 20px;

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
`;

const Header = styled.div`
	font-family: "Playball", cursive;
	font-size: 39px;
	font-weight: 400;
	color: white;
	width: 375px;
	height: 70px;
	background-color: #126ba5;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 2;

	img {
		width: 51px;
		height: 51px;
		border-radius: 50px;
	}
`;

const Footer = styled.div`
	width: 375px;
	height: 70px;
	background-color: white;
	position: fixed;
	color: #52b6ff;
	bottom: 0;
	font-size: 18px;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;

	div {
		color: white;
	}

	a {
		color: #52b6ff;
	}
`;
const Circulo = styled.div`
	width: 91px;
	height: 91px;
	clip-path: circle(45px);
	background-color: #52b6ff;
	color: white;
	position: fixed;
	bottom: 10px;
	left: 142.5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const NenhumHabito = styled.div`
	color: #666666;
	font-size: 17px;
	font-weight: 400;
`;
