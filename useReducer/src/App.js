import  React,{ useReducer } from 'react';
import './App.css';
const initialState={
  count:0,
};
const reducer= (state,{type,payload})=>{
  switch (type){
    case "increment":
      return{ count: state.count + payload};
    case "decrement":
      return{count:state.count- payload};

    default:
      return 0;
  }
}

function App() {
  const [state,dispatch]= useReducer(reducer,initialState);

  return (
    <div className="App">
      Saya: {state.count}
      <button 
      onClick={()=>{
        dispatch({type:"increment",payload:10});
      }}>Arttır</button>
      <button onClick={()=>{
        dispatch({type:"decrement",payload:10});
      }}>Azalt</button>

    </div>
     );
}

export default App;











