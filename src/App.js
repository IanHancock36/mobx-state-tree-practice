import React,{useEffect , useState} from "react";
import "./style.css";
import { useJokes } from './store';

export default function App() {
  const jokesStore = useJokes()
  useEffect(() =>{
    jokesStore.fetchJokes()
  },[jokesStore])

  return (
    <div>
      <h1>{jokesStore.jokes}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
