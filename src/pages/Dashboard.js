import React, { Component } from 'react';
// import FormControl from 'react-bootsrap/FormControl'
import {
  Row, Col, Navbar, NavbarBrand,
  Form, FormGroup, Label, Input, Container,
  Card, CardText, CardBody, CardTitle, Modal,
  ModalBody, ModalFooter
} from 'reactstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'

import profile from '../assets/profil.png'
import logo from '../assets/bookshelf.png'





class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],

    }
  }
  async componentDidMount() {
    const results = await axios.get('http://localhost:4000/api/v1/books')
    const { data } = results.data
    this.setState({ data })
    console.log(data);

  }
  render() {
    return (
      <>
        <Row className='h-100 no-gutters'>
          <Col md={3} className='sidebar shadow p-3 mb-5'>
            <div className='d-flex flex-column justify-content-beetween pt-5 mr-5 ml-5 mb-5 pl-5'>
              <img className='img-fluid' src={profile} alt="profile" />
              <div className='text-center mt-3 mb-5 font-weight-bold'>Nikki Zefaya</div>
              <Navbar className='d-flex flex-column justify-content-beetwen mt-4 font-weight-bold' light expand='md'>
                <NavbarBrand href='/dashboard'>Explore</NavbarBrand>
                <NavbarBrand href='/dashboard'>History</NavbarBrand>
                <NavbarBrand href='/dashboard'>Add Book</NavbarBrand>
              </Navbar>

            </div>
          </Col>
          <Col md={9}>
            <Container>
              <div className="navbar shadow p-3 mb-5 bg-white rounded ml-3">
                <Navbar className="w-100" color="light" light expand="md">
                  <NavbarBrand href="/home">All Category</NavbarBrand>
                  <NavbarBrand href="/home" className="ml-3">All Time</NavbarBrand>
                  <FormGroup>
                    <Label className="w-100 mt-4 ml-5">
                      <Input className="ml-5 w-100" type="search" placeholder="search book"></Input>
                    </Label>
                  </FormGroup>
                  <div className="d-flex w-100 justify-content-end pl-5">
                    <img className="pl-5" src={logo} alt="logo" />
                    <h3 className="mt-4 ">Library</h3>
                  </div>
                </Navbar>
              </div>
            </Container>
            <div className='container'>
              <Row className='w-100 list-book'>
                <Col className='list-book-content'>
                  <h4 className='pl-3'>List books</h4>
                  <Row>
                    {this.state.data.map((books, index) => (
                      <Col md={3}>
                        <Card>
                          <img className='Image' src={books.image} alt="Card image cap" />

                          {/* <CardImg top width="50%" src={books.image} alt="Card image cap" /> */}
                          <CardBody>
                            <Link to={'/detail'}>
                              <CardTitle>{books.title}</CardTitle>
                            </Link>
                            <CardText>{books.description}</CardText>
                            {/* <Button>Button</Button> */}

                          </CardBody>
                        </Card>
                        {/* <div className='card-deck p-2 mt-4 col-md-35'>
                            <img className='card-img-top' src={books.image} alt="Card image cap"/>
                            <div className='card-body'>
                              <h5 className='card-title'>
                                <Link to={'/detail'}>
                                  <a className='text'>{books.title}</a>
                                </Link>
                              </h5>
                              <p className='card-text'>{books.description}</p>
                            </div>
                          </div> */}
                      </Col>
                    ))}
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

export default Dashboard