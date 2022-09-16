import React from "react";
import { useState } from "react";

export const useInput = () => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredName(event.target.value);
		event.target.value !== "" && setErrorMessage(false);
	};

	const nameInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredNameTouched(true);
		enteredName.trim() !== "" ? setErrorMessage(false) : setErrorMessage(true);
	};

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		setEnteredNameTouched(true);
		if (!enteredNameIsValid) {
			setErrorMessage(true);
			return;
		} else {
			setEnteredName("");
			setErrorMessage(false);
			console.log(enteredName);
		}
	};

	const nameInputFocus = () => {
		setEnteredNameTouched(true);
	};

	return {
		enteredName,
		submitHandler,
		changeHandler,
		nameInputFocus,
		enteredNameIsValid,
		nameInputBlur,
		errorMessage,
		nameInputIsInvalid,
	};
};
