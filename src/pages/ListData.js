import React, {Component} from 'react'
import axios from 'axios'
import {Container,Row, Col, Table, Button} from 'reactstrap'


class ListData extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }
  async componentDidMount(){
    const results = await axios.get('http://localhost:4000/api/v1/books')
    const {data} = results
    this.setState(data)
  }
  render(){
    return(
      <>
        <Container>
          <Row>
            <Col md={3}>
              <Button onClick={()=>this.setState({data: []})}>Reset</Button>
            </Col>
            <Col md={9}>
              {this.state.data.length !== 0 &&(
                <Table bordered>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>title</th>
                      <th>description</th>
                      <th>image</th>
                      <th>author</th>
                      <th>genre</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((user, index) => (    
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.title}</td>
                      <td>{user.description}</td>
                      <td>{user.image}</td>
                      <td>{user.author}</td>
                      <td>{user.genre}</td>
                      <td>{user.status}</td>
                    </tr>
                    ))}
                  </tbody>
                </Table>
              )}
              {this.state.data.length===0 &&(
                <h1>Data is not available!</h1>
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default ListData