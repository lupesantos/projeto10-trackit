import styled from "styled-components";

export default function CadastroHabito() {
	return (
		<StyledCadastroHabito>
			<InputDays>
				<input
					type="text"
					//value={senha}
					//onChange={(e) => setCpf(e.target.value)}
					placeholder="nome do hábito"
				/>
				<div>
					<Dias>D</Dias>
					<Dias>S</Dias>
					<Dias>T</Dias>
					<Dias>Q</Dias>
					<Dias>Q</Dias>
					<Dias>S</Dias>
					<Dias>S</Dias>
				</div>
			</InputDays>
			<CadastroHabitoFooter>
				<Cancelar>Cancelar</Cancelar>
				<Salvar>Salvar</Salvar>
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

const Dias = styled.div`
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
