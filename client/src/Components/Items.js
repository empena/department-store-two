import React from 'react';
import axios from 'axios';
import {Segment, Header, Button, Form} from 'semantic-ui-react';

export default class Items extends React.Component {

  state = { items: [], name:'', description: '', price: ''}

  componentDidMount() {

    const { departmentId } = this.props;
    axios.get(`/api/departments/${departmentId}/items`)
    .then(res => {
      console.log(res);
      this.setState({
        items: res.data
      })
    })
  }

  deleteItem(id){
    const {departmentId} = this.props;
    axios.delete(`api/departments/${departmentId}/items/${id}`)
    .then(() => {
      const newItems = this.state.items.filter ( item => item.id != id)
      this.setState({
        items: newItems
      })
    })
  }

  handleChange =(e)=>{
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) =>{
    const { departmentId } = this.props;
    axios.post(`/api/departments/${departmentId}/items`,{
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
    }).then((res)=>{
      this.setState({
        items:[res.data, ...this.state.items]
      })
    }).catch(err =>
      console.log(err.message))
  }

  render(){

    const { name, description, price } = this.state


    return (
      <Segment>
        <h2> Add Item</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              required
            />
            <Form.Input
              label="Description"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
              <Form.Input
              label="Price"
              name="price"
              placeholder="Price"
              value={price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button color="blue">Submit</Form.Button>
        </Form>

        <Header as="h1">Items</Header>
        {this.state.items.map(item => (
          <Segment key={`item=${item.id}`}>
            <Header as="h3">{item.name}</Header>
            <h4>{item.description}</h4>
            <p> {item.price} </p>
            <Button onClick={() => this.deleteItem(item.id)} color='red'>delete</Button>
          </Segment>
        ))}
      </Segment>
    );
  }
}
