import  React,{ useState,useMemo } from 'react';
import './App.css';
import CustomText from './CustomText';
function App() {
  const [text,setText]=useState("")
  const [data,setData]=useState("enes")

  const memoData= useMemo(()=> {
    return text // text yazarsam ve [text] yazarsak memo Data Degeri text i taklit eder
  },[text])

  return (
    <div className="App">
      Memo hooks

      <br/>

      <input  value={text} onChange={(e)=>{
        setText(e.target.value)
      }}/>
      <br/>
      text degeri:{text}
      <CustomText/>
      <br/>
      <hr/>
      <div>
        <button onClick={ ()=>setData("Sude Nur Karakuş")}>Data Güncelle</button>
        <br/>
        useState Data Değeri={data}

      </div>


      <div>
        memo Data Değeri:{memoData}

      </div>
      
    </div>
  );
}

export default App;











