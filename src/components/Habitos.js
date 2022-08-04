import styled from "styled-components";
import bob from "../assets/images/bob.png";
import { Link } from "react-router-dom";
import MeusHabitos from "./MeusHabitos";

export default function Habitos({ objLogin }) {
	return (
		<>
			<Container>
				<Link to="/">
					<Header>
						TrackIt
						<img src={bob} alt="oi" />
					</Header>
				</Link>

				<MeusHabitos objLogin={objLogin} />

				<NenhumHabito>
					Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
					começar a trackear!
				</NenhumHabito>

				<Footer>
					<span>Hábitos</span>
					<span>Histórico</span>
					<Circulo>Hoje</Circulo>
				</Footer>
			</Container>
		</>
	);
}

const Container = styled.div`
	background-color: #f2f2f2;
	width: 375px;
	height: 667px;
	border: 1px solid white; /*TEMPORARIO*/
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;

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

	img {
		width: 51px;
	}
`;

const Footer = styled.div`
	width: 375px;
	height: 70px;
	background-color: white;
	position: fixed;
	bottom: 0;
	font-size: 18px;
	font-weight: 400;
	color: red;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 40px;

	span {
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
	padding: 20px;
	color: #666666;
	font-size: 17px;
	font-weight: 400;
`;
