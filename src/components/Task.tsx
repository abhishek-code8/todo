import {Button, Checkbox} from "@mui/material";
import {task} from "../store";

type taskProps = {
    taskInfo: task;
    updateStatus: (taskItem:task) => void;
    handleDelete: (task:task)=> void;
}



export const Task = (props:taskProps) => {
    const sendUpdate = (taskItem: task) => {
        taskItem.status = !taskItem.status;
        props.updateStatus(taskItem);
    }
    const sendDelete = (deleteTask:task) => {
        props.handleDelete(deleteTask);
    }
    return(
        <div>
            <Checkbox sx={{color:"white"}} checked={props.taskInfo.status} onChange={()=> sendUpdate(props.taskInfo)}/>
            <span>{props.taskInfo.name}</span>
            <Button style={{color: "white"}} onClick={()=>props.handleDelete(props.taskInfo)}>X</Button>
        </div>
    )
}