import React, { useState } from 'react';
import FlashCards from './components/FlashCards.jsx';
//import components here

const sampleCards = [
	{
		id: 1,
		question: 'How do we write reducers?',
		answer:
			'Create an object to store initial state. Create a pure function w/ params state and action. Create switch statement that checks action type and logic to create new state object. Return new state.',
	},
	{
		id: 2,
		question: 'How is Node different from Javascript in the browser?',
		answer:
			'No web API, window, document, navigator,XMLHttpRequest or any other browser-specific objects.',
	},
];

const App = () => {
	const [cards, setCards] = useState(sampleCards); //setting default state
	return (
		<div>
			Hello Codesmith
			<FlashCards flashcards={cards} />
		</div>
	);
};

export default App;
