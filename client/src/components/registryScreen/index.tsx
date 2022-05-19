import * as S from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const RegistryScreen = () => {
	const [newLogin, setNewLogin] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleClickRegister = async (
		e: React.MouseEvent<HTMLInputElement, MouseEvent>
	) => {
		e.preventDefault();

		if (newLogin === "" || newPassword === "" || confirmPassword === "")
			return alert("Please, insert login, the password and confirm the password");

		if (newLogin.length < 6) return alert("Login must have at least 6 characters");
		if (newPassword.length < 6)
			return alert("Password must have at least 6 characters");

		if (newPassword !== confirmPassword)
			return alert("Please, make sure your passwords match");

		const response = await axios.post("http://localhost:3001/register", {
			newLogin: newLogin,
			newPassword: newPassword,
		});
		alert(response.data);
	};

	return (
		<S.RegistryForm action='#'>
			<h2>Registry Area</h2>
			<label>
				Login:{" "}
				<input
					type='text'
					required
					value={newLogin}
					onChange={(e) => setNewLogin(e.target.value)}
				/>
			</label>
			<label>
				Password:{" "}
				<input
					type='password'
					required
					value={newPassword}
					onChange={(e) => setNewPassword(e.target.value)}
				/>
			</label>
			<label>
				Confirm password:{" "}
				<input
					type='password'
					required
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
			</label>
			<S.RegistryFormSubmit
				value='Click here to register'
				type='submit'
				onClick={(e) => handleClickRegister(e)}
			/>
			<p>
				Already have an account?
				<br /> <Link to='/'>Click here</Link>
			</p>
		</S.RegistryForm>
	);
};
