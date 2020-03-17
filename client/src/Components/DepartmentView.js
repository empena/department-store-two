import React from 'react'
import axios from 'axios'
import { Button, Header, Segment} from 'semantic-ui-react'
import DepartmentForm from './DepartmentForm'

class DepartmentView extends React.Component {

  state = { departments: {}, };
  
  componentDidMount(){
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ departments: res.data, })
    })
  }

  updateDepartment = (departmentFromForm, id) => {
    axios.put(`/api/departments/${id}`,{
      name: departmentFromForm.name,
      description: departmentFromForm.description
    })
    .then((res)=>{
      const newArray = this.state.departments.map ( currentDepartment => {
        if(currentDepartment.id !== id) 
           return currentDepartment
      return {...currentDepartment, ...departmentFromForm}
      })
      this.setState({
          departments: newArray
      })})}
        

  deleteDepartment = (id) => {
    console.log('in Delete')
    axios.delete(`/api/departments/${id}`)
      .then(res => {
      const {departments} = this.state
      this.set({departments: departments.filter(department => department.id !== id), })
      // this.props.history.push(`/departments/${this.props.match.params.id}`)
    })
  }

  render(){
    
      const {name, description, id} = this.state.departments
      
    return(
      <>
      <Segment>
        <Header as="h1">{ name }</Header>
        <p>{ description }</p>    
      </Segment>
      <br />
      <Button 
        color="blue"
        onClick={this.props.history.goBack}>
          Back
      </Button>
      {this.state.showForm? this.showForm() : this.showMenu()}
              <Button onClick={this.toggleForm}> 
              {this.state.showForm ? 'Hide Form': 'Edit'} 
              </Button>
      <Button 
        color="blue"
        onClick={() => this.deleteDepartment(id)}>
          Delete
      </Button>
      </>
    )
  }
}

export default DepartmentView;