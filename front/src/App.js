import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {BrowserRouter ,Route ,Switch ,Router} from 'react-router-dom'
import Home from './components/Home';
import AddNews from './components/AddNews';


function App() {
  return (
    
     <BrowserRouter>
     <div className="App">
       <Switch>
         <Route exact path='/' component={Home}></Route>
         <Route  path='/add' component={AddNews}></Route>




       </Switch>
     
     </div>
     </BrowserRouter>
      
  
    
  );
}

export default App;
