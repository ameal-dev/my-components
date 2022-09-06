import styled from "styled-components";

const Container = styled.div`
	padding: 0 0.5rem;
	display: flex;
	flex-flow: column nowrap;
	background-color: black;
	justify-content: center;
	align-items: center;
	height: 100vh;
	min-height: 100vh;
`;
const Main = styled.main`
	padding: 5rem 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button<{ dark?: boolean; padding?: string }>`
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

const Title = styled.h1`
	margin: 0;
	line-height: 1.15;
	font-size: 4rem;
	text-align: center;
	text-decoration: none;

	a {
		color: ${({ theme }) => theme.colors.secondary};
		text-decoration: none;
		&:hover,
		:focus,
		:active {
			text-decoration: underline;
		}
	}
`;

const Description = styled.p`
	text-align: center;
	line-height: 1.5;
	font-size: 1.5rem;
`;
const CodeTag = styled.code`
	background: #fafafa;
	border-radius: 5px;
	margin: 0 0.75rem;
	padding: 0.75rem;
	font-size: 1.1rem;
	font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
		Bitstream Vera Sans Mono, Courier New, monospace;
`;

export { Container, Main, Title, Description, CodeTag, Button };
