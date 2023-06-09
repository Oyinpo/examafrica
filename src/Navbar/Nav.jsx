import React, {useState} from 'react';
import logo from '../assets/exams 2.png'
import { Link } from 'react-router-dom';
import '../styles/Nav.css'
import {GoThreeBars} from 'react-icons/go'
import {FaRegTimesCircle} from 'react-icons/fa'

const Nav = () => {
    const [mobile, setMobile]= useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }

    return(
        <div className='exam'>
            <div className='logo'>
                <Link to="/"><img src={logo}/></Link>
            </div>
           <div className= {mobile? "MobileLink":'link-in'}>
                <div className= 'pages'>
                    <Link to="/blog" onClick={handleClose}>Blog</Link>
                    <Link to="/faq" onClick={handleClose}>FAQ</Link>
                    <Link to="/contact" onClick={handleClose}>Contact Us</Link>
                </div>
                <div className='access'>
                   <Link to="/register" onClick={handleClose}> <button style={{background: "#1178FF", color: 'white', borderRadius: '4px', border: "none"}}>Register</button></Link>
                   <Link to="/login" onClick={handleClose}><button style={{background: "white", color: '#1178FF', borderRadius: '4px', borderColor: "#1178FF"}}>Log In</button></Link>
                </div>
           </div>
           <div className='menu-bars'>
                {mobile? <FaRegTimesCircle className='times' onClick={handleMobile}/>
                :
                <GoThreeBars className='bars' onClick={handleMobile}/>
                }
            </div>
        </div>
    )

}

export default Nav