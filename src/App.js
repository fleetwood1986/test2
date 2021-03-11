import logo from './logo.svg';
import './App.css';
import React, { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			return state;
	}
};

function App() {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	const increment = () => {
		dispatch({ type: 'increment' });
	};
	const decrement = () => {
		dispatch({ type: 'decrement' });
	};

	return (
		<div>
			<button onClick={decrement}>-</button>
			<span>{state.count}</span>
			<button onClick={increment}>+</button>
		</div>
	);
}

export default App;
