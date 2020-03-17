import React from 'react'
import axios from 'axios'
import RenderDepartment from './RenderDepartment'

class Departments extends React.Component {
  state = { departments: []};

  componentDidMount(){ 
    axios.get('/api/departments')
    .then((res)=>{
      this.setState({
        departments: res.data
      })
    })
    .catch((err) =>{
      console.log(err)
    })
  }

  render(){

    return(
      <>
        <div>Departments Page</div>
        <RenderDepartment departments={this.state.departments} />
      </>
    )
  }
}

export default Departments;