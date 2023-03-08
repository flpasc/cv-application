import React from "react";
import Project from "./helper/Project";

export default function Projects(props) {
	const projects = [props.projects];

	const projectElements = projects.map((project) => {
		return <Project project={project} />;
	});

	return (
		<div className="projects">
			<div className="div-title">Projects</div>
			<div className="project--container">{projectElements}</div>
		</div>
	);
}
