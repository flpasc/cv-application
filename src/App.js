import React, { useState, useEffect } from "react";
import "./App.css";
import Education from "./components/Education";
import Header from "./components/Header";
import Info from "./components/Info";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Form from "./components/Form";

function App() {
	const [user, setUser] = useState({
		name: "Fake Dev",
		job: "Awesome Job",
		tel: "0800 414141",
		town: "Jena",
		country: "Germany",
		email: "hireme@please.com",
		git: "github",
		linkedin: "linkedin",
		info: "Ad ante tincidunt massa arcu lacus netus maximus habitant nullam convallis augue fermentum venenatis aliquam finibus, iaculis curae eros senectus fusce non ac vehicula natoque congue nunc curabitur himenaeos euismod. Vitae pretium etiam rhoncus aliquet quis per est vel felis id vestibulum, ornare sociosqu praesent inceptos aptent suspendisse varius phasellus tempor dapibus.",
		skills: {
			languages: "Javascript, React, HTML, CSS",
			communication: "German(native), English(fluent)",
		},
		projects: {
			title: "Project1",
			tech: "Next.js",
			description:
				"Adipiscing et lacus nasdasdasdasdadad ad asd asd asdasdasda sdasfws fherastjh awefghqwe rhas HGEARTH  aenean blandit id aliquet mauris nullam cubilia, efficitur class arcu phasellus non sit curae velit ullamcorper nisl ante.",
		},
		education: {
			location: "Fakecampus",
			level: "Fakeeducation",
		},
	});

	function handleChange(event) {
		console.log(event.target);
	}

	return (
		<>
			<div className="form">
				<Form handleChange={handleChange} user={user} />
			</div>
			<div className="print--container">
				<Header
					name={user.name}
					surname={user.surname}
					job={user.job}
					tel={user.tel}
					town={user.town}
					country={user.country}
					email={user.email}
					git={user.git}
					linkedin={user.linkedin}
				/>
				<Info info={user.info} />
				<Skills skills={user.skills} />
				<Projects projects={user.projects} />
				<Education />
			</div>
		</>
	);
}

export default App;
