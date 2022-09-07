import styled from "styled-components";
import { ButtonOne, InputOne, Spacer, Container, FlexWrapper } from "./_atoms";
import React, { useState, useEffect } from "react";

const Form = styled.form`
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: black;
	border-radius: 0.5rem;
	position: relative;
	width: 400px;
	padding: 1.5rem;
	border: 2px solid white;
	gap: 0.25rem;
`;

export const FormOne: React.FC = () => {
	const [input, setInput] = useState({
		inputfield1: "",
		inputfield2: "",
	});

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const submitHandler = (event) => {
		event.preventDefault();
		// TODO: Update list of items
		// TODO: Clear input fields
	};

	return (
		<Form onSubmit={submitHandler} autoComplete={"off"}>
			<FlexWrapper col>
				<label
					htmlFor={"1"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<InputOne
					dark
					id={"1"}
					name={"inputfield1"}
					type={"text"}
					placeholder={"input-1"}
					height={"3rem"}
					value={input.inputfield1}
					onChange={changeHandler}
				/>
			</FlexWrapper>
			<Spacer height={"0.5rem"} />
			<FlexWrapper col>
				<label
					htmlFor={"2"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<InputOne
					dark
					id={"2"}
					name={"inputfield2"}
					type={"text"}
					value={input.inputfield2}
					placeholder={"input-1"}
					height={"3rem"}
					onChange={changeHandler}
				/>
			</FlexWrapper>
			<Spacer height='4rem' />
			<ButtonOne dark width={"10rem"} absolute bottom='1.5rem'>
				SUBMIT
			</ButtonOne>
		</Form>
	);
};
