import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import full from '../assets/dilan-full.png'


class Detail extends Component{
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
                        <Button className='text'>EDIT</Button>
                      </Link>
                      <Link>
                        <Button className='text ml-2'>DELETE</Button>
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
                      <h5 className='d-flex align-items-center text-success'>Avaible</h5>
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

export default Detail