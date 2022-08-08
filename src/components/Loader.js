import React from "react";
import { Bars } from "react-loader-spinner";

export default function Loader() {
	return (
		<div>
			<Bars
				height="80"
				width="80"
				radius="9"
				color="#126ba5"
				ariaLabel="three-dots-loading"
				wrapperStyle
				wrapperClass
			/>
		</div>
	);
}
