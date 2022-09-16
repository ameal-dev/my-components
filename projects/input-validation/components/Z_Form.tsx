import styled from "styled-components";
import { Z_Button, Z_Input, Spacer, Z_Container, FlexWrapper } from "./Z_Atoms";
import React, { useState, useRef, useEffect } from "react";

const Styled_Z_Form = styled.form`
	display: flex;
	flex-direction: column;
	background-color: black;
	border-radius: 0.5rem;
	position: relative;
	width: 400px;
	padding: 1.5rem;
	border: 2px solid white;
	gap: 1.5rem;
`;

const nameErrorMsg = (
	<p style={{ color: "red", fontSize: "0.8rem" }}>name must not be empty!</p>
);
const emailErrorMsg = (
	<p style={{ color: "red", fontSize: "0.8rem" }}>email not correct</p>
);

const Z_Form: React.FC = () => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
	const [nameErrorMessage, setNameErrorMessage] = useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = useState(false);
	const [nameRequiredActive, setNameRequiredActive] = useState(false);
	const [emailRequiredActive, setEmailRequiredActive] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
	const enteredEmailIsValid =
		enteredEmail.trim() !== "" && enteredEmail.indexOf("@") !== -1;
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

	console.log({
		enteredName,
		enteredNameTouched,
		enteredEmail,
		enteredEmailTouched,
		nameErrorMessage,
		emailErrorMessage,
		enteredNameIsValid,
		nameInputIsInvalid,
		enteredEmailIsValid,
		emailInputIsInvalid,
	});

	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setEnteredName(value);
		enteredNameIsValid && setNameErrorMessage(false);
	};

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setEnteredEmail(value);
		enteredEmailIsValid && setEmailErrorMessage(false);
	};

	const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.name === "name") {
			setEnteredNameTouched(true);
			setNameRequiredActive(true);
			enteredName.trim() !== ""
				? setNameErrorMessage(false)
				: setNameErrorMessage(true);
		} else {
			setEnteredEmailTouched(true);
			setEmailRequiredActive(true);
			enteredEmailIsValid
				? setNameErrorMessage(false)
				: setNameErrorMessage(true);
		}
	};

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		setEnteredNameTouched(true);
		if (!enteredNameIsValid || !enteredEmailIsValid) {
			setNameErrorMessage(true);
			return;
		} else {
			setEnteredName("");
			setEnteredEmail("");
			setNameErrorMessage(false);
			setNameRequiredActive(false);
			setEmailRequiredActive(false);
			console.log(enteredName, enteredEmail);
		}
	};

	const handleInputFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.name === "name"
			? setEnteredNameTouched(true)
			: setEnteredEmailTouched(true);
	};

	return (
		<Styled_Z_Form onSubmit={handleSubmit} autoComplete={"off"}>
			<FlexWrapper col>
				<label
					htmlFor={"name"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<Z_Input
					dark
					required={nameRequiredActive}
					onChange={handleNameChange}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					valid={!nameInputIsInvalid}
					value={enteredName}
					id={"name"}
					name={"name"}
					type={"text"}
					placeholder='Enter name...'
					height={"3rem"}
				/>
			</FlexWrapper>
			<FlexWrapper col>
				<label
					htmlFor={"name"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<Z_Input
					dark
					required={emailRequiredActive}
					onChange={handleEmailChange}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					valid={!emailInputIsInvalid}
					value={enteredEmail}
					id={"email"}
					name={"email"}
					type={"email"}
					placeholder='Enter e-mail...'
					height={"3rem"}
				/>
			</FlexWrapper>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Z_Button dark disabled={!formIsValid}>
					SUBMIT
				</Z_Button>
				{emailErrorMessage ? emailErrorMsg : ""}
				{nameErrorMessage ? nameErrorMsg : ""}
			</div>
		</Styled_Z_Form>
	);
};

export default Z_Form;
