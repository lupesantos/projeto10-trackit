import { useState } from "react";
import styled from "styled-components";

export default function DiasCadastro({ children, index, clicado, setClicado }) {
	const [diaClicado, setDiaClicado] = useState(false);

	function reserva() {
		console.log(index);
		if (diaClicado === false) {
			setDiaClicado(!diaClicado);
			setClicado([...clicado, index]);
		} else {
			setDiaClicado(!diaClicado);
			setClicado(clicado.filter((value) => value !== index));
		}
	}

	console.log(clicado);
	return (
		<>
			<StyledDias diaClicado={diaClicado} onClick={reserva}>
				{children}
			</StyledDias>
		</>
	);
}

const StyledDias = styled.div`
	margin-right: 5px;
	color: ${({ diaClicado }) => (diaClicado ? "white" : "#dbdbdb")};
	width: 30px;
	height: 30px;
	border-radius: 5px;
	border: 1px solid #d5d5d5;
	background-color: ${({ diaClicado }) => (diaClicado ? "#dbdbdb" : "white")};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
`;
