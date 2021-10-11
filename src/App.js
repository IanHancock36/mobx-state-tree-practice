import React,{useEffect , useState} from "react";
import "./style.css";
import { useJokes } from './store';


export default function App() {
  const jokesStore = useJokes()
  useEffect(() =>{
    jokesStore.fetchJokes()
  },[jokesStore])
// console.log(data.response)
  return (
    <div>
      <h1>{jokesStore.joke}</h1>
  
     
    </div>
  );
}
