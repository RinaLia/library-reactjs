import React, { Component } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import Swal from 'sweetalert2'

import axios from 'axios'
const {REACT_APP_URL} = process.env

export class EditAuthor extends Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      description:'',
      alert:''
    }
    this.handlePatch = this.handlePatch.bind(this)
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})

  }

  handlePatch = async (event) => {
    event.preventDefault()
    this.setState({ isLoading: true})

    const authorData = {
      name: this.state.name || this.props.authorname,
      description: this.state.description || this.props.description
    }
    console.log(this.state);
    const url = `${REACT_APP_URL}books/author/${this.props.authorid}`
    console.log(url)
    await axios.patch(url, authorData).then((response) => {
      this.setState({editMsg: response.data.message})
      console.log(response);
      Swal.fire({
        title: 'Done !',
        text: this.state.addMsg,
        icon: 'success',
        timer: 2000
      
    })

    })

    .catch(function(error){
      console.log(error);
      
    })
    // console.log(this.props);
    // this.props.refres()
    await this.props.refreshData()
    this.props.onHide()  
    console.log(this.props);
    
    
    
  }

  render(){
    return (
      <Modal
      {...this.props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Author
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <Form onSubmit={this.handlePatch}>
              <Form.Group controlId="FormBasicEmail">
                <Form.Label>ID Author</Form.Label>
                <Form.Control 
                 name='id'
                 readOnly
                 onChange={this.handleChange}
                 type='text' placeholder='ID Author'
                 defaultValue={this.props.authorid}/> 
                <Form.Text className="text-muted">
                  Please text mode
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name Author</Form.Label>
                <Form.Control 
                  name='name'
                  onChange={this.handleChange}
                  type='text' placeholder='Name Author'
                  defaultValue={this.props.authorname}/>
                <Form.Text className='text-muted'>
                  Please text
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name='description'
                  onChange={this.handleChange}
                  type='text' placeholder='Description'
                  defaultValue={this.props.authordescription}/>
              </Form.Group>
              <Button onClick={this.handlePatch} variant='primary' type='submit'>
                Update
              </Button>
            </Form>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button varian='danger' onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }




}


