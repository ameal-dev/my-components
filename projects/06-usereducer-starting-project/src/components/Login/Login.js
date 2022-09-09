import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import { Input } from "../UI/Input/Input";

const emailReducer = (state, action) => {
	if (action.type === "USER_INPUT") {
		return { value: action.val, isValid: action.val.includes("@") };
	}
	if (action.type === "INPUT_BLUR") {
		console.log("BLUR");
		console.log(state.value.includes("@"));
		return { value: state.value, isValid: state.value.includes("@") };
	}
};

const passwordReducer = (state, action) => {
	switch (action.type) {
		case "PASSWORD_INPUT": {
			return { value: action.val, isValid: action.val.trim().length > 6 };
		}
		case "PASSWORD_BLUR": {
			return { value: state.value, isValid: state.value.trim().length > 6 };
		}
		default: {
			return;
		}
	}
};

const Login = () => {
	const [formIsValid, setFormIsValid] = useState(false);
	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: "",
		isValid: null,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: "",
		isValid: null,
	});

	const ctx = useContext(AuthContext);

	const passwordRef = useRef();
	const emailRef = useRef();

	//aliases
	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;
	console.log(emailState.isValid);

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("Checking form validity!");
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			console.log("CLEANUP");
			clearTimeout(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });

		setFormIsValid(
			event.target.value.includes("@") && passwordState.value.trim().length > 6
		);
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });

		setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "PASSWORD_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) {
			ctx.onLogin(emailState.value, passwordState.value);
		} else if (!emailIsValid) {
			emailRef.current.focus();
		} else {
			passwordRef.current.focus();
		}
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailRef}
					type='email'
					id='email'
					label='email'
					isValid={emailIsValid}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordRef}
					id='password'
					label='password'
					type='password'
					isValid={passwordIsValid}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>

				<div className={classes.actions}>
					<Button type='submit' className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;
