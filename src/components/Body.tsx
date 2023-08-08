import {task} from "../store";
import {Task} from "./Task";
import {Button, Input} from "@mui/material";
import {useRef} from "react";
import './Body.css';


type BodyProps = {
    tasks: task[];
    updateList: (item:string) => void;
    counter: number;
    updateStatus: (taskItem:task) => void;
    handleDelete: (task:task) => void;
}
export const Body = (props:BodyProps) => {

    const inputRef = useRef<any>(null);
    const sendValue =(event:any) => {
        let name: string = inputRef.current.value;
        if(event.key == 'Enter'){
            props.updateList(name);
            inputRef.current.value="";
        }
        
        // inputRef.current.blur();
    }
    return(
        <div>
            <div className="TaskList">
                {props.tasks.map((taskItem:task)=>{return (<Task key={taskItem.id} handleDelete={props.handleDelete} updateStatus={props.updateStatus} taskInfo={taskItem}/>)})}
            </div>
            <div className="AddButtonDiv">
                <Input placeholder="Enter your task" onKeyDown={sendValue} inputRef={inputRef} onBlur={sendValue}></Input>
            </div>
        </div>
    )
};