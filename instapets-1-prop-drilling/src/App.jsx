import Header from './components/Header';
import PicturesList from './components/PicturesList';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);//total likes state
  const incrementTotalLikes = () => {
    setTotalLikes((totalLikes) => totalLikes + 1);// setter function
  }

  return (
    <>
      <Header likes={totalLikes} />
      <PicturesList incrementTotalLikes={incrementTotalLikes} /> {/*pass down setter function */}
    </>
  );
};

export default App;