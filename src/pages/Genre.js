import React, { Component } from 'react';
import TopNavbar from './Navbar'
import Sidebar from './Sidebar'
import { Container, Row, Table, Card, Pagination } from 'react-bootstrap';
import axios from 'axios'
import qs from 'querystring'

import SweetAlert from 'react-bootstrap-sweetalert'

// import { AddAuthor } from '../components/AddAuthor'
// import { EditAuthor } from '../components/EditAuthors';
import { AddGenre } from '../components/Genre/AddGenre';

class Genre extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pageInfo: [],
      isLoading: false,
      addModalShow: false,
      alert: null
    }

  }

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  fetchData = async (params) => {
    this.setState({ isLoading: true })
    const { REACT_APP_URL } = process.env
    const param = `${qs.stringify(params)}`
    const url = `${REACT_APP_URL}books/genres?${param}`
    const results = await axios.get(url)
    const { data } = results.data

    const pageInfo = results.data.pageInfo
    this.setState({ data, pageInfo, isLoading: false })
    if (params) {
      this.props.history.push(`?${param}`)
    }
  }

  deleteGenre = async (id) => {
    const { REACT_APP_URL } = process.env
    const url = `${REACT_APP_URL}books/genres/${id}`
    await axios.delete(url)
    console.log(this.props)

    this.fetchData()
  }

  // editAuthor = async(id) =>{
  //   const { REACT_API_URL } = process.env
  //   const url = `${REACT_API_URL}books/author/${id}`
  //   await axios.edit(url)
  //   this.fetchData()

  // }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  onDelete = (id) => {
    const getAlert = () => (
      <SweetAlert
        warning
        showCancel
        confirmBtnText="Yes, delete it!"
        confirmBtnBsStyle="danger"
        title="Are you sure?"
        onConfirm={() => this.deleteGenre(id) && this.hideAlert()}
        onCancel={() => this.hideAlert()}
        focusCancelBtn
      >
        Delete this id {id}
      </SweetAlert>
    );

    this.setState({
      alert: getAlert()
    });
  }


  hideAlert() {
    this.setState({
      alert: null
    });
  }

  async componentDidMount() {
    const param = qs.parse(this.props.location.search.slice(1))
    await this.fetchData(param)
  }

  render() {
    const params = qs.parse(this.props.location.search.slice(1))
    params.page = params.page || 1
    const {genreid,genrename}= this.state
    let addModalClose = () => this.setState({ addModalShow: false })
    let editModalClose= () => this.setState({editModalShow:false})

    return (
      <>
        <Row className="no-gutters w-100 h-100">
          <div className="d-flex flex-row w-100">
            <Sidebar />
            <div className="w-100 d-flex flex-column">
              <div className="top-navbar sticky-top">
                <TopNavbar />
              </div>
              <Container fluid className="mt-4">
                <Card>
                  <Card.Header>Genre</Card.Header>
                  <Card.Body>
                    <button onClick={() => this.setState({ addModalShow: true })} className="btn btn-dark mb-2">Add</button>

                    <AddGenre
                      show={this.state.addModalShow}
                      onHide={addModalClose}
                      refreshData={()=>this.fetchData()}
                    />

                      {/* <EditAuthor
                        show={this.state.editModalShow}
                        onHide={editModalClose}
                        refreshData={()=>this.fetchData()}
                        authorid={authorid}
                        authorname={authorname}
                        authordescription={authordescription}
                        /> */}


                    <Table bordered>
                      <thead align="center">
                        <tr>
                          <th>No</th>
                          <th>Genre</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      {this.state.data.length !== 0 && (
                        <tbody align="center">
                          {this.state.data.map((genre, index) => (
                            <tr key={genre.id.toString()} >
                              <td>{index + 1}</td>
                              <td>{genre.name}</td>
                              <td align="center">
                                {/* <button onClick={()=>{this.setState({editModalShow:true,
                                                                     authorid: author.id,
                                                                     authorname:author.name,
                                                                     authordescription: author.description})}} className = 'btn btn-warning ml-2'>Edit</button> */}
                                <button onClick={() => { this.onDelete(genre.id) }} className="btn btn-danger ml-2">Delete</button>
                                {/*   <button onClick={() =>  { if (window.confirm('Are you sure you wish to delete this item?')) this.deleteAuthor(author.id)} } className="btn btn-danger ml-2">Delete</button> */}
                              </td>
                              {this.state.alert}
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </Table>
                  </Card.Body>
                </Card>
              </Container>
            </div>
          </div>
        </Row>
      </>
    )
  };
}
export default Genre