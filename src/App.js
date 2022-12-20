import './App.css';
import Home from './components/Home/Home';
import Login from './components/Account/Login.jsx';
import Nav from './components/Nav/Nav';
import { Routes, Route } from 'react-router-dom';
import CreateAccount from './components/Account/CreateAccount';

function App() {
	return (
		<div>
			<Nav />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/createAccount" element={<CreateAccount />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
