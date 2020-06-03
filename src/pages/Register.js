import React, { Component } from 'react'

class Register extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     username:'',
  //     fullname:'',
  //     email:'',
  //     password:''
  //   }

  // }


signup = (e)=>{
  e.preventDefault()
  console.log(this.state.username);
  console.log(this.state.fullname);
  console.log(this.state.email);
  console.log(this.state.password);
  
}

render() {
  return (
    <>
    <div className="register">
        <div className="cover">
          <div className="text">
            <div className="quote">
                Book is a Window <br/> to the World
              </div>
            <div className="watermark">
            Photo by Mark Pan4ratte on Unsplash
            </div>
          </div>
        </div>
        <div className="form">
    <div className="brand">
      <div className="logo">
        <img src={require("../assets/bookshelf.png")} alt="logo"/>
      </div>
    </div>
    <div className="form-register">
      <div className="greetings">
        <div className="title">Register</div>
        <div className="subtitle">Welcome back, <br/> Please Login to Your Account</div>
        <form className="input">
          <label className="username">
            <div>User Name</div>
            <input type="username" />
          </label>
          <label className="fullname">
            <div>Full Name</div>
            <input type="fullname" />
          </label>
          <label className="email">
            <div>Email Address</div>
            <input type="email" />
          </label>
          <label className="password">
            <div>Password</div>
            <input type="password" />
          </label>
          <div className="submit">
            <button type="submit" class="signup">SignUp</button>
            <button type="submit" class="login">Login</button>
          </div>
        </form>
      </div>
    </div>
    <div className="tnc">
      <div className="agreement">By signing up, you agree to Book’s</div>
      <div className="link">
        <a href="#tnc">Terms and Conditions</a>
        <a>&</a>
        <a href="#p">Privacy Policy</a>
      </div>
    </div>
  </div>
          
        

    </div>
   
  
    </>
  )
    }
}

export default Register