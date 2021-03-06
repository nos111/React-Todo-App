import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TasksFrom extends Component {
    render() {
        const todos = this.props.todos
        return (
            <div>
                {todos.map((task,index) => {
                    return <TaskItem 
                        key={task.id}
                        task={task}
                        index={index}
                        handleSubmit={(description) => {
                            return this.props.handleSubmit(description,task.id)}
                        }
                        handleDelete={this.props.handleDelete}
                        handleCompletedTask={this.props.handleCompletedTask}
                    />
                })}
                
            </div>
        );
    }

}



//export default TasksFrom;
