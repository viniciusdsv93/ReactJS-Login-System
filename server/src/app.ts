import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const fakeDB = [
	{ login: "Carla456", password: "carlinha" },
	{ login: "Rogerio789", password: "penguin" },
	{ login: "Jorginho123", password: "sunrise" },
	{ login: "Armando99", password: "ferrari" },
	{ login: "Josias852369", password: "airplane" },
];

app.post("/login", (req: Request, res: Response, next: NextFunction) => {
	const reqLogin = req.body.login;
	const reqPW = req.body.password;

	let isValidated = false;

	for (let i = 0; i < fakeDB.length; i++) {
		if (reqLogin === fakeDB[i].login) {
			if (reqPW === fakeDB[i].password) {
				isValidated = true;
			}
		}
	}

	let response = isValidated ? "User authenticated" : "Login or password are incorrect";

	res.status(200).send(response);
});

app.post("/register", (req: Request, res: Response, next: NextFunction) => {
	for (let i = 0; i < fakeDB.length; i++) {
		if (req.body.newLogin === fakeDB[i].login) {
			res.status(200).send("Login already at use. Please, choose another one.");
		}
	}

	const newUser = {
		login: req.body.newLogin,
		password: req.body.newPassword,
	};
	fakeDB.push(newUser);
	console.log(fakeDB);
	res.status(200).send("User successfully registered.");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log("Server running on port: ", PORT));
