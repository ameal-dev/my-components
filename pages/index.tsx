import Head from "next/head";
import {
	Container,
	Main,
	Title,
	Description,
	CodeTag,
} from "../components/sharedstyles";
import { Button, Input } from "../components/atoms";

export default function Home() {
	const clickHandler = () => {
		console.log("Leave me alone");
	};

	return (
		<Container>
			<Button dark onClick={clickHandler}>
				TEXT
			</Button>
		</Container>
	);
}
