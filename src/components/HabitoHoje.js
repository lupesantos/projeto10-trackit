import styled from "styled-components";
import check from "../assets/images/Vector.png";
import { checkHab, uncheckHab } from "./services/trackit";

export default function HabitoHoje({
	index,
	name,
	done,
	current,
	highest,
	id,
	objLogin,
	checado,
	setChecado,
}) {
	console.log(id);

	function checkHabito(event) {
		event.preventDefault();

		const body = {};

		const config = {
			headers: {
				Authorization: `Bearer ${objLogin.token}`,
			},
		};

		if (done === false) {
			checkHab(id, body, config).then(() => {
				console.log("deu bom!");
				setChecado(!checado);
			});
		} else {
			uncheckHab(id, body, config).then(() => {
				console.log("deu bom!2");
				setChecado(!checado);
			});
		}
	}

	return (
		<Today done={done}>
			<div>
				<h1>{name}</h1>
				<p>
					Sequência atual: <span>{current} dia(s)</span>
				</p>
				<p>
					Seu recorde: <span>{highest} dia(s)</span>
				</p>
			</div>
			<TodayCheck done={done}>
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
		margin-bottom: 2px;
	}

	span {
		color: ${({ done }) => (done === true ? "#8FC549" : "#666666")};
	}

	p:nth-child(3) span {
		color: ${({ current, highest }) =>
			current === highest ? "#8FC549" : "#666666"};
	}
`;

const TodayCheck = styled.div`
	width: 69px;
	height: 69px;
	border-radius: 5px;
	background-color: ${({ done }) => (done === true ? "#8FC549" : "#ebebeb")};
	border: 1px solid #e7e7e7;
	display: flex;
	justify-content: center;
	align-items: center;
`;
