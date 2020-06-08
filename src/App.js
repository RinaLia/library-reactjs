// import React, {Component} from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import axios from 'axios'

// import Hello from'./components/Greetings'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import Detail from './pages/Detail'
// import Dashboard from './pages/Dashboard'
// import ListData from './pages/ListData'
// import Author from './pages/Author'
// import Genre from './pages/Genre'
// import Dash from './pages/Dash'

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state ={
//       data:[]
//     }
//   }
// }

// async componentDidMount(){
//   const results = await axios.get('http://localhost:5000/books')
//   const {data} = results.data
//   this.setState({data})
//   console.log(data);
  
// }

// function App () {
//   return (
//     <>
    
//       <BrowserRouter>
//         <Switch>
//           <Route path="/" exact component={Login}/>
//           <Route path="/register" component={Register}/>
//           <Route path="/detail" component={Detail}/>
//           <Route path="/dashboard" component={Dashboard}/>
//           <Route path="/list-data" component={ListData}/>
//           <Route path="/author" component={Author}/>
//           <Route path="/genre" component={Genre}/>
//           <Route path="/dash" component={Dash}/>

//         </Switch>
//       </BrowserRouter>
      
      /* {this.state.data.map((lis_book, index) => (
      <BrowserRouter>
        <Switch>
        <Route path={'/details/'+lis_book.id} /> 
        </Switch>
      </BrowserRouter>
      ))} */
//     </>
//   );
// }


// export default App;

import React, {Component} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// import Hello from'./components/Greetings'
import Login from './pages/Login'
import Register from './pages/Register'
import Detail from './pages/Detail'
import Dashboard from './pages/Dashboard'
import ListData from './pages/ListData'
import Det from './pages/Det'
import Author from './pages/Author'

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
          <Route path="/author" component={Author}/>
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;


