import React from 'react'
import axios from 'axios'
import { Form, Header} from 'semantic-ui-react'

export default class UpdateDepartmentForm extends React.Component{

  state = {name:'', description:''}

  componentDidMount(){
    const department_id = this.props.match.params.id;
    axios
    .get(`/api/departments/${department_id}`)
    .then(res => this.setState({
      name: res.data.name,
      description: res.data.description
    }))
  }

  handleChange = e => {
    const {target: {name, value}} = e;
      this.setState({
        [name]: value
      })
    ;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id
    const department = { ...this.state };
    axios
      .put(`/api/departments/${id}`, department)
      .then(res => {
      
        this.props.history.push("/departments");
      })
      .catch(err => {
        console.log(err.response);
      });
  };


  // handleSubmit = () =>{
  //   this.updateItem(this.state)
  // }

  render(){

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