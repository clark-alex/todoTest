import React, { Component } from 'react'; import './Task.css';
import { connect } from "react-redux";
import { removeTask, completeTask, deleteTask,complete } from '../../../ducks.js/tasks';
import { Link } from "react-router-dom";

class Task extends Component {
  render() {
    let { id, title, completed, removeTask, completeTask } = this.props
    console.log('task props', this.props);

    return (
      <div className={"Task__container " + (completed ? "completed" : "")}>
         <a href={`http://localhost:3001/details/${id}`}> <div> {title}</div> </a>
         {/* <Link to={`/details/0`}> <div> {title}</div> </Link> */}
        <span id="Task__complete" onClick={() => complete(id)}> Complete </span>
        <span id="Task__delete" onClick={() => this.props.deleteTask(id)}> Delete </span>
      </div>
    )
  }
};


export default connect(state => state, { removeTask, completeTask, complete, deleteTask })(Task);