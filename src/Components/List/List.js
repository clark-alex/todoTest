import React, { Component } from 'react';
import './List.css';

import Task from './Task/Task';
import { connect } from 'react-redux';
import getTasks from '../../ducks.js/tasks'
import {Link} from 'react-router-dom'

class List extends Component {
  constructor(props) {
    super(props);
    
  }
  // componentDidMount(){
  //   this.props.getTasks()
  // }
  
  render() {

    let { tasks } = this.props
    console.log(tasks);
    
    let Tasks = tasks.map( task => (
     <Task key={ task.id } id={ task.id } title={ task.title } completed={ task.completed } />
    ));
    return (
      <div id="List__container">
      <div id="List__tasksContainer">
        { Tasks }
      </div>
    </div>
    )
  }
};


function mapStateToProps( state ) {
  return {
    tasks: state.tasks
  }
}

export default connect( mapStateToProps, {getTasks} )( List )