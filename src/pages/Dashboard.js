import React, { Component } from 'react';
// import FormControl from 'react-bootsrap/FormControl'
import {
  Row, Col, Navbar, NavbarBrand,
  Form, FormGroup, Label, Input, Container,
  Card, CardText, CardBody, CardTitle, Modal, ModalHeader,
  ModalBody,ModalFooter, Button, Nav, FormText
} from 'reactstrap'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import qs from 'querystring'

import profile from '../assets/profil.png'
import logo from '../assets/bookshelf.png'

class Dashboard extends Component {
  state={
    visible: true,
    modalAddBook:false,
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handlerSubmit = async (event) => {
    event.preventDefault()

    const data = new FormData(event.target)
    data.set('image', data.get('image').toUpperCase())

    await axios.post('http://localhost:5000/books')
  }
 

  toggleAddBook=()=>{
    this.setState({
      modalAddBook:!this.state.modalAddBook
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pageInfo:[],
      isLoading:false
    }
   
  }
  fetchData = async(params)=>{
    this.setState({isLoading:true})
    const {REACT_APP_URL}=process.env
    const param = `${qs.stringify(params)}`
    const url = `${REACT_APP_URL}books?${param}`
    const results = await axios.get(url)
    const {data} = results.data  
    console.log(data);
    console.log(REACT_APP_URL);
    
    
    const pageInfo = results.data.pageInfo
    console.log(pageInfo);
    
    this.setState({ data, pageInfo, isLoading: false })
    if (params) {
      this.props.history.push(`?${param}`)
    }

  
  }
  
  

  async componentDidMount() {
    // const results = await axios.get('http://localhost:5000/books')
    // const { data } = results.data
    // this.setState({ data })
    // if(params){pageInfo, isLoading: false 
    //   this.props.history.push(`?${param}`)

    // }
    // console.log(data);
    const param = qs.parse(this.props.location.search.slice(1))
    await this.fetchData(param)

  }
  render() {
    const params = qs.parse(this.props.location.search.slice(1))
    params.page = params.page ||1
    return (
      <>
        <Row className='h-100 no-gutters'>
          <Col md={3} className='p-3 mb-2 bg-info'>
            {/* {this.state.isLoading && 
               <div className='d-flex justify-content-center align-items-center'>
               Loading...
             </div> */}
            
            <div className='d-flex flex-column justify-content-beetween pt-5 mr-5 ml-5 mb-5 pl-5'>
              <img className='img-fluid' src={profile} alt="profile" />
              <div className='text-center mt-3 mb-5 font-weight-bold'>Nikki Zefaya</div>
              <Link>
              <Navbar className='d-flex flex-column justify-content-beetwen mt-4 font-weight-bold' light expand='md'>
                <NavbarBrand href='/Author'>Authors</NavbarBrand>
                <NavbarBrand href='/Genre'>Genres</NavbarBrand>
                <NavbarBrand href='/dashboard'onClick={this.toggleAddBook.bind(this)}>Add Book</NavbarBrand>
                  <Modal isOpen={this.state.modalAddBook}>
                    <ModalHeader toggle={this.toggleAddBook.bind(this)}>Add Book</ModalHeader>
                    <ModalBody>
                      <FormGroup>
                        <Label for='example'>File</Label>
                        <Input type='file' name='image' onChange={this.handlerChange}/>
                        <FormText color='muted'>
                        This is some placeholder block-level help text for the above input.
                      It's a bit lighter and easily wraps to a new line.
                        </FormText>
                      </FormGroup>
                      <FormGroup>
                        <Label className='w-100'>
                          <div className='pl-2'>title</div>
                          <Input type='title' placeholder='title'/>
                        </Label>
                      </FormGroup>
                      <FormGroup>
                        <Label className='w-100'>
                          <div className='pl-2'>description</div>
                          <Input type='description' placeholder='description'/>
                        </Label>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      <Button type='text' name='image' color='primary' onSubmit={this.handlerSubmit}>Submit</Button>
                      <Button color='secondary' onClick={this.toggleAddBook.bind(this)}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
              </Navbar>

               </Link>

            </div>
          </Col>
          <Col md={9}>
            <Container>
              <Nav style={{backgroundColor: '#f1f1f1'}}>
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
            <Row>
              <Col md={12}>
                {this.state.isLoading &&
                  <div className='d-flex justify-content-center align-items-center'>
                    Loading...
                  </div>
                }
                {!this.state.isLoading && (
                 

            <div className='container'>
              <Row className='w-100 list-book'>
                <Col className='list-book-content'>
                  <h4 className='pl-3'>List books</h4>
                  <Row xs='3' className='w-100 mb-5 card-deck'>
                    {this.state.data.map((lis_book, index) => (
                      <Col md={3}>
                        <Card>
                          <img className='Image' src={lis_book.image} alt="Card image cap" />

                          {/* <CardImg top width="50%" src={books.image} alt="Card image cap" /> */}
                          <CardBody>
                            <Link to={'/detail'}>
                              <CardTitle className='center'>{lis_book.book_title}</CardTitle>
                            </Link>
                            <CardText>{lis_book.book_desc}</CardText>
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
            )}
            <Row className='mt-5 mb-5'>
                  <Col md={12}>
                    <div className='d-flex flex-row justify-content-between'>
                      <div>
                        {<Button className="ml-5" onClick={() => this.fetchData({ ...params, page: parseInt(params.page) - 1 })}>Prev</Button>}
                      </div>
                      <div>
                        {[...Array(this.state.pageInfo.totalPage)].map((o, i) => {
                          return (
                            <Button onClick={() => this.fetchData({ ...params, page: params.page ? i + 1 : i + 1 })} className='mr-1 ml-1' key={i.toString()}>{i + 1}</Button>
                          )
                        })}
                      </div>
                      <div>
                        <Button className="mr-5" onClick={() => this.fetchData({ ...params, page: parseInt(params.page) + 1 })}>Next</Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

      </>
    )
  }
}

export default Dashboard