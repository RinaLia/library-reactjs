import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import SweetAlert from 'react-bootstrap-sweetalert'
import Swal from 'sweetalert2'

import axios from 'axios'
const { REACT_APP_URL } = process.env

export class EditGenre extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      created_at: '',
      updated_at: '',
      alert: ''
    }
    this.handlePatch = this.handlePatch.bind(this)
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })

  }

  handlePatch = async (event) => {
    event.preventDefault()
    this.setState({ isLoading: true })

    const genreData = {
      name: this.state.name || this.props.genrename,
      created_at: this.state.created_at || this.props.created_at,
      updated_at: this.state.updated_at || this.props.updated_at
    }
    console.log(this.state);
    const url = `${REACT_APP_URL}books/genres/${this.props.genreid}`
    console.log(url)
    await axios.patch(url, genreData).then((response) => {
      this.setState({ editMsg: response.data.message })
      console.log(response);
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
    // console.log(this.props);
    // this.props.refres()
    await this.props.refreshData()
    this.props.onHide()
    console.log(this.props);



  }

  render() {
    return (
      <Modal
        {...this.props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Genre
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <Form onSubmit={this.handlePatch}>
              <Form.Group controlId="FormBasicEmail">
                <Form.Label>ID Genre</Form.Label>
                <Form.Control
                  name='id'
                  readOnly
                  onChange={this.handleChange}
                  type='text' placeholder='ID Genre'
                  defaultValue={this.props.genreid} />
                <Form.Text className="text-muted">
                  Please text mode
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name Genre</Form.Label>
                <Form.Control
                  name='name'
                  onChange={this.handleChange}
                  type='text' placeholder='Name Genre'
                  defaultValue={this.props.genrename} />
                <Form.Text className='text-muted'>
                  Please text mode
                </Form.Text>
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Created-at</Form.Label>
                <Form.Control
                  name='created_at'
                  onChange={this.handleChange}
                  type='date' placeholder='Created_at'
                  defaultValue={this.props.genrecreated_at} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Updated-at</Form.Label>
                <Form.Control
                  name="Updated_at"
                  onChange={this.handleChange}
                  type="date" placeholder="Updated_at"
                  defaultValue={this.props.genreupdated_at} />
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


