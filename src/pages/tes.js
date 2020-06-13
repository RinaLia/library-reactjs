import React, { Component } from 'react'
import {
  Row, Col, Jumbotron, Container,
  Form, FormGroup, Input, Button, Label,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import {Link} from 'react-router-dom'

import Loading from '../components/Loading'


export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      showModal: false,
      isLoading: false
    }
    this.onFormChange = (e,form) => {
      this.setState({[form]:e.target.value})
    }
    this.onLogin = (e) => {
      e.preventDefault()
      this.setState({isLoading:true})
      const {username, password} = this.state
      if((username === 'admin') && (password === 'admin')){
        setTimeout(()=>{
          this.setState({isLoading: false},()=>{
            localStorage.setItem('token', 'true')
            this.props.check()
            this.props.history.push('/dashboard')
          })
        },1000)
      }else{
        this.setState({showModal: true, isLoading:false})
      }
    }
    this.checkLogin = () => {
      if(localStorage.getItem('token')){
        this.props.history.push('/dashboard')
      }
    }
  }
  componentDidMount(){
    this.checkLogin()
  }
  render() {
    return (
      <>
      <Container className='mt-4'>
        <Row>
          <Col md={6}>
            <Jumbotron>
              <h1>Welcome!</h1>
              <p>Please <Link to='/dashboard'>login</Link> first</p>
            </Jumbotron>
          </Col>
          <Col md={6}>
            <Form onSubmit={e=>this.onLogin(e)}>
              <FormGroup>
                <Label>Username</Label>
                <Input type='text' onChange={(e)=> this.onFormChange(e,'username')} />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input type='password' onChange={(e)=> this.onFormChange(e,'password')} />
              </FormGroup>
              <Row>
                <Col md={12} className='text-right'>
                  <Button type='submit' color='primary'>Login</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Modal isOpen={this.state.showModal}>
        <ModalHeader>Warning</ModalHeader>
        <ModalBody>
          Wrong Username or Password
        </ModalBody>
        <ModalFooter>
          <Button autoFocus onClick={()=>this.setState({showModal: false})} color='primary'>OK</Button>
        </ModalFooter>
      </Modal>
      {this.state.isLoading && (<Loading/>)}
      </>
    )
  }
}
