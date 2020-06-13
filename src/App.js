
import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios'

// import Hello from'./components/Greetings'
// import Login from './pages/Login'
import Register from './pages/Register'
import DetailsTry from './pages/DetailsTry'
// import Dashboard from './pages/Dashboard'
import User from './pages/User'
// import History from './pages/Det'
import Login from './pages/Login'
import Genre from './pages/Genre'
import Dashboard from './pages/Dashboard'
import Sidebar from './pages/Sidebar'
import Author from './pages/Author'
import Home from './pages/Home'
import LandingPage from './pages/LandingPages'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      isLogin:false
    }
    this.checkLogin = () => {
      if(localStorage.getItem('token')){
        this.setState({isLogin:true})
      }else{
        this.setState({isLogin: false})
      }
    }
  }

async componentDidMount() {
  // const results = await axios.get('http://localhost:5000/books')
  // const {data} = results.data 
  // this.setState({data})
  this.checkLogin()
  const results = await axios.get('http://localhost:5000/books')
  const {data} = results.data
  this.setState({data})

}


render() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" component={Register}/>
          {/* <Route path="/tes" component={tes}/> */}
          {/* <Route path="/dashboard" component={Dashboard}/> */}
          <Route path="/login" render={(props)=><Login {...props} check={()=>this.checkLogin()}/>} exact/>
          <Route path="/user" component={User}/>
          <Route path="/genre" component={Genre}/>
          <Route path="/detailstry/:id" component={DetailsTry}/>
          <Route path="/dashboard" render={(props)=><Dashboard{...props}/>}exact></Route>
          <Route path="/sidebar" component={Sidebar}/>
          <Route path="/author" component={Author}/>
          <Route path='/home' component={Home}/>
          <Route path='/landingpage' component={LandingPage}/>
        </Switch>
      </BrowserRouter>

    </>
  );
}

}
export default App;


