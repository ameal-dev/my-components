import styled from "styled-components";

export const Button = styled.button<{ dark?: boolean; padding?: string }>`
	padding: ${(props) => (props.padding ? props.padding : "0.75rem 2rem")};
	border: 2px solid ${(props) => (props.dark ? "white" : "black")};
	font-size: 1rem;
	letter-spacing: 1px;
	border-radius: 0.5rem;
	cursor: pointer;
	box-shadow: ${(props) =>
		props.dark ? "" : "0px 0px 10px 2px rgba(0, 0, 0, 0.1)"};
	font-weight: 600;
	color: ${(props) => (props.dark ? "white" : "black")};
	background-color: ${(props) => (props.dark ? "black" : "white")};
	&:hover {
		background-color: ${(props) => (props.dark ? "#1d1d1d" : "#e3e3e3")};
	}
	&:active {
		font-size: 1.1rem;
	}
`;

export const Input = styled.input``;
