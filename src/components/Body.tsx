import {task} from "../store";
import {Task} from "./Task";
import {Button, Input} from "@mui/material";
import {useRef} from "react";


type BodyProps = {
    tasks: task[];
    updateList: (item:task) => void;
}


export const Body = (props:BodyProps) => {

    const inputRef = useRef<any>(null);
    const sendValue =() => {
        let obj: task = {
            id:"123",
            name: inputRef.current.value,
            body: "temp",
            status: true,
        }
        props.updateList(obj);
        inputRef.current.value="";
    }
    return(
        <div>
            <div className="TaskList">
                {props.tasks.map((taskItem:task)=>{return (<Task key={taskItem.id} taskInfo={taskItem}/>)})}
            </div>
            <div className="AddButtonDiv">
                <Input placeholder="Enter your task" inputRef={inputRef} onBlur={sendValue}></Input>
            </div>
        </div>
    )
};