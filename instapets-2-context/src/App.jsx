import "./App.css";
import Header from "./components/Header";
import PicturesList from "./components/PicturesList";
import { useState } from "react";

// 1. import the Context
import InstagramContext from "./context/InstagramContext";

const App = () => {
  const [totalLikes, setTotalLikes] = useState(0);// useState to use the context
  const incrementTotalLikes = () => { 
    setTotalLikes((totalLikes) => totalLikes + 1);
  }

  const contextValues = { totalLikes, incrementTotalLikes } // the context we want to use

  return (
    <>
      <InstagramContext.Provider value={contextValues}> {/**context provider get the context that we declared */}
        <Header />
        <PicturesList />
      </InstagramContext.Provider>
    </>
  );
};

export default App;