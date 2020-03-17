import React from 'react'
import { Card, Header, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const renderDepartment = ({departments}) => {
  // stuff

  return departments.map( department => (
    <Card key={`department-card-${department.id}`}>
    <Card.Content>
      <Card.Header>{ department.name }</Card.Header>
      <Card.Description>
        { department.description }
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button as={Link} to={`/departments/${department.id}`} color='blue'>
        View
      </Button>
    </Card.Content>
  </Card>
  ))
   }


export default renderDepartment;