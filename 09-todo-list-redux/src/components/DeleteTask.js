import React from 'react';

export default function DeleteTask (props){
    return(
        <React.Fragment>
            <li class="list-group-item">
                <p>Are you sure you want to delete the task: {props.task.description}?</p>
                <button className="btn btn-primary btn-sm" 
                    onClick={()=>props.processDelete(props.task)}
                >Yes</button>
                <button className="btn btn-danger btn-sm"
                    onClick={props.taskBeingDeletedSetState}
                >No</button>
            </li>
        </React.Fragment>
    )
}