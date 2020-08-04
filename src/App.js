import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

import axios from "axios";

import LoginAdmin from "./pages/LoginAdmin";
import LoginUser from "./pages/LoginUser";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Details from "./pages/Details";
// import LoginAdmin from './pages/LoginAdmin'
import Sidebar from "./pages/Sidebar";
import Navbar from "./pages/Navbar";
import Author from "./pages/admin/Author";
import Genres from "./pages/admin/Genre";
import Users from "./pages/admin/Users";
import Transactions from "./pages/admin/Transactions";
import history from "./utils/history";
import DashUser from "./pages/DashUser";
import MainDash from "./pages/MainDash";
import DetailsUser from "./pages/DetailsUser";
import store from "./redux/store";
import { Provider } from "react-redux";
// import ListBook from './pages/ListBook'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      data: [],
    };
    this.checkLogin = () => {
      if (localStorage.getItem("token")) {
        this.setState({ isLogin: true });
      } else {
        this.setState({ isLogin: false });
      }
    };
  }
  async componentDidMount() {
    // this.checkLogin();
    // const results = await axios.get("http://localhost:5000/books");
    // const { data } = results.data;
    // this.setState({ data });
    // console.log(data);
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <Router history={history}>
              {/* <Navbar isLogin={this.state.isLogin} check={()=>this.checkLogin()} /> */}
              <Switch>
                {/* <Route path='/login' exact component={Login} /> */}
                <Route path="/" exact component={MainDash} />
                <Route
                  path="/home"
                  exact
                  render={(props) => <DashUser {...props} />}
                />
                <Route
                  path="/admin"
                  render={(props) => (
                    <LoginAdmin {...props} check={() => this.checkLogin()} />
                  )}
                  exact
                />
                <Route
                  path="/user"
                  render={(props) => (
                    <LoginUser {...props} check={() => this.checkLogin()} />
                  )}
                  exact
                />
                <Route
                  path="/dashboard"
                  render={(props) => <Dashboard {...props} />}
                  exact
                ></Route>
                <Route path="/register" exact component={Register} />
                {/* <Route path='/home' component={Home} /> */}
                <Route path="/details/:id" exact component={Details} />
                <Route path="/home/:id" exact component={Home} />
                <Route path="/detailsuser/:id" exact component={DetailsUser} />
                {/* <Route path='/adminlogin' exact component={LoginAdmin} /> */}
                <Route path="/sidebar" exact component={Sidebar} />
                <Route path="/navbar" exact component={Navbar} />
                <Route path="/author" exact component={Author} />
                <Route path="/genres" exact component={Genres} />
                <Route path="/users" exact component={Users} />
                <Route path="/transactions" exact component={Transactions} />
                {/* <Route path='/list-book'  component={ListBook} /> */}
              </Switch>
            </Router>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
