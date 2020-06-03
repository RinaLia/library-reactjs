import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Hello from'./components/Greetings'
import Login from './pages/Login'
import Register from './pages/Register'
import Detail from './pages/Detail'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/detail" exact component={Detail}/>
          <Route path="/dashboard" exact component={Dashboard}/>
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