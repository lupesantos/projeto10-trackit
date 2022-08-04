import React from "react";
import styled from "styled-components";
import CadastroHabito from "./CadastroHabito";

export default function MeusHabitos({ objLogin, hab, setHab }) {
	return (
		<>
			{!hab ? (
				<StyledMeusHabitos>
					Meus hábitos
					<AddHabitos onClick={() => setHab(true)}>+</AddHabitos>
				</StyledMeusHabitos>
			) : (
				<>
					<StyledMeusHabitos>
						Meus hábitos
						<AddHabitos onClick={() => setHab(false)}>-</AddHabitos>
					</StyledMeusHabitos>
					<CadastroHabito objLogin={objLogin} setHab={setHab} />
				</>
			)}
		</>
	);
}

const StyledMeusHabitos = styled.div`
	width: 375px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 23px;
	font-weight: 400;
	color: #126ba5;
	padding: 20px;
`;

const AddHabitos = styled.div`
	font-size: 27px;
	font-weight: 400;
	color: white;
	width: 40px;
	height: 35px;
	border-radius: 5px;
	background-color: #52b6ff;
	display: flex;
	justify-content: center;
	align-items: center;
`;
