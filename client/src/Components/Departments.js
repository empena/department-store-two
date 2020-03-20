import React from 'react'
import axios from 'axios'
import RenderDepartment from './RenderDepartment'
import styled from 'styled-components';

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
      <ContainerBackground>
      <HeaderText>Departments</HeaderText>
      <DepartmentContainer>
        <RenderDepartment departments={this.state.departments} />
      </DepartmentContainer>
      </ContainerBackground>
    )
  }
}

const ContainerBackground = styled.div`
  background: linear-gradient(to bottom right, purple, #98063A);
`
const DepartmentContainer = styled.div`
  padding: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const HeaderText = styled.h1`
  color: White;
  text-align: center;
  padding: 50px;
  font-size: 45px !important;
`

export default Departments;