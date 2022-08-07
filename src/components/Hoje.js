import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/pt";
import { useEffect } from "react";
import { todayHab } from "./services/trackit";
import HabitoHoje from "./HabitoHoje";

export default function Hoje() {
	const { objLogin } = useContext(UserContext);
	let now = dayjs();
	console.log(now.format("dddd,DD/MM "));

	const { hoje, setHoje } = useContext(UserContext);

	useEffect(() => {
		const config = {
			headers: {
				Authorization: `Bearer ${objLogin.token}`,
			},
		};

		todayHab(config).then((response) => {
			setHoje(response.data);
		});
	}, [objLogin]);

	console.log(hoje);

	return (
		<>
			<Container>
				<Link to="/">
					<Header>
						TrackIt
						<img src={objLogin.image} alt="oi" />
					</Header>
					<Horario>{now.locale("pt-br").format("dddd, DD/MM ")}</Horario>

					{hoje.length === 0 ? (
						<NenhumHabito>Nenhum hábito concluído ainda</NenhumHabito>
					) : (
						hoje.map((item, index) => (
							<HabitoHoje
								key={index}
								name={item.name}
								done={item.done}
								current={item.currentSequence}
								highest={item.highestSequence}
								id={item.id}
								objLogin={objLogin}
							/>
						))
					)}
				</Link>

				<Footer>
					<Link to="/habitos">
						<h1>Hábitos</h1>
					</Link>

					<Circulo>Hoje</Circulo>

					<h1>Histórico</h1>
				</Footer>
			</Container>
		</>
	);
}

const Horario = styled.div`
	font-size: 23px;
	font-weight: 400;
	color: #126ba5;
	margin-top: 10px;
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
	width: 100%;
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
	color: #bababa;
	font-size: 17px;
	font-weight: 400;
`;
