import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import LogIn from './Pages/Login';
import LinkUp from './Pages/LinkUp';


function App() {
  return(
   <div>
      <BrowserRouter>
     
        <Routes>
          <Route path='/*' element={<LinkUp/>}/>
          <Route path= '/register' element= {<Register/>}/>
          <Route path= '/login' element= {<LogIn/>}/>
        </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App