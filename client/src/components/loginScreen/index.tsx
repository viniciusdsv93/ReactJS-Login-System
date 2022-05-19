import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
		e.preventDefault();
		if (login === "" || password === "")
			return alert("Please, insert login and password");

		if (login.length < 6) return alert("The login must have at least 6 characters");

		if (password.length < 6)
			return alert("The password must have at least 6 characters");

		const response = await axios.post("http://localhost:3001/login", {
			login: login,
			password: password,
		});
		alert(response.data);
	};

	return (
		<S.Form action='#'>
			<h2>Login Area</h2>
			<label>
				Login:{" "}
				<input
					type='text'
					required
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
			</label>
			<label>
				Password:{" "}
				<input
					type='password'
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<S.FormSubmit
				value='Click here to login'
				type='submit'
				onClick={(e) => handleClick(e)}
			/>
			<p>
				Aren't you registered yet?
				<br /> <Link to='/register'>Click here</Link>
			</p>
		</S.Form>
	);
};
