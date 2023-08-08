import React, {useState} from 'react';
import './App.css';

import {task} from "./store";
import {Body} from "./components/Body";

let todoList = [    {
  id: "123",
  name: "Task1",
  status: false,
  body: "This needs to be done",
},
{
  id: "456",
  name: "Task2",
  status: true,
  body: "Please complete this task",
},
{
  id: "789",
  name: "Task3",
  status: false,
  body: "Don't forget about this one",
},
{
  id: "101",
  name: "Task4",
  status: true,
  body: "Urgent action required",
},
{
  id: "202",
  name: "Task5",
  status: false,
  body: "Take your time with this task",
},
{
  id: "303",
  name: "Task6",
  status: true,
  body: "Let's get it done",
},];

function App() {
    const[list,setList] = useState(todoList);
    const[counter, setCounter] = useState(1);
    const insetIntoTaskList = (item:string) => {
        let obj:task = {
            id: counter+"",
            name: item,
            body: "Hello World",
            status: false,
        }
        setCounter((prevState)=> prevState+1);
        let tempList = [...list, obj];
        setList(tempList);
        console.log(tempList);
        todoList.push(obj);
    }
    const updateStatus = (task:task) => {
      let tempList:task[] = [...list];
      tempList.map((item) => {if (item.id == task.id)
        item.status = task.status;
      })
      setList(tempList);
    }
    const handleDelete = (deleteTask:task) => {
      let tempList: task[] = [...list];
      tempList = tempList.filter((task)=> task.id!=deleteTask.id);
      setList(tempList);
    }
  return (
    <div className="App">
      <Body tasks={list} updateList = {insetIntoTaskList} counter={counter} updateStatus={updateStatus} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
