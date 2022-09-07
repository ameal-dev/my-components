import Head from "next/head";
import { useState } from "react";
import {
	ButtonOne,
	Container,
	InputOne,
	Spacer,
	BoxOne,
} from "../components/_atoms";

import { Img } from "../components/Img";

export default function Home() {
	const [darkMode, setDarkMode] = useState<boolean>(true);
	const [modeText, setModeText] = useState<"LIGHT" | "DARK">("LIGHT");

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
				margin={"1rem 1rem 0 0"}
				onClick={switchDarkMode}
			>
				{modeText}
			</ButtonOne>
			<ButtonOne dark={darkMode}>TEXT</ButtonOne>
			<Spacer height='2rem' />
			<InputOne
				type={"text"}
				placeholder='Placeholder...'
				dark={darkMode}
			></InputOne>
			<Spacer height='2rem' />
			<BoxOne dark={darkMode}>
				<Img
					src={`./svg/icon__remove_one_bg${darkMode ? "black" : "white"}.svg`}
					alt='remove button'
					width='30px'
					absolute
					inset='-1rem 0 100% 93%'
				/>
				BOX
			</BoxOne>
		</Container>
	);
}
