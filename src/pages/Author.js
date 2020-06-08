import React, { Component } from 'react';
// import FormControl from 'react-bootsrap/FormControl'
import {
  Row, Col, Navbar, NavbarBrand,
  Form, FormGroup, Label, Input, Container,
  Card, CardText, CardBody, CardTitle, Modal, ModalHeader,
  ModalBody, ModalFooter, Button, Nav, Table
} from 'reactstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import qs from 'querystring'

import profile from '../assets/profil.png'
import logo from '../assets/bookshelf.png'

class Author extends Component {
  state = {
    visible: true,
    modalAddBook: false,
  }

  toggleAddBook = () => {
    this.setState({
      modalAddBook: !this.state.modalAddBook
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }

  }


  async componentDidMount() {
    const results = await axios.get('http://localhost:5000/books')
    const { data } = results.data
    this.setState({ data })

  }
  render() {
    const params = qs.parse(this.props.location.search.slice(1))
    params.page = params.page || 1
    return (
      <>
        <Row className='h-100 no-gutters'>
          <Col md={3} className='p-3 mb-2 bg-info'>
            <div className='d-flex flex-column justify-content-beetween pt-5 mr-5 ml-5 mb-5 pl-5'>
              <img className='img-fluid' src={profile} alt="profile" />
              <div className='text-center mt-3 mb-5 font-weight-bold'>Nikki Zefaya</div>
              <Link>
                <Navbar className='d-flex flex-column justify-content-beetwen mt-4 font-weight-bold' light expand='md'>
                  <NavbarBrand href='/Author'>Authors</NavbarBrand>
                  <NavbarBrand href='/Genre'>Genres</NavbarBrand>
                  <NavbarBrand href='/dashboard' onClick={this.toggleAddBook.bind(this)}>Add Book</NavbarBrand>
                  <Modal isOpen={this.state.modalAddBook}>
                    <ModalHeader toggle={this.toggleAddBook.bind(this)}>Add Book</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <Label className='w-100'>
                          <div className='pl-2'>title</div>
                          <Input type='title' placeholder='title' />
                        </Label>
                      </FormGroup>
                      <FormGroup>
                        <Label className='w-100'>
                          <div className='pl-2'>description</div>
                          <Input type='description' placeholder='description' />
                        </Label>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      <Button color='primary'>Submit</Button>
                      <Button color='secondary' onClick={this.toggleAddBook.bind(this)}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </Navbar>

              </Link>

            </div>
          </Col>
          <Col md={9}>
            <Container>
              <Nav style={{ backgroundColor: '#f1f1f1' }}>
                <div className="navbar shadow p-3 mb-5 bg-white rounded ml-3 ">
                  <Navbar className="w-100 bg-info" color="light" light expand="md">
                    <NavbarBrand href="/dasbboard">All Category</NavbarBrand>
                    <NavbarBrand href="/dashboard" className="ml-3">All Time</NavbarBrand>
                    <FormGroup>
                      <Label className="w-100 mt-4 ml-5">
                        <Input className="ml-5 w-100" type="search" placeholder="looking for.."></Input>
                      </Label>
                    </FormGroup>
                    <div className="d-flex w-100 justify-content-end pl-5">
                      <img className="pl-5" src={logo} alt="logo" />
                      <h3 className="mt-4 ">Library</h3>
                    </div>
                  </Navbar>
                </div>
              </Nav>
            </Container>
            <div className='container'>
              <Row className='w-100 list-book'>
                <Col className='list-book-content'>
                  <h4 className='pl-3'>List Authors</h4>
                  <Row>
                    <Col md={3}>
                      <Table bordered>
                        <thead>
                          <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>description</th>
                          </tr>
                        </thead>

                      </Table>

                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>


          </Col>
        </Row>

      </>
    )
  }
}

export default Author