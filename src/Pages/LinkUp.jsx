import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from '../Navbar/Nav';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import Faq from './Faq';


const LinkUp = () =>{
    return(
            <div>
                   <Nav/>

              <Routes>
                <Route path= '/' element= {<Home/>}/>
                <Route path= '/blog' element= {<Blog/>}/>
                <Route path= '/Contact' element= {<Contact/>}/>
                <Route path= '/faq' element= {<Faq/>}/>
              </Routes>
            </div>
    )
}

export default LinkUp 