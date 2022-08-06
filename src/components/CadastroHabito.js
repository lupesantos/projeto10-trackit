import styled from "styled-components";
import { useState } from "react";
import { postHab } from "./services/trackit";
import DiasCadastro from "./DiasCadastro";

export default function CadastroHabito({ objLogin, setHab }) {
	//console.log(objLogin);
	//console.log(objLogin.token);
	const [teste, setTeste] = useState({});
	const [nomeHabito, setNomeHabito] = useState("");
	const [clicado, setClicado] = useState([]);
	const [days, setDays] = useState([
		{ dia: "D", index: 0 },
		{ dia: "S", index: 1 },
		{ dia: "T", index: 2 },
		{ dia: "Q", index: 3 },
		{ dia: "Q", index: 4 },
		{ dia: "S", index: 5 },
		{ dia: "S", index: 6 },
	]);

	function habitoPost(event) {
		event.preventDefault();

		clicado.sort((a, b) => a - b);

		console.log(clicado);

		const body = {
			name: nomeHabito,
			days: clicado,
		};

		const config = {
			headers: {
				Authorization: `Bearer ${objLogin.token}`,
			},
		};
		console.log(body);
		postHab(body, config).then((response) => {
			setTeste(response.data);
			setHab(false);
		});
	}

	console.log(teste);

	return (
		<StyledCadastroHabito>
			<InputDays>
				<input
					type="text"
					value={nomeHabito}
					onChange={(e) => setNomeHabito(e.target.value)}
					placeholder="nome do hábito"
				/>
				<div>
					{days.map((item, index) => (
						<DiasCadastro
							key={index}
							index={item.index}
							clicado={clicado}
							setClicado={setClicado}
						>
							{item.dia}
						</DiasCadastro>
					))}
				</div>
			</InputDays>
			<CadastroHabitoFooter>
				<Cancelar onClick={() => setHab(false)}>Cancelar</Cancelar>
				<Salvar onClick={habitoPost}>Salvar</Salvar>
			</CadastroHabitoFooter>
		</StyledCadastroHabito>
	);
}

const StyledCadastroHabito = styled.div`
	padding: 18.5px;
	width: 340px;
	height: 180px;
	border-radius: 5px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	div {
		display: flex;
	}
`;

const InputDays = styled.div`
	flex-direction: column;
`;

const CadastroHabitoFooter = styled.div`
	gap: 10px;
	justify-content: flex-end;
	align-items: center;
`;

const Salvar = styled.span`
	margin: 4px 0;
	font-size: 16px;
	font-weight: 400;
	color: white;
	width: 84px;
	height: 35px;
	border-radius: 5px;
	background-color: #52b6ff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Cancelar = styled.span`
	font-size: 16px;
	font-weight: 400;
	line-height: 17px;
	color: #52b6ff;
`;
