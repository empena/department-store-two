import React from 'react'
import axios from 'axios'
import { Form, Header} from 'semantic-ui-react'

class DepartmentForm extends React.Component{

  state = {name:'', description:''}

  handleSubmit = (e) => {
    const department = {...this.state}
    axios.post('/api/departments', department)
    .then((res)=>{
      this.setState({name:'', description:''})
      this.props.history.push('/departments')
    })
    .catch((err)=>{
      console.log(err)
    })

  }
  handleChange = (e) => {
      const { target: {name, value} }= e
      this.setState({
       [name]: value
      })
    };
    
  render() {

    const { name, description } = this.state
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group width='equal'>
          <Form.Input
            label="Name"
            placeholder="Fill in Name"
            name="name"
            value={name}
            onChange={this.handleChange} />
          <Form.Input
            label="Description"
            placeholder="Fill in Description"
            name="description"
            value={description}
            onChange={this.handleChange} />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
      </div>
    
    )
  }
}

  export default DepartmentForm;
