import React from 'react'
import axios from 'axios'
import { Button, Header, Segment} from 'semantic-ui-react'
import Items from './Items';

class DepartmentView extends React.Component {

  state = { department: {}, items: []  };
  
  componentDidMount(){
    const departmentId = this.props.match.params.id
    axios.get(`/api/departments/${departmentId}`)
    .then( res => {
      this.setState({ department: res.data, })
    })
  }
  
  render(){
    
      const {name, description} = this.state.department
      
    return(
      <>
      <Segment>
        <Header as="h1">{ name }</Header>
        <p>{ description }</p>    
      </Segment>

      <br />
      
      <Items props departmentId={this.props.match.params.id} />

      <br />
      <br />

      <Button 
        color="blue"
        onClick={this.props.history.goBack}>
          Back
      </Button>
      </>
    )
  }
}

export default DepartmentView;