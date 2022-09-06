import Head from "next/head";
import { useState } from "react";

import { ButtonOne, Container, InputOne, Spacer } from "../components/_atoms";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);
	const [modeText, setModeText] = useState("LIGHT");

	const switchDarkMode = () => {
		setDarkMode((prevState) => !prevState);
		setModeText((prevState) => (prevState === "LIGHT" ? "DARK" : "LIGHT"));
	};

	return (
		<Container dark={darkMode}>
			<ButtonOne
				dark={darkMode}
				absolute
				top={"0"}
				right={"0"}
				margin={"1rem 1rem 0 0 "}
				onClick={switchDarkMode}
			>
				{modeText}
			</ButtonOne>
			<ButtonOne dark={darkMode}>TEXT</ButtonOne>
			<Spacer />
			<InputOne
				type={"text"}
				placeholder='Placeholder...'
				dark={darkMode}
			></InputOne>
		</Container>
	);
}
