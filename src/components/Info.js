import React from "react";

export default function Info(props) {
	return (
		<div className="info">
			<div className="div-title">Info</div>
			<p className="info--text">{props.info}</p>
		</div>
	);
}
