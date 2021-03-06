import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Input, Label, Button, Modal, ModalBody, ModalHeader, ModalFooter, Jumbotron } from 'reactstrap'
import axios from 'axios'
import qs from 'querystring'
import swal from 'sweetalert2'

import LoginModel from '../models/login'
import logo from '../assets/bookshelf.png'

import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const { REACT_APP_URL } = process.env

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // username:'',
      email: '',
      password: '',
      showModal: false,
      isLoading: false
    }
    this.onFormChange = (e, form) => {
      this.setState({ [form]: e.target.value })
    }
    this.onLogin = (e) => {
    e.preventDefault()
    this.setState({ isLoading: true })
    const userData = {
      // username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    console.log(this.state)
    const url = `${REACT_APP_URL}books/auth/login`
    console.log(url)
    axios.post(url, userData).then((response) => {
      console.log(response);
      this.props.history.push('/dashboard')
    // this.fetchData()
      swal.fire({
        icon: 'success',
        title: 'Success',
        text: "Good! You're Logged In"
      })
    })
      .catch(function (error) {
        console.log(error.response);
        swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: "Something's wrong dude"
        })
      })
    
    }
    // this.onLogin = (e) => {
    //   e.preventDefault()
    //   this.setState({ isLoading: true })
    //   const { username, email, password } = this.state
    //   const data = {
    //     username: this.state.username,
    //     email: this.state.email,
    //     password: this.state.password
    //   }
    //   //const { email, password } = data
    //   // return Axios.post(('auth/login'), qs.stringify({ username, email, password }))
    //   const { REACT_APP_URL } = process.env
    //   const param = `${qs.stringify({ username, email, password })}`
    //   const url = `${REACT_APP_URL}books/auth/login`
    //   const results = axios.post(url, param)

    //   console.log("results:"+results)
    //   console.log("param: "+param)
    //   //if ((username === 'admin') &&(email==='admin') &&(password === 'admin')) {
    //   if (results) {
        
    //     setTimeout(() => {
    //       this.setState({ isLoading: false }, () => {
    //         localStorage.setItem('token', 'true')
    //         this.props.check()
    //         this.props.history.push('/dashboard')
    //       })
    //     }, 1000)
    //   } else {
    //     this.setState({ showModal: true, isLoading: false })
    //   }
    // }
    this.checkLogin = () => {
      if (localStorage.getItem('token')) {
        this.props.history.push('/dashboard')
      }
    }
  }

  componentDidMount() {
    this.checkLogin()
  }

  // login = (e) => {
  //   e.preventDefault()
  //   const data = {
  //     userData: {
  //       email: this.state.email,
  //       password: this.state.password,
  //     }
  //   }
  //   this.props.history.push('/list-book', data)
  // }

  render() {
    return (
      <>
        <Row className='h-100 no-gutters'>
          <Col md={8} className='login-cover'>
            <div className='d-flex flex-column justify-content-between login-overlay w-100 h-100'>
              <h1 className='text-white'>Book is a window to the world</h1>
              <div className='text-white'>Photo by Mark Pan4ratte on Unsplash</div>
            </div>
          </Col>
          <Col md={4}>
            <div className='d-flex flex-column w-100 h-100'>
              <div className='d-flex justify-content-end'>
                <img className='p-3' src={logo} alt='Logo' />
              </div>
              <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
                <Form onSubmit={e=>this.onLogin(e)}>
                  <h1>Login</h1>
                  <p>Welcome Back, Please Login to your account</p>
                  {/* <FormGroup>
                    <Label className='w-100'>
                      <div>Username</div>
                      <Input type='text' onChange={(e) => this.onFormChange(e, 'username')} placeholder="Name" />
                    </Label>
                  </FormGroup> */}
                  <FormGroup>
                    <Label className='w-100'>
                      <div>Email</div>
                      <Input type='text' onChange={(e) => this.onFormChange(e, 'email')} placeholder="name@gmail.com" />
                    </Label>
                  </FormGroup>
                  <FormGroup>
                    <Label className='w-100'>
                      <div>Password</div>
                      <Input type='password' onChange={(e) => this.onFormChange(e, 'password')} placeholder="************" />
                    </Label>
                  </FormGroup>
                  <div className='d-flex flex-row justify-content-between'>
                    <FormGroup check>
                      <Label check>
                        <Input type='checkbox' />
                        <span>Remember Me</span>
                      </Label>
                    </FormGroup>
                    <div>Forgot Password</div>
                  </div>
                  <div className='mt-2'>
                    {/* <Link to={'/home'}> */}
                      <Button type="submit" color="primary">Login</Button>
                    {/* </Link> */}
                    <Link to={'/register'}>
                      <Button outline color="secondary" className='ml-2'>Sign Up</Button>
                    </Link>
                  </div>
                </Form>
              </div>
              <div className='d-flex flex-column p-5'>
                <div>By signing up, you agree to Book’s</div>
                <div>Terms and Conditions &amp; Privacy Policy</div>
              </div>
            </div>
          </Col>
        </Row>
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Warning</ModalHeader>
          <ModalBody>
            Wrong Username or Password
        </ModalBody>
          <ModalFooter>
            <Button autoFocus onClick={() => this.setState({ showModal: false })} color='primary'>OK</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default Login