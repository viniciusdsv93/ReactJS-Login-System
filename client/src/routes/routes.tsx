import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../components/loginScreen";
import { RegistryScreen } from "../components/registryScreen";

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<LoginScreen />} />
			<Route path='/register' element={<RegistryScreen />} />
		</Routes>
	);
};
