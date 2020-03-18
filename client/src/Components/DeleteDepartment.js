import React from 'react'
import axios from 'axios'

export default class DeleteDepartment extends React.Component{

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.delete(`/api/departments/${id}`)
    .then(res => {
        this.props.history.push("/departments")
        });

}
  render(){
    return (
      <></>
    )
  }
}