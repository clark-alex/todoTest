import React, { Component } from 'react';
import './App.css';
import Routes from './router.js'
import { getTasks } from './ducks.js/tasks'
import { connect } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getTasks()
  }

  render() {
    return (
      <div className="App">
        {Routes}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { getTasks })(App);