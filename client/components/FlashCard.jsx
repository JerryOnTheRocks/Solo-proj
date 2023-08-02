import React, { useState } from "react";

const FlashCard = (props) => {
  //useState to handle our flip , set state to false
  const [flip, setFlip] = useState(false);
  //inside of div tag set an on click to toggle between flip or not flip
  //if value is true, show answer, if false, show question
  return (
    <div onClick={()=> setFlip(!flip)} > 
      {flip? props.card.answer: props.card.question}
    </div>
  )
}
export default FlashCard