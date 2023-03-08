import React from "react";

export default function Header(props) {
	return (
		<div className="header">
			<h1 className="header--name">{props.name}</h1>
			<h3 className="header--job">{props.job}</h3>
			<div className="header--contact">
				<div className="header--contact-tel">{props.tel}</div>
				<div className="header--contact-location">
					{props.town}, {props.country}
				</div>
				<div className="header--contact-email">{props.email}</div>
			</div>
			<div className="header--social">
				<div className="header--social-git">{props.git}</div>
				<div className="header--social-linkedin">{props.linkedin}</div>
			</div>
		</div>
	);
}
