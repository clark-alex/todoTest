import React, { Component } from 'react';
import './Main.css';
import { connect } from 'react-redux';
import {getTasks} from '../ducks.js/tasks'
import axios from 'axios'



import AddTask from './AddTask/AddTask';
import List from './List/List';

// export default function Main() {
//   return (
   
//   )
// }

class Main extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount(){
    this.props.getTasks();
  }
  
  render() {
    console.log('main.props', this.props);
    
    return (
      <div id="Main__container">
        <div id="Main__header">
          <span> To Do </span>
        </div>

        <AddTask />
        <List />
      </div>
    )
  }
};
function mapStateToProps( state ) {
  return {
    tasks: state.tasks
  }
}

export default connect( mapStateToProps, {getTasks} )( Main )
