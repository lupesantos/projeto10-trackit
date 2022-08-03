import ReactDOM from "react-dom";
import App from "./components/App";

function List() {
	return (
		<div>
			<App />
		</div>
	);
}

const list = List();
const element = document.querySelector(".root");
ReactDOM.render(list, element);
