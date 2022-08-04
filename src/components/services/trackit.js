import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postCad(body) {
	const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
	return promise;
}

function postLog(body) {
	const promise = axios.post(`${BASE_URL}/auth/login`, body);
	return promise;
}

function postHab(body, config) {
	const promise = axios.post(`${BASE_URL}/habits`, body, config);
	return promise;
}
export { postCad, postLog, postHab };
