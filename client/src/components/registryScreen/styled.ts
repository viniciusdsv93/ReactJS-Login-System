import styled from "styled-components";

export const RegistryForm = styled.form`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	gap: 15px;
	box-shadow: 0px 5px 20px hsl(212deg 49% 36% / 30%);
	padding: 20px;
	border-radius: 10px;
	border-top: 10px solid #f28c00;

	label {
		display: flex;
		justify-content: space-between;
	}

	h2,
	p {
		text-align: center;
	}

	a {
		color: #f28c00;
	}

	a:hover {
		text-decoration: underline;
	}
`;

export const RegistryFormSubmit = styled.input`
	padding: 5px 10px;
	width: 100%;
	color: #fff;
	font-family: "Poppins", sans-serif;
	background-color: #f28c00;
	border-radius: 5px;
	border: none;
	box-shadow: 5px 5px 10px hsl(212deg 49% 36% / 30%);
	font-weight: bold;
	font-size: 20px;
	cursor: pointer;

	&:hover {
		opacity: 0.7;
	}
`;
