import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Hello from'./components/Greetings'
import Login from './pages/Login'
import Register from './pages/Register'
import Detail from './pages/Detail'
import Dashboard from './pages/Dashboard'
import ListData from './pages/ListData'

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/detail" component={Detail}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/list-data" component={ListData}/>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;


// class App extends Component{ //parents dr greeting
//   render(){
//     return(
//       <>
//       <Register/>
//       </>
//     )
//   }
// }

// export default App