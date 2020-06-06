import React, {Component} from 'react';
// import FormControl from 'react-bootsrap/FormControl'
import {Row, Col, Navbar, NavbarBrand, 
  Form, FormGroup, Label, Input, Container,
  Card, CardText, CardBody, CardTitle, 
  CardSubtitle, CardImg} from 'reactstrap'
import profile from '../assets/profil.png'
import logo from '../assets/bookshelf.png'



class Dashboard extends Component{
  render(){
    return(
      <>
          <Row className='h-100 no-gutters'>
            <Col md={3} className='sidebar shadow p-3 mb-5'>
              <div className='d-flex flex-column justify-content-beetween pt-5 mr-5 ml-5 mb-5 pl-5'>
                <img className='img-fluid' src={profile} alt="profile"/>
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
              <Container>
                <div className='text pl-4 font-weight-bold'>List Book</div>
                <Row md={1} className='pl-4'>
                <Col md={3}>
                  <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      </CardBody>
                    </Card>
                  </Col>
                <Col md={3}>
                  <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      </CardBody>
                    </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                      <CardBody>
                        <CardTitle>Card title</CardTitle>
                          <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                      </CardBody>
                    </Card>
                
                </Col>
                </Row>
                
                
                
                
                    
                   
                  
                
                </Container>      
          </Col>
         </Row>
        
      </>
    )
  }
}

export default Dashboard