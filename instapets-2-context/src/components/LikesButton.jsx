import { useState, useContext } from 'react';// import useContext
import InstagramContext from "../context/InstagramContext";

const LikesButton = () => {
  const [likes, setLikes] = useState(0);

  const contextValues = useContext(InstagramContext);// is an object

  const handleClick = () => {
    contextValues.incrementTotalLikes();//from the context
    setLikes(likes + 1)
  }

  return (
    <div className="likes-container">
      <button onClick={handleClick}>❤️ {likes}</button>
    </div>
  )
}

export default LikesButton;