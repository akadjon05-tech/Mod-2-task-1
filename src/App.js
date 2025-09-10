import { useState, useEffect, createElement } from 'react';
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
	return createElement('div',
		{ className: 'App' },
		createElement(
			'header',
			{ className: 'App-header' },
			[
				createElement('img', {
					src: logo,
					className: 'App-logo',
					alt: 'logo',
					key: 'logo',
				}),
				createElement(
					'p',
					{ key: 'text' },
					'Edit ',
					createElement('code', null, 'src/App.js'),
					' and save to reload.',
				),
				createElement(
					'a',
					{
						className: 'App-link',
						href: 'https://reactjs.org',
						target: '_blank',
						rel: 'noopener noreferrer',
						key: 'link',
					},
					'Learn React',
				),
				// Текущий год под ссылкой
				createElement(
					'p',
					{ key: 'year' },
					currentYear,
				),
			],
		),
	);
};
