import React from 'react';
import '../styles/LogIn.css'
import xafric from '../assets/exams 2.png'
import right from '../assets/Group 1477.png'
import left from '../assets/Group 1546.png'
// import {AiOutlineEye} from 'react-icons/ai'
import { Link } from 'react-router-dom';


 const LogIn = () => {
    return(
        <div className='login'>
           <div className='log-in'>
                <div>
                <Link to="/"><img src={xafric} /></Link>
                </div>
                <div className='dont'>
                    <h6>Don’t have an account? Signup</h6>  <Link to="/register"><h6  style={{color: "#1178FF"}}> here</h6></Link>
                </div>
           </div>
           <div className='logco'>
                    <h1 style={{color: "#00070F"}}>Login To <br /> Continue</h1>
            </div>
            <div className='passleg'>
                <div className='usepass'>
                    <div className='uselog'>
                        <h3>Username</h3>
                        <input type="text" style={{width:'400px',height:'50px'}}/>
                    </div>
                    <div className='passlog'>
                        <h3>Password</h3>
                        <input type="password" placeholder='*********' style={{width:'400px',height:'50px'}}/>
                        {/* <AiOutlineEye/> */}
                        <div className='forgot'><a href="#">Forgot Password?</a></div>
                    </div>
                    <button className='lognow'>Login Now</button>
                </div>
                <div className='logdown'>
                         <div>
                             <img src={right} />
                        </div>
                        <div>
                            <img src={left} />
                        </div>
                </div>
            </div>
        </div>
    )
 }



export default LogIn 