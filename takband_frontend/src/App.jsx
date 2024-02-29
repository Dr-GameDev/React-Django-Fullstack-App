import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PolicyPage from "./pages/PolicyPage";
import SignUpPage from "./pages/SignUpPage";
import ServicePage from "./pages/ServicesPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" Component={HomePage} />
				<Route path="/services" Component={ServicePage} />
				<Route path="/about" Component={AboutPage} />
				<Route path="/contact" Component={ContactPage} />
				<Route path="/signup" Component={SignUpPage} />
				<Route path="/policies" Component={PolicyPage} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
