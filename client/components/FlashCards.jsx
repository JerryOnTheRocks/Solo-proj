//dont need use state unless you are trying to persist data for current session
//export default 'name of component'
//component for each card
import React from 'react';
import FlashCard from './FlashCard.jsx';

const FlashCards = (props) => {
  const cards = [];
  props.flashcards.map((card) => {
		cards.push(<FlashCard card={card} key={card.id} />)
	});
  return (
    <div>
    {cards}
    </div>
  )
};

export default FlashCards;
