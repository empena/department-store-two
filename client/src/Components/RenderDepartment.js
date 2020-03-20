import React from 'react'
import { Card, Header, Button, Grid, Container, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const renderDepartment = ({ departments }) => {

  return departments.map(department => (
    <CardContainer>
      <Card.Group key={`department-card-${department.id}`}>
        <Card color='black' as={Link} to={`/departments/${department.id}`}>
          <Card.Content>
            <Card.Header as={HeaderText}>{department.name}</Card.Header>
            <Button.Group basic size='small' attached='top'>
              <Button as={Link} to={`departments/edit/${department.id}`} icon='edit' />
              <Button as={Link} to={`departments/delete/${department.id}`} icon='delete' />
            </Button.Group>
          </Card.Content>
        </Card>
      </Card.Group>
    </CardContainer>
  ))
}

const CardContainer = styled.div`
padding: 10px
`
const HeaderText = styled.h1`
  color: #98063A !important;
  text-align: center;
  font-size: 23px !important;
  padding: 20px;
`


export default renderDepartment;