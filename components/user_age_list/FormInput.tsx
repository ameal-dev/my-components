import styled from "styled-components";
import { ButtonOne, InputOne, FlexWrapper } from "../_atoms";
import React, { useState } from "react";

const StyledFormOne = styled.form`
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

interface User {
	username: string;
	age: number;
}

interface Props {
	setUsers: React.Dispatch<React.SetStateAction<User[]>>;
	setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormInput: React.FC<Props> = ({ setUsers, setShowModal }) => {
	const initialState = {
		username: "",
		age: 0,
	};

	const [input, setInput] = useState<User>(initialState);

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInput((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (input.username && input.age) {
			const newUser = {
				username: input.username,
				age: input.age,
			};
			setUsers((users) => [newUser, ...users]);
			setInput(initialState);
		} else {
			setShowModal(true);
		}
	};

	return (
		<StyledFormOne onSubmit={submitHandler} autoComplete={"off"}>
			<FlexWrapper col>
				<label
					htmlFor={"Username"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<InputOne
					dark
					id={"Username"}
					name={"username"}
					type={"text"}
					placeholder={"Username"}
					height={"3rem"}
					value={"" || input.username}
					onChange={changeHandler}
				/>
			</FlexWrapper>
			<FlexWrapper col>
				<label
					htmlFor={"2"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<InputOne
					dark
					id={"2"}
					name={"age"}
					type={"number"}
					min='1'
					value={input.age || ""}
					placeholder={"Age"}
					height={"3rem"}
					onChange={changeHandler}
				/>
			</FlexWrapper>
			<ButtonOne dark>SUBMIT</ButtonOne>
		</StyledFormOne>
	);
};
