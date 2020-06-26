import React, { Component } from "react";

import { Form, Navbar, Nav, FormControl, Container } from "react-bootstrap";

import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

import { IoMdLogOut } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { BsPen } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";

import { Link } from "react-router-dom";
import history from "../utils/history";
import Loading from "../components/Loadings";

class TopNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      isLoading: false,
      showLogout: false,
    };
    this.onLogout = () => {
      this.setState({ isLoading: true }, () => {
        setTimeout(() => {
          this.setState({ isLoading: false }, () => {
            localStorage.removeItem("token");
            // this.props.check()
            history.push("/admin");
          });
        }, 1000);
      });
    };
    this.toggleLogoutModal = this.toggleLogoutModal.bind(this);
  }

  home = (e) => {
    e.preventDefault();

    this.props.history.push("/home");
  };

  toggleLogoutModal() {
    this.setState({
      showLogoutModal: !this.state.showLogoutModal,
    });
  }

  search = (e) => {
    if (e.keyCode === 13) {
      this.props.search({ search: this.state.query });
    }
  };

  render() {
    return (
      <>
        <Navbar expand="sm" className="w-100 h-100 no-gutters top-navbar ">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Nav>
            <Link
              className="nav-link text-decoration-none text-dark"
              to="/dashboard"
            >
              <TiHome size="2rem">Home</TiHome>
            </Link>
            <Link
              className="nav-link text-decoration-none text-dark"
              to="/author"
            >
              <BsPen size="2rem">Author</BsPen>
            </Link>
            <Link
              className="nav-link text-decoration-none text-dark"
              to="/genres"
            >
              <MdLocalMovies size="2rem">Genre</MdLocalMovies>
            </Link>
            <Link
              className="nav-link text-decoration-none text-dark"
              to="/transactions"
            >
              <AiFillDollarCircle size="2rem">Transactions</AiFillDollarCircle>
            </Link>
            <Link
              className="nav-link text-decoration-none text-dark"
              to="/users"
            >
              <FaUserAlt size="2rem">User</FaUserAlt>
            </Link>
          </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex w-100 justify-content-center">
              <Form inline onSubmit={(e) => e.preventDefault()}>
                {/* <BsSearch size="1rem" /> */}
                <FormControl
                  type="text"
                  placeholder="Search"
                  onKeyDown={(e) => this.search(e)}
                  onChange={(e) => this.setState({ query: e.target.value })}
                  className="mr-sm-2"
                />
              </Form>
            </Nav>
            <div className="d-flex mr-3">
              <IoMdLogOut
                color="red"
                size="3rem"
                onClick={this.toggleLogoutModal}
              >
                Logout
              </IoMdLogOut>
            </div>
          </Navbar.Collapse>
        </Navbar>

        <Modal isOpen={this.state.showLogoutModal}>
          <ModalBody className="h4">Do you want to logout?</ModalBody>
          <ModalFooter>
            <Button color="danger">
              <Link className="text-white" onClick={this.onLogout}>
                Yes
              </Link>
            </Button>
            <Button color="secondary" onClick={this.toggleLogoutModal}>
              No
            </Button>
          </ModalFooter>
        </Modal>
        {this.state.isLoading && <Loading />}
      </>
    );
  }
}
export default TopNavbar;
