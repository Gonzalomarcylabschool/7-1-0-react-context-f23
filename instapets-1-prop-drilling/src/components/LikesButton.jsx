import { useState } from 'react';

const LikesButton = ({ incrementTotalLikes }) => { // passing the setter function in as a prop
  const [likes, setLikes] = useState(0); // state for the likes in this component 

  const handleClick = () => {
    incrementTotalLikes(); // finally invoking it
    setLikes(likes + 1)
  }

  return (
    <div className="likes-container">
      <button onClick={handleClick}>❤️ {likes}</button>
    </div>
  )
}

export default LikesButton;