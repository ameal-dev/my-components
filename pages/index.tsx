import Head from "next/head";
import { useState } from "react";
import {
	Z_Button,
	Z_Container,
	Z_Input,
	Spacer,
	Z_Box,
} from "../components/Z_Atoms";

import { Img } from "../components/Img";

export default function Home() {
	const [darkMode, setDarkMode] = useState<boolean>(true);
	const [modeText, setModeText] = useState<"LIGHT" | "DARK">("LIGHT");

	const switchDarkMode = () => {
		setDarkMode((prevState) => !prevState);
		setModeText((prevState) => (prevState === "LIGHT" ? "DARK" : "LIGHT"));
	};

	return (
		<Z_Container dark={darkMode}>
			<Z_Button
				dark={darkMode}
				absolute
				top={"0"}
				right={"0"}
				radius='50%'
				padding='0'
				width='2.5rem'
				height='2.5rem'
				margin={"1rem 1rem 0 0"}
				onClick={switchDarkMode}
			>
				<img
					src='./svg/icon__moon_crescent.svg'
					alt='switch dark mode'
					width='20rem'
				/>
			</Z_Button>
			<Z_Button dark={darkMode} width='8rem'>
				BUTTON
			</Z_Button>
			<Spacer height='2rem' />
			<Z_Input
				type={"text"}
				placeholder='Placeholder...'
				dark={darkMode}
			></Z_Input>
			<Spacer height='2rem' />
			<Z_Box dark={darkMode}>
				<Img
					src={`./svg/icon__remove_one_bg${darkMode ? "black" : "white"}.svg`}
					alt='remove button'
					width='30px'
					absolute
					inset='-1rem 0 100% 93%'
				/>
				BOX
			</Z_Box>
		</Z_Container>
	);
}
