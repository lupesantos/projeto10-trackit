import { Link } from "react-router-dom";
import { getHab } from "./services/trackit";
import { useContext } from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MeusHabitos from "./MeusHabitos";
import UserContext from "../contexts/UserContext";
import Habito from "./Habito";
import Loader from "./Loader";

export default function Habitos() {
	const [checado, setChecado] = useState(false);
	const { objLogin, habList, setHabList, hab, setHab } =
		useContext(UserContext);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${objLogin.token}`,
			},
		};

		getHab(config).then((response) => {
			setHabList(response.data);
		});
	}, [checado]);

	return (
		<>
			<Container>
				<Link to="/">
					<Header>
						TrackIt
						<img src={objLogin.image} alt="oi" />
					</Header>
				</Link>

				<MeusHabitos
					objLogin={objLogin}
					hab={hab}
					setHab={setHab}
					checado={checado}
					setChecado={setChecado}
				/>

				{habList.length === 0 ? (
					<NenhumHabito>
						Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
						começar a trackear!
					</NenhumHabito>
				) : (
					habList.map((item, index) => (
						<Habito
							key={index}
							name={item.name}
							diasHabito={item.days}
							objLogin={objLogin}
							id={item.id}
							checado={checado}
							setChecado={setChecado}
						/>
					))
				)}

				<Footer>
					<h1>Hábitos</h1>
					<Link to="/hoje">
						<Circulo>Hoje</Circulo>
					</Link>
					<Link to="/historico">
						<h1>Histórico</h1>
					</Link>
				</Footer>
			</Container>
		</>
	);
}

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
	padding: 20px;
	color: #666666;
	font-size: 17px;
	font-weight: 400;
`;
