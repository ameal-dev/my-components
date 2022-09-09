import React from "react";
import { useState, useEffect } from "react";

const AuthContext = React.createContext({
	isLoggedIn: false,
	onLogout: () => {}, //enables IDE autocompletion
	onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

		if (storedUserLoggedInInformation === "1") {
			setIsLoggedIn(true);
		}
	}, []);

	const logoutHandler = () => {
		localStorage.removeItem("isLoggedIn");
		setIsLoggedIn(false);
	};

	const loginHandlder = () => {
		localStorage.setItem("isLoggedIn", "1");
		setIsLoggedIn(true);
	};
	return (
		<AuthContext.Provider
			value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandlder }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
