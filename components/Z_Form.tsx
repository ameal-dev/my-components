import styled from "styled-components";
import { Z_Button, Z_Input, Spacer, Z_Container, FlexWrapper } from "./Z_Atoms";
import React, { useState, useEffect } from "react";

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

interface Element {
	dark?: boolean;
	id: number;
	name?: string;
	type: string;
	placeholder?: string;
	value?: string;
}

// interface FormOneProps {
// 	fields: Element[];
// }

export const Z_Form: React.FC = () => {
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

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		// TODO: Update list of items
		// TODO: Clear input fields
	};

	interface Element {
		dark?: boolean;
		id: string;
		name?: string;
		type: string;
		placeholder?: string;
		value?: string;
		onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	}

	return (
		<StyledFormOne onSubmit={submitHandler} autoComplete={"off"}>
			{Array(2).map((elem) => {
				return (
					<FlexWrapper col>
						<label
							htmlFor={"1"}
							style={{ color: "white", fontWeight: "500" }}
						></label>
						<Z_Input
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
				);
			})}
			<FlexWrapper col>
				<label
					htmlFor={"1"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<Z_Input
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
			<FlexWrapper col>
				<label
					htmlFor={"2"}
					style={{ color: "white", fontWeight: "500" }}
				></label>
				<Z_Input
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
			<Z_Button dark>SUBMIT</Z_Button>
		</StyledFormOne>
	);
};
