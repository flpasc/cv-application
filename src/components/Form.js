import React, { useState, useEffect } from "react";
import Skill from "./helper/Skill";
import { v4 as uuidv4 } from "uuid";

export default function Form(props) {
	const { name, job, tel, town, country, email, git, linkedin, info, skills, projects, education } =
		props.user;

	const { languages, communication } = skills;

	function handleSubmit(event) {
		event.preventDefault();
		console.log("submit");
		// handle form submission here
	}

	const languagesElements = languages.map((lang) => {
		return <Skill key={uuidv4()} lang={lang} />;
	});

	const communicationElements = communication.map((lang) => {
		return <Skill key={uuidv4()} lang={lang} />;
	});

	handleAdd;

	return (
		<form onSubmit={handleSubmit} className="form--container">
			<fieldset className="form--fieldset">
				<legend>Personal Information</legend>
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
			</fieldset>
			<fieldset className="form--fieldset">
				<legend>Expierience</legend>
				<div className="form--lang">
					<label htmlFor="lang">Languages and Tools:</label>
					{languagesElements}
				</div>
				<input
					onChange={props.handleChange}
					type="text"
					placeholder="Add a programming language or a tool"
					name="lang"
					id="lang"
				/>
				<button onClick={props.handleAdd} type="button">
					Add
				</button>
				<div className="form--lang">
					<label htmlFor="skills">Communication:</label>
					{communicationElements}
				</div>
				<input
					onChange={props.handleChange}
					placeholder="Add your communication skills"
					type="text"
					name="skills"
					id="skills"
				/>
				<button type="button">Add</button>
				<label htmlFor="projects">Projects:</label>
				<input
					onChange={props.handleChange}
					placeholder=""
					type="text"
					name="projects"
					id="projects"
				/>
				<button type="button">Add</button>
			</fieldset>
			<fieldset className="form--fieldset">
				<legend>Education</legend>
				<label htmlFor="education">Education:</label>
				<input
					onChange={props.handleChange}
					type="text"
					value={education}
					name="education"
					id="education"
				/>
			</fieldset>
		</form>
	);
}
