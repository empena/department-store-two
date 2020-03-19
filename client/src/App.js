import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home'
import { Container } from 'semantic-ui-react'
import Departments from './Components/Departments'
import Navbar from './Components/Navbar'
import DepartmentForm from './Components/DepartmentForm'
import DepartmentView from './Components/DepartmentView'
import UpdateDepartmentForm from './Components/UpdateDepartmentForm'
import DeleteDepartment from './Components/DeleteDepartment';
import './App.css'

function App() {
  return (
  <>
    <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/departments" component={Departments} />
          <Route exact path="/departments/new" component={DepartmentForm} />
          <Route exact path='/departments/:id' component={DepartmentView} />
          <Route exact path="/departments/edit/:id" component={UpdateDepartmentForm} />
          <Route exact path='/departments/delete/:id' component={DeleteDepartment} />
         </Switch>
       </Container>
  </>
  );
}

export default App;
