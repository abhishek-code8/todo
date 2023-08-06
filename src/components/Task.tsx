import {Checkbox} from "@mui/material";
import {task} from "../store";

type taskProps = {
    taskInfo: task;
}

export const Task = (props:taskProps) => {
    return(
        <div>
            <Checkbox />
            <span>{props.taskInfo.name}</span>
        </div>
    )
}