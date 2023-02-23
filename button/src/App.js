import  React,{ useRef } from 'react';
import './App.css';
import CustomBtn from './Button'


function App() {

  const btnRef =useRef()

  return (
    <div className="App">
      useRef
      <br/>
      <button onClick={()=>{
        btnRef.current.addEventListener('click',()=>{
          alert('Custon Btn Tıklandı')
        })

        
        console.log(btnRef.current.innerText);}}> 
          Tıkla ve custon Btn ref değerini göster 
       </button> 
       
       <br/>
      <CustomBtn ref={btnRef} text="Custom Ref Button" />
    </div>//buradaki ekşın diğerine alert yani referans olarak gider.
  );
}

export default App;











