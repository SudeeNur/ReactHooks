import  React,{ useState,useEffect,useLayoutEffect } from 'react';
import './App.css';


function App() {
  const [text,setText]=useState("Sude Nur Karakuş"); 
  useEffect(()=>{
    console.log("useeffect çalışıyor");
    setText("**Sude**Nur**Karakuş")
    // dom bittikten sonra devreye girer

  },[]);


  useLayoutEffect(()=>{
    console.log("useLayoutEffect çalışıyor"); //console da direkt bu çalışır 
    setText("**Sude**Nur**Karakuş");
  },[]);
  return (
    <div className="App">
      text:{text}

    </div>
     );
}

export default App;











