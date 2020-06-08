import React, { Component } from 'react'
import { Row, Col, Button, Modal, ModalHeader,
ModalBody,ModalFooter, FormGroup, Label, Input } from 'reactstrap'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import full from '../assets/dilan-full.png'


class Det extends Component{
  
  state={
    visible: true,
    modalEdit:false,
    modalDelete:false
  }
  toggleEdit=()=>{
    this.setState({
      modalEdit:!this.state.modalEdit
    })
  }
  toggleDelete=()=>{
    this.setState({
      modalDelete:!this.state.modalDelete
    })
  }

  
  render(){
    return(
      <>
        <div className='details'>
              <div className='header'>
                <div className='w-100 d-flex justify-content-between p-4'>
                  <div className='back'>
                    <Link to={'/Dashboard'}>
                      <Button className='text'>BACK</Button>
                    </Link>
                  </div>
                    <div className='option-btn'>
                      <Link>
                        <Button className='text' color='primary' onClick={this.toggleEdit.bind(this)}>EDIT</Button>
                        <Modal isOpen={this.state.modalEdit}>
                          <ModalHeader toggle={this.toggleEdit.bind(this)}>Edit Book</ModalHeader>
                          <ModalBody>
                            <FormGroup>
                              <Label className='w-100'>
                                <div className='pl-2'>Title</div>
                                <Input type='title' placeholder='title'/>    
                              </Label>
                            </FormGroup>
                            <FormGroup>
                              <Label className='w-100'>
                                <div className='pl-2'>Descriptions</div>
                                <Input type='description' placeholder='description'/>    
                              </Label>
                            </FormGroup>
                          </ModalBody>
                          <ModalFooter>
                            <Button color='primary'>Sumit</Button>
                            <Button color='secondary' onClick={this.toggleEdit.bind(this)}>Cancel</Button>
                          </ModalFooter>
                        </Modal>
                      </Link>
                      <Link>
                        <Button className='text ml-2' onClick={this.toggleDelete.bind(this)} >DELETE</Button>
                        <Modal isOpen={this.state.modalDelete}>
                          <ModalHeader toggle={this.toggleDelete.bind(this)}>Delete book</ModalHeader>
                          <ModalFooter>
                            <Button color='primary'>Yes</Button>
                            <Button color='secondary' onClick={this.toggleDelete.bind(this)}>No</Button>
                          </ModalFooter>
                        </Modal>
                      </Link>
                    </div>
                </div>
              </div>
              <div className="full-cover w-100 d-flex justify-content-end container">
                <img className='img-fluid' src={full} alt="full-cover" />
              </div>
              <div className='book-details container'>
                <div className='tag'>
                  <h4><span class='badge badge-warning text-white'>Novel</span></h4>
                </div>
                <Row>
                  <Col md={8}>
                    <div className='info d-flex justify-content-between'>
                      <h1>DILAN 1990</h1>
                      <h5 className='d-flex align-items-center text-success'>Available</h5>
                    </div>
                    <h5>30 Juni 2019</h5>
                  </Col>
                </Row>
                <Row className='desc d-flex mt-4 mb-5'>
                  <Col md={8}>
                    Lorem ipsum
                  </Col>
                  <Col md={4} className='borrow align-self-end d-flex justify-content-end'>
                    <Button type='button' className='btn btn-lg btn-warning text-white m-5'>Borrow</Button>'
                  </Col>
                </Row>
              </div>

        </div>
      
         
                
               
                
      </>
    )
  }
}

export default Det