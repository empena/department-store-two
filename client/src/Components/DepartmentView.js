import React from 'react'
import axios from 'axios'
import { Button, Header, Segment} from 'semantic-ui-react'

class DepartmentView extends React.Component {

  state = { departments: {}, };
  
  componentDidMount(){
    axios.get(`/api/departments/${this.props.match.params.id}`)
    .then( res => {
      this.setState({ departments: res.data, })
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
      </>
    )
  }
}

export default DepartmentView;