import React from "react";

export default function Form(props) {
	const { name, job, tel, town, country, email, git, linkedin, info, skills, projects, education } =
		props.user;
	function handleSubmit(event) {
		event.preventDefault();
		// handle form submission here
	}

	return (
		<form className="form--container">
			<label htmlFor="name">Name:</label>
			<input onChange={props.handleChange} type="text" value={name} name="name" id="name" />

			<label htmlFor="job">Job:</label>
			<input onChange={props.handleChange} type="text" value={job} name="job" id="job" />

			<label htmlFor="tel">Tel:</label>
			<input onChange={props.handleChange} type="tel" value={tel} name="tel" id="tel" />

			<label htmlFor="town">Town:</label>
			<input onChange={props.handleChange} type="text" value={town} name="town" id="town" />

			<label htmlFor="country">Country:</label>
			<input
				onChange={props.handleChange}
				type="text"
				value={country}
				name="country"
				id="country"
			/>

			<label htmlFor="email">Email:</label>
			<input onChange={props.handleChange} type="email" value={email} name="email" id="email" />

			<label htmlFor="git">GitHub:</label>
			<input onChange={props.handleChange} type="text" value={git} name="git" id="git" />

			<label htmlFor="linkedin">linkedIn:</label>
			<input
				onChange={props.handleChange}
				type="text"
				value={linkedin}
				name="linkedin"
				id="linkedin"
			/>

			<label htmlFor="info">Info:</label>
			<textarea
				onChange={props.handleChange}
				className="form--textarea"
				type="text"
				value={info}
				name="info"
				id="info"
			/>

			<label htmlFor="skills">Skills:</label>
			<input onChange={props.handleChange} type="text" value={skills} name="skills" id="skills" />

			<label htmlFor="projects">Projects:</label>
			<input
				onChange={props.handleChange}
				type="text"
				value={projects}
				name="projects"
				id="projects"
			/>

			<label htmlFor="education">Education:</label>
			<input
				onChange={props.handleChange}
				type="text"
				value={education}
				name="education"
				id="education"
			/>
		</form>
	);
}
