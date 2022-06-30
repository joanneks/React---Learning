import React from 'react'

export default class TaskList extends React.Component {
    state = {
        tasks: [
            {
                _id: 1,
                description: 'Walk the dog',
                done: false
            },
            {
                _id: 2,
                description: 'Water the plants',
                done: false
            },
            {
                _id: 3,
                description: 'Pay the bills',
                done: false
            }
        ],
        newTaskName: '',
        taskBeingEdited: null, //to rmb which task is being edited now. alternatively you can store the _id of the task that is being edited
        modifiedTaskName:''
    }

    updateFormField = (event) => {
        // `event.target` will contain the element that event happened on
        // `event.target.value` will contain the value of the target element
        // `event.target.name` should contain the name of the key that we want to modify in the state
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    addNewTask = () => {
        alert("add new task")
        let newTask = {
            _id: Math.floor(Math.random() * 100000 + 1),
            description: this.state.newTaskName,
            done: false
        }
        // 1.clone the array 2. modify the array 3. replace the cloned array
        let cloned = this.state.tasks.slice()
        cloned.push(newTask)
        this.setState({
            tasks: cloned
        })
    }

    updateTaskDone = (task) => {
        // alert("task is checked - "+task.description)
        let clonedTask = { ...task, done: !task.done }
        // clonedTask.done = !clonedTask.done
        //replcae an element into the middle of an array
        //1.find the index of the modified task
        // let index =-1;
        // for(let i=0; this.state.tasks.length;i++){
        //     if(t._id === clonedTask._id){
        //         index =i;
        //         break;
        //     }
        // }
        let index = this.state.tasks.findIndex(function (t) {
            //if it returns true --> it will return the index of the first element that passes the test (provided by the function).
            // if it returns false --> it will return -1 if no match is found
            if (t._id === clonedTask._id) {
                return true;
            } else {
                return false
            }
        })
        this.setState({
            tasks: [
                ...this.state.tasks.slice(0, index), clonedTask, ...this.state.tasks.slice(index + 1)
            ]
        })

        //non-functional updating an array
        // clonedTaskArray = this.state.tasks.slice();
        // clonedTaskArray[index] = clonedTask;
        // this.setState({
        //     tasks:clonedTaskArray
        // })


    }
    beginEditTask = (task) => {
        this.setState({
            taskBeingEdited: task, // remember which task is being edited
            modifiedTaskName: task.description //store the description of the task that is being edited (for 2 way binding with the text)
        })
    }

    displayTask = (task) => {
        return (
            <li className="mt-3">
                {task.description}
                <input type="checkbox"
                    className="form-check-input ms-3"
                    checked={task.done}
                    onChange={() => {
                        this.updateTaskDone(task)
                    }} />
                <button className="ms-3 btn btn-primary btn-sm"
                    onClick={() => {
                        this.beginEditTask(task);
                    }}

                >Edit</button>
            </li>
        )
    }

    displayEditTask = (task) =>{
        return (<li className="mt-3">
           <input type="text" name="modifiedTaskName" value={this.state.modifiedTaskName} onChange={this.updateFormField}/>
           <button onClick={this.updateTask} 
                   className="btn btn-primary btn-sm ms-3">Update</button>
        </li>)
    }

    updateTask=()=> {
        const modifiedTask = {
            ...this.state.taskBeingEdited,  // copy the key/value pairs from the original task object
            description: this.state.modifiedTaskName // update the description
        }

        // update in the middle of an array 

        // 0. find the index of the task that we want to update
        // let index = this.state.tasks.findIndex( t => t._id === modifiedTask._id);
        let index = this.state.tasks.findIndex(function(t){
            if (t._id===modifiedTask._id) {
                return true;
            } else {
                return false;
            }
        })

        // 1. clone the existing array
        let cloned = this.state.tasks.slice();

        // 2. modify the array
        cloned.splice(index, 1, modifiedTask);

        // 3. replace the original array in the state with the modified one
        this.setState({
            tasks: cloned,
            taskBeingEdited:null
        })
    }

    render() {
        return (<React.Fragment>
            <h1>Todo List</h1>
            {
                this.state.tasks.map(t => (<React.Fragment key={t._id}>
                    {/* taskBeingEdited is set as null in state. so if the edit button is clicked and it stores the task,
                     it becomes not null and becomes false */}
                    {this.state.taskBeingEdited === null || this.state.taskBeingEdited._id !== t._id ?
                        this.displayTask(t)
                        :
                        this.displayEditTask(t)
                    }
                </React.Fragment>))
            }
            <h2 className="mt-3">Add a new Task</h2>
            <div>
                <label>
                    Task Name:
                </label>
                <input type="text"
                    className="form-control"
                    value={this.state.newTaskName}
                    onChange={this.updateFormField}
                    name="newTaskName"
                />
                <button className="mt-1 btn btn-primary" onClick={this.addNewTask}>Add</button>
            </div>
        </React.Fragment>)
    }
}