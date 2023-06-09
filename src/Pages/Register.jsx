import React from 'react';
import orange from '../assets/orange.png'
import '../styles/Register.css'
import {GrCheckbox} from 'react-icons/gr'
import right from '../assets/Group 1477.png'
import left from '../assets/Group 1546.png'
import { Link } from 'react-router-dom';


 const Register = () => {
    return(
        <div>
           <div className='reg-nav'>
                <Link to="/"><img src={orange} /></Link>
                <div className='reg-log'>
                    <span> Already have an account?</span> <br /><br /><Link to="/login"><span style={{color: "#1178FF"}}> Login here</span></Link>
                </div>
            
            </div> 
           <div className='create-file'>
                <div className='creat'>
                    <h1 style={{color: "#00070F"}}>Create An Account</h1>
                </div>
               <div className='fill'>
                        <div className='Fila'>
                            <div className='first'>
                                <h3>First Name</h3>
                                <input type="text"  style={{width:'180px',height:'40px'}}/>
                            </div>
                            <div className='last'>
                                <h3>Last Name</h3>
                                <input type="text" style={{width:'180px',height:'40px'}}/>
                            </div>
                        </div>
                    <div className='user'>
                        <h3>Username</h3>
                        <input type="text" style={{width:'380px',height:'40px'}}/>
                        <h3>Email Address</h3>
                        <input type="text" style={{width:'380px',height:'40px'}}/>
                        <h3>Mobile Number</h3>
                        <span>
                            <select name="CountryCode" aria-label='country' style={{width:'60px',height:'40px'}}>
                                <option value="Nig" >+234</option>
                            </select>
                        </span>
                        <input type="number" value={"+234"} style={{width:'320px',height:'40px'}}/>
                        <h3>Country</h3>
                        <input type="text"  style={{width:'380px',height:'40px'}}/>
                    </div>
                    <div className='Fila'>
                        <div>
                            <h3 >Password</h3>
                            <input type="text" style={{width:'180px',height:'40px'}}/>
                        </div>
                        <div className='last'>
                            <h3>Confirm Password</h3>
                            <input type="text" style={{width:'180px',height:'40px'}}/>
                        </div>
                    </div>
                    <div className='tick'>
                        <GrCheckbox/>
                        <h6>By signing up, you’re agree to our <a href="#">terms & conditions</a> and privacy policy</h6>
                    </div>
                    <button className='reg-now'>Register Now
                    </button>
                    <div className='leg'>
                         <div>
                             <img src={right} />
                        </div>
                        <div>
                            <img src={left} />
                        </div>
                    </div>
               </div>
           </div>
        </div>
    )
 }



export default Register 