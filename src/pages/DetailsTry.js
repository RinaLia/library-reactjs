import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert2";
import {
  Col,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Navbar,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { patchBook, deleteBook } from "../redux/action/book";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      showDelete: false,
      showSuccess: false,
      id: props.match.params.id,
      book_title: props.location.state.book_title,
      book_desc: props.location.state.book_desc,
      image: props.location.state.image,
      book_genre: props.location.state.book_genre,
      book_status: props.location.state.book_status,
      book_author: props.location.state.book_author,
      cover: props.location.state.cover,
      genres: props.location.state.genres,
      genreName: "",
      genreList: [],
      book_id: "",
      status_id: "",
      created_at: "",
      update_at: "",
      user_id: "",
      employee_id: 0,
      file: [],
      file_: {},
      data: [],
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.borrowBook = this.borrowBook.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.toggleDeleteModal = this.toggleDeleteModal.bind(this);
    this.toggleBorrowModal = this.toggleBorrowModal.bind(this);
  }

  home = (e) => {
    e.preventDefault();

    this.props.history.push("/dashboard");
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  borrowBook = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const authorData = {
      book_id: this.state.id,
      user_id: this.state.user_id,
      status_id: this.state.status_id,
      // employee_id: this.state.employee_id
    };

    console.log(authorData);
    const { REACT_APP_URL } = process.env;
    const url = `${REACT_APP_URL}books/transactions`;
    axios
      .post(url, authorData)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
        swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something's wrong, I can feel it",
        });
      });
    this.setState({ showBorrowModal: !this.state.showBorrowModal });
    this.props.history.push("/transactions");
    swal.fire({
      icon: "success",
      title: "Success",
      text: "Yay! borrow book success",
    });
  };

  toggleEditModal() {
    this.setState({
      showEditModal: !this.state.showEditModal,
    });
  }
  toggleDeleteModal() {
    this.setState({
      showDeleteModal: !this.state.showDeleteModal,
    });
  }
  toggleBorrowModal() {
    this.setState({
      showBorrowModal: !this.state.showBorrowModal,
    });
  }
  async deleteBook() {
    // const { REACT_APP_URL } = process.env;
    // await axios.delete(`${REACT_APP_URL}books/${this.state.id}`);
    const { id } = this.state;
    this.props.deleteBook(id);
    swal.fire({
      icon: "success",
      title: "Success",
      text: "Poof! delete success",
    });
    this.props.history.push("/dashboard");
  }

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleImage = (e) => {
    this.setState({
      file: URL.createObjectURL(e.target.files[0]),
      file_: e.target.files[0],
    });
  };

  updateBook = (event) => {
    event.preventDefault();

    if (this.state.file_.size > 0) {
      if (
        this.state.file_.size >= 1240000 ||
        this.state.file_.type.split("/")[0] !== "image"
      ) {
        swal.fire(
          "Failed",
          "Max file size is 1240KB and file type just image",
          "error"
        );
        return;
      }
    }

    this.setState({ isLoading: true });
    const bookData = new FormData();
    if (this.state.file_.size > 0) {
      bookData.append("image", this.state.file_);
    }
    // bookData.append('image', this.state.image)
    bookData.set("book_title", this.state.book_title);
    bookData.set("book_desc", this.state.book_desc);
    bookData.set("book_genre", this.state.book_genre);
    bookData.set("book_author", this.state.book_author);
    bookData.set("book_status", this.state.book_status);
    bookData.set("created_at", this.state.created_at);
    //additional
    // bookData.set("updated_at", this.state.updated_at);
    bookData.set(
      "id_genre",
      this.state.genreList.filter((i) => i.name === this.state.book_genre)[0].id
    );
    bookData.set("id_status", this.state.book_status);

    console.log(bookData);
    const { REACT_APP_URL } = process.env;
    const url = `${REACT_APP_URL}books/${this.state.id}`;
    console.log(url);
    const { id } = this.state;
    this.props
      .patchBook(id, bookData)
      .then((response) => {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response);
        swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something's wrong, I can feel it",
        });
      });
    this.props.history.push("/dashboard");
    this.fetchData();
    swal.fire({
      icon: "success",
      title: "Success",
      text: "Good! Update successfully",
    });
  };

  fetchData = async () => {
    this.setState({ isLoading: true });
    const { REACT_APP_URL } = process.env;
    const url = `${REACT_APP_URL}books/genres`;
    const results = await axios.get(url);
    console.log(results);
    const { data } = results.data;
    return data;
  };

  genreList = async () => {
    this.setState({ isLoading: true });
    const { REACT_APP_URL } = process.env;
    const url = `${REACT_APP_URL}books/genres`;
    const results = await axios.get(url);
    this.setState({ genreList: results.data.data });
    console.log(results);
  };

  async componentDidMount() {
    await this.genreList();
    const data = await this.fetchData();
    this.setState({ genreName: data.name });
  }

  render() {
    return (
      <>
        <Row className="h-50 w100 no-gutters">
          <Col
            md={12}
            className="h-100 bg-cover"
            style={{ backgroundImage: `url(${this.state.cover})` }}
          >
            <div className="h-100 darker">
              <Navbar className="d-flex justify-content-between w-100 p-3">
                <Button
                  className="text-white"
                  color="secondary"
                  onClick={this.home}
                >
                  Back
                </Button>
                {/* <Button className='text-black' onClick={() => this.props.history.goBack()}>Back</Button> */}
                <div className="text-white d-flex">
                  <Button
                    className="text-black"
                    color="primary"
                    onClick={this.toggleEditModal}
                  >
                    Edit
                  </Button>
                  <Button
                    className="text-black ml-2"
                    color="danger"
                    onClick={this.toggleDeleteModal}
                  >
                    Delete
                  </Button>
                </div>
              </Navbar>
              <img
                className="rounded b-shadow mt-5 mr-5 float-right cover-fix"
                src={this.state.cover}
                alt="cover"
              />
            </div>
          </Col>
        </Row>
        <Row className="w100 no-gutters mb-5 ml-5 mt-3">
          <Col xs="9">
            <div className="d-flex">
              <div className="ml-2">
                <h5>
                  <Badge color="warning text-white">Novel</Badge>
                </h5>
              </div>
              <div className="ml-2">
                <h5>
                  <Badge color="primary">{this.state.book_genre}</Badge>
                </h5>
              </div>
            </div>
            <div className="h1"> {this.state.book_title} </div>
            <div className="text-success h5"> {this.state.book_status} </div>
            <div className="h6"> {this.state.book_author} </div>
            <div className=""> {this.state.book_desc} </div>
          </Col>
          <Col className="borrow align-self-end d-flex justify-content-end mt-1">
            <Button
              type="button"
              className="btn btn-lg btn-borrow mr-5 text-white"
              color="warning"
              onClick={this.toggleBorrowModal}
            >
              Borrow
            </Button>
          </Col>
          {/* <Col className='d-flex flex-row justify-content-center ' sx='3'>
                        <Button className="btn btn-warning btn-lg text-white align-self-end b-shadow">Borrow</Button>
                    </Col> */}
        </Row>

        {/* Edit Modal */}
        <Modal isOpen={this.state.showEditModal}>
          <ModalHeader className="h1">Edit Book</ModalHeader>
          <Form>
            <ModalBody>
              <h6>Title</h6>
              <Input
                type="text"
                name="book_title"
                className="mb-2 shadow-none"
                value={this.state.book_title}
                onChange={this.handlerChange}
              />
              <h6>Description</h6>
              <Input
                type="text"
                name="book_desc"
                className="mb-3 shadow-none"
                value={this.state.book_desc}
                onChange={this.handlerChange}
              />
              <h6>Author</h6>
              <Input
                type="text"
                name="book_author"
                className="mb-3 shadow-none"
                value={this.state.book_author}
                onChange={this.handlerChange}
              />
              <h6>Genre</h6>
              <Input
                type="select"
                name="book_genre"
                className="mb-3 shadow-none"
                onChange={this.handlerChange}
                value={this.state.book_genre}
              >
                <option>---</option>
                {this.state.genreList.map((book_genre, index) => (
                  <option
                    key={book_genre.id.toString()}
                    className="list-group-item bg-light"
                    value={book_genre.name}
                  >
                    {book_genre.name}
                  </option>
                ))}
              </Input>
              <h6>Status</h6>
              <Input
                type="select"
                name="book_status"
                className="mb-3 shadow-none"
                value={this.state.book_status}
                onChange={this.handlerChange}
              >
                <option>---</option>
                <option value="1">Available</option>
                <option value="0">Empty</option>
              </Input>
              <h6>Created-at</h6>
              <Input
                type="date"
                name="created_at"
                className="mb-3 shadow-none"
                onChange={this.handlerChange}
              />
              {/* <h6>Updated-at</h6>
              <Input
                type="date"
                name="update_at"
                className="mb-3 shadow-none"
                onChange={this.handlerChange}
              /> */}
              <h6>Image</h6>
              <Input
                type="file"
                accept="image/*"
                name="file"
                id="file"
                onChange={this.handleImage}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.updateBook}>
                Edit Book
              </Button>
              <Button color="secondary" onClick={this.toggleEditModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* Delete Modal */}
        <Modal isOpen={this.state.showDeleteModal}>
          <ModalBody className="h4">Are you sure?</ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.deleteBook}>
              Delete
            </Button>
            <Button color="secondary" onClick={this.toggleDeleteModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* Borrow Modal */}
        <Modal isOpen={this.state.showBorrowModal}>
          <ModalHeader className="h1">Borrow Book</ModalHeader>
          <ModalBody>
            <h6>User ID</h6>
            <Input
              name="user_id"
              onChange={this.handlerChange}
              type="text"
              className="mb-2"
            />
            <h6>Status</h6>
            <Input
              name="status_id"
              onChange={this.handlerChange}
              type="text"
              className="mb-2"
            />
            {/* <h6>Admin ID</h6>
              <Input name='employee_id' onChange={this.handlerChange} type='text' className='mb-2'/> */}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.borrowBook}>
              Borrow
            </Button>
            <Button color="secondary" onClick={this.toggleBorrowModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        {/* Delete Succes Modal */}
        <Modal isOpen={this.state.showSuccessModal}>
          <ModalHeader className="h1">Delete success</ModalHeader>
          <ModalBody className="d-flex justify-content-center align-items-center">
            {/* <img className='centang' src={centang} alt='SuccessImage'/> */}
          </ModalBody>
          <ModalFooter>
            <Button className="btn-success" onClick={this.home}>
              Home
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = { patchBook, deleteBook };
export default connect(null, mapDispatchToProps)(Details);
