import styled from "styled-components";
import React from "react";
import lixo from "../assets/images/trash-outline.svg";
import { deleteHab } from "./services/trackit";
import { useState } from "react";

export default function Habito({ index, name, diasHabito, objLogin, id }) {
	const [teste, setTeste] = useState(false);

	let i = 0;
	console.log(id);
	const days = [
		{ dia: "D", index: 0 },
		{ dia: "S", index: 1 },
		{ dia: "T", index: 2 },
		{ dia: "Q", index: 3 },
		{ dia: "Q", index: 4 },
		{ dia: "S", index: 5 },
		{ dia: "S", index: 6 },
	];

	function deleteHabito() {
		const config = {
			headers: {
				Authorization: `Bearer ${objLogin.token}`,
			},
		};

		deleteHab(id, config).then(() => {
			console.log("deu bom!");
		});
	}

	return (
		<>
			{name.length === 0 ? (
				<h1>oi</h1>
			) : (
				<StyledCadastroHabito>
					<InputDays>
						<TituloHabito>{name}</TituloHabito>
						<img onClick={deleteHabito} src={lixo} alt="oi" />

						<div>
							{days.map((item, index) => {
								if (item.index === diasHabito[i]) {
									i++;
									return <DiasColorido key={index} day={item.dia} />;
								} else return <Dias key={index} day={item.dia} />;
							})}
						</div>
					</InputDays>
				</StyledCadastroHabito>
			)}
		</>
	);
}

//<Dias key={index} day={item} />

function Dias({ index, day }) {
	return <StyledDias>{day}</StyledDias>;
}

function DiasColorido({ index, day }) {
	return <StyledDiasColoridos>{day}</StyledDiasColoridos>;
}

const StyledCadastroHabito = styled.div`
	margin-top: 5px;
	padding: 18.5px;
	width: 340px;
	height: 91px;
	border-radius: 5px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	div {
		display: flex;
	}

	img {
		width: 20px;
		position: absolute;
		right: 30px;
		z-index: 0;
	}
`;

const InputDays = styled.div`
	flex-direction: column;
	gap: 5px;
`;

const StyledDias = styled.div`
	margin-right: 5px;
	color: #dbdbdb;
	width: 30px;
	height: 30px;
	border-radius: 5px;
	border: 1px solid #d5d5d5;
	background-color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledDiasColoridos = styled.div`
	margin-right: 5px;
	color: #ffffff;
	width: 30px;
	height: 30px;
	border-radius: 5px;
	border: 1px solid #d5d5d5;
	background-color: #cfcfcf;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TituloHabito = styled.div`
	font-size: 20px;
	font-weight: 400;
	color: #666666;
`;