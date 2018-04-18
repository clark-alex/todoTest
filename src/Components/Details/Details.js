import React, { Component } from 'react';
import { getTasks,editTask } from '../../ducks.js/tasks'
import { connect } from 'react-redux';
class Details extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    this.props.getTasks()
  }
  handleInput(){
    let arr = this.props.location.pathname.split('/')
    let page_id = arr[arr.length - 1]
    let obj = {
      title: this.refs.title.value,
      description: this.refs.description.value,
      completed:false
    }
    console.log(obj)
    this.props.editTask(page_id, obj)
  }

  render() {
    let arr = this.props.location.pathname.split('/')
    let page_id = arr[arr.length - 1]
    let activeTask = this.props.tasks.filter(e => e.id === +page_id)
    let deets = activeTask.map(e => {
      return (
        <div>
          <input ref="title" name="title" placeholder={e.title}/>
          <input ref="description" name="description" placeholder={e.description}/>
          {/* <input placeholder={e.title}/> */}
          {/* <h2>{e.description}</h2> */}
          <br/>
          <button onClick={()=>this.handleInput()}>save</button>
          <br/>
          <a href="http://localhost:3001/">submit</a>
          <br/>
          <a href="http://localhost:3001/">HOME</a>
          <br/>
          <a href={`http://localhost:3001${this.props.location.pathname}`}>cancel</a>

        </div>
      )
    })
    console.log('details prop', this.props)
    console.log(activeTask)
    console.log(this.refs)
    
    return (
      <div>
        {deets}
      </div>
    )
  }
};
function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, { getTasks,editTask })(Details)