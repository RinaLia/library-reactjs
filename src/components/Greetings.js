import React, {Component} from 'react'

class Greetings extends Component{ //child
  constructor(props){ 
    super(props) //inisialator, 
    this.state = {
      user: this.props.name || "User"
    }
  }
  render(){
    return(
      <>
      Hi {this.state.user}, Welcome to our website

      </>
    )
  }
}



export default Greetings