import  React,{ useRef } from 'react';
import './App.css';
import TextInput from './TextInput';
function App() {

 const textRef=useRef()
  return (
    <div className="App">
      <button onClick={()=> {
        textRef.current.onValidate()
      }}>Text Ref </button>

      <TextInput  ref={textRef} />

      
    </div>
  );
}

export default App;











