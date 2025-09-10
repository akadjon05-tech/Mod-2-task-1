import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
// Императивный стиль
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
// Императивный стиль
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentYear(new Date().getFullYear());
		}, 1000 * 60 * 60 * 24);

		return () => clearInterval(interval);
	}, []);
// Декларативный стиль
	return (<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
			<p>{currentYear}</p>
		</header>
	</div>);
};
