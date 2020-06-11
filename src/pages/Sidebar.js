import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

import { Link } from 'react-router-dom';
import profil from '../assets/profil.png'

class Sidebar extends Component {
    render(){
        return(
            <>
            <Nav className="d-none d-md-block sidebar bg-light shadow">
                <div className="avatar-img mt-3 mr-3 ml-3">
                    <img src={profil} alt="avatar"/>
                    <h1>Nikki</h1>
                </div>
                <Nav.Item className="mt-9">
              <Link className="bg-warning nav-link text-decoration-none text-white" to="/dashboard"> Dashboard</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link className="bg-warning nav-link text-decoration-none text-white" to="/author"> Author</Link>
                </Nav.Item>
                <Nav.Item>
                 <Link className="bg-warning nav-link text-decoration-none text-white" to="/genre"> Genre</Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Link className="bg-info nav-link text-decoration-none text-white" to="/transaction"> Transaction</Link>
                </Nav.Item> */}
                <Nav.Item>
                <Link className="bg-warning nav-link text-decoration-none text-white" to="/user"> User</Link>
                </Nav.Item>
                {/* <Nav.Item>
                <Link className="bg-info nav-link text-decoration-none text-white" to="/status"> Status</Link>
                </Nav.Item> */}
                <Nav.Item>
                <Link className="bg-warning nav-link text-decoration-none text-white" to="/logout"> Logout</Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </>
        )
    }
}
export default Sidebar