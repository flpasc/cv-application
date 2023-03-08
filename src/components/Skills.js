import React from "react";

export default function Skills(props) {
	const { languages, communication } = props.skills;
	return (
		<div className="skills">
			<div className="div-title">Skills</div>
			<div className="skills--container">
				<div className="skills--tools">Tools and Languages: {languages}</div>
				<div className="skills--communication">Communication: {communication}</div>
			</div>
		</div>
	);
}
