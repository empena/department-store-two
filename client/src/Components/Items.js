import React from 'react';
import axios from 'axios';
import {Segment, Header, Grid, Form} from 'semantic-ui-react';
import styled, { keyframes } from "styled-components";


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
    axios.delete(`/api/departments/${departmentId}/items/${id}`)
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
      <BackgroundGradient>
      
      <Segment as={Transparent}>
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
          <BackgroundGradientCard>
          
          <Segment key={`item=${item.id}`} as={Transparent}>
            <Header as="h3">{item.name}</Header>
            <h4>{item.description}</h4>
            <p> {item.price} </p>
            <StyledButton onClick={() => this.deleteItem(item.id)} color='red'>delete</StyledButton>
          </Segment>
          </BackgroundGradientCard>
        ))}
      </Segment>
      </BackgroundGradient>
    );
  }
}



const StyledButton = styled.div`
  display: flex;
  background: #fd1d1d;
  width: 12%;
  height: 
  color: white;
  color: white;
  padding: 15px;
  justify-content: center;
  transition: background 0.2s ease;
  cursor: pointer;
  border-radius: .28571429rem;
  font-weight: bold;
  padding: .78571429em 1.5em .78571429em;
  text-align:center;
  
  line-height: 1em;
  
  &:hover {
    background: white;
    color: #fd1d1d;
    transition: background 0.3s ease;
    
    padding: .7857142em 1.5em .7857142em;
    font-weight: 700;
  }`

  const BackgroundGradient = styled.div`
    background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  `
const BackgroundGradientCard= styled.div`
  background: linear-gradient(90deg, rgba(162,162,236,0.9743084733893558) 0%, rgba(47,204,236,1) 100%);
`
  const Transparent = styled.div`
  background: transparent !important;
`;