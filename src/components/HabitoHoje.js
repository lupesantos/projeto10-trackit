import styled from "styled-components";
import check from "../assets/images/Vector.png";
import { checkHab } from "./services/trackit";

export default function HabitoHoje({
	index,
	name,
	done,
	current,
	highest,
	id,
	objLogin,
}) {
	console.log(objLogin.token);
	console.log(id);

	function checkHabito(event) {
		event.preventDefault();

		const body = {};

		const config = {
			headers: {
				Authorization: `Bearer ${objLogin.token}`,
			},
		};

		checkHab(id, body, config).then(() => console.log("deu bom!"));
	}
	return (
		<Today>
			<div>
				<h1>{name}</h1>
				<p>Sequeência atual: {current} dias</p>
				<p>Seu recorde: {highest} dias</p>
			</div>
			<TodayCheck>
				<img onClick={checkHabito} src={check} alt="oi" />
			</TodayCheck>
		</Today>
	);
}

const Today = styled.div`
	width: 340px;
	height: 94px;
	border-radius: 5px;
	background-color: white;
	font-size: 20px;
	font-weight: 400;
	color: #666666;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15px;
	margin-top: 10px;

	h1 {
		font-size: 20px;
		margin-bottom: 5px;
	}

	p {
		font-size: 13px;
	}
`;

const TodayCheck = styled.div`
	width: 69px;
	height: 69px;
	border-radius: 5px;
	background-color: #ebebeb;
	border: 1px solid #e7e7e7;
	display: flex;
	justify-content: center;
	align-items: center;
`;
