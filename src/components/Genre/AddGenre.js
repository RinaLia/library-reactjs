import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import Swal from 'sweetalert2'

import SweetAlert from 'react-bootstrap-sweetalert'

import axios from 'axios'
const { REACT_APP_URL } = process.env


export class AddGenre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      created_at:'',
      updated_at:''
    }
    this.handlePost = this.handlePost.bind(this)
  }


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }


  handlePost = async (event) => {
    event.preventDefault()
    this.setState({ isLoading: true })
    const genreData = {
      name: this.state.name,
      created_at: this.state.created_at,
      updated_at: this.state.updated_at
    }
    console.log(this.state)
    const url = `${REACT_APP_URL}books/genres`
    console.log(url)
    await axios.post(url, genreData).then((response) => {
      console.log(response);
      this.setState ({addMsg: response.data.message})
      console.log(response)
      Swal.fire({
        title: 'Done !',
        text: this.state.addMsg,
        icon: 'success',
        timer: 2000
      })

    })
      .catch(function (error) {
        console.log(error);
      })
    console.log(this.props)
    this.props.refreshData()
    this.props.onHide()
  }


  render() {
    return (
      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Genre
              </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="contaniner">
            <Form onSubmit={this.handlePost}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name Genre</Form.Label>
                <Form.Control name="name" onChange={this.handleChange} type="text" placeholder="Name Genre" />
                <Form.Text className="text-muted">
                  Please text mode
                    </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Created-at</Form.Label>
                <Form.Control name="created_at" onChange={this.handleChange} type="date" placeholder="Created-at" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Updated-at</Form.Label>
                <Form.Control name="updated_at" onChange={this.handleChange} type="date" placeholder="Updated-at" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
                </Button>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button varian="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>

    )
  }
}