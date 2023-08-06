import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {task, todoList} from "./store";
import {Body} from "./components/Body";



function App() {
    const[list,setList] = useState(todoList);
    const insetIntoTaskList = (item:task) => {
        let tempList = [...list, item];
        setList(tempList);
        console.log(tempList);
    }
  return (
    <div className="App">
      <Body tasks={list} updateList = {insetIntoTaskList}/>
    </div>
  );
}

export default App;
