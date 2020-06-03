import React, { Component } from 'react'
// import logo from '../assets/bookshelf.png'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',

    }
  }

  login = (e) =>{
    e.preventDefault()
    console.log(this.state.email);
    console.log(this.state.password);
    
    
  }


  render() {
    return (
      <>
        <div className="login">
        <div className="cover">
          <div className="text">
            <div className="quote">
              Book is a Window <br /> to the World</div>
            <div className="watermark">
              Photo by Mark Pan4ratte on Unsplash
      </div>
          </div>
        </div>
        <div className="form">
          <div className="brand">
          {/* </div>
            <div className="logo">
            <img src="bookshelf.png" alt="logo">
          </div>     */}
          </div>
          <div className="form-login">
            <div className="greetings">
              <div className="title">Login</div>
              <div className="subtitle">Welcome back, <br /> Please Login to Your Account</div>
              <form onSubmit={this.login} className="input">
                <label className="email">
                  <div>Email Address</div>
                  <input onChange={e => this.setState({email: e.target.value})} type="email" />
                </label>
                <label className="password">
                  <div>Password</div>
                  <input onChange={e => this.setState({password: e.target.value})} type="password" />
                </label>
                <div className="option">
                  <label className="remember">
                    <input type="checkbox" />
                    <span>Remember Me</span>
                  </label>
                  <div className="forgot">
                    <a href="#forgot">Forgot Password</a>
                  </div>
                </div>
                <div className="submit">
                  <button onClick={this.login} type="submit" className="login">Login</button>
                  <button type="submit" class="signup">SignUp</button>
                </div>
              </form>
            </div>
          </div>
          <div className="tnc">
            <div className="agreement">By signing up, you agree to Book’s</div>
            <div className="link">
              <a href="#tnc">Terms and Conditions</a>
              {/* <a>&</a> */}
              <a href="#p">Privacy Policy</a>
            </div>
          </div>
        </div>
        </div>
        
      </>

    )
  }
}

export default Login