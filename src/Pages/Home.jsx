import React from 'react';
import student from '../assets/Rectangle 902.png'
import book from '../assets/Rectangle 901.png'
import "../styles/Home.css"
import guy from '../assets/Group 1554.png'
import pasque from '../assets/Group 14.png'
import mock from '../assets/Group 15.png'
import track from '../assets/Group 16.png'
import afford from '../assets/Group 17.png'
import cate from '../assets/Group 1674.png'
import sepresu from '../assets/Group 1675.png'
import attend from '../assets/Group 1676.png'
import joy from '../assets/Group 1245.png'
import web from '../assets/Group 14(1).png'
import store from '../assets/Group 15(1).png'
import play from '../assets/Group 16(1).png'
import tele from '../assets/Group 17(1).png'
import whats from '../assets/Group 18(1).png'
import frame from '../assets/Group 1560.png'
import exma from '../assets/exams 1.png'
import socials from '../assets/Group 1283.png'
import {BiChevronsRight} from 'react-icons/bi'
import { Link } from 'react-router-dom';


const Home = () => {


    return(
        <div>
            <div>
                
                <div className='guy-exam'>
                        <div className='ppe-exam'>
                            <div className='practice'>
                                <h1 style={{color: "#002099", fontFamily: 'Clash Display Variable'}}>Practice</h1>
                                <img src={student} width={'120kb'} height={'100kb'}/>
                            </div>
                            <div className='prepare'>
                                <img src={book} width={'120kb'} height={'120kb'}/>
                                <h1 style={{color: "#002099", fontFamily: 'Clash Display Variable'}}>Prepare</h1>
                            </div>
                            <div>
                                    <div className='excel'>
                                        <h1 style={{color: "#002099", fontFamily: 'Clash Display Variable'}}>Excel</h1>
                                        <div className='wassce'>
                                            <div className='waec'>
                                                <button>JAMB - <br /> UTME</button>
                                                <button>WAEC - <br /> SSCE</button>
                                                <button>WAEC - <br /> GCE</button>
                                            </div>
                                            <div className='neco'>
                                                <button style={{width: "200px", borderRadius: "16px"}}>COMMON ENTRANCE - <br />EXAM</button>
                                                <button style= {{width: "90px", borderRadius: "16px"}}>NECO</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='wel-get'>
                                    <h3>Welcome to the Exams.Africa, we will open the world of knowlegde for you! <br /> This is the latest online examination system you will ever need to attain success.</h3>
                                    <div className='get-start'>
                                        <button style={{background: "#1178FF", color: 'white', borderRadius: '2px', border: "none", width:'177px',height:'40px',fontFamily: 'Mulish sansSerif' }}>Get Started</button>
                                        <button style={{background: "white", color: '#1178FF', borderRadius: '2px', borderColor: "#1178FF", width:'177px',height:'40px',fontFamily: 'Mulish sansSerif'}}>Start Practicing</button>    
                                     </div>            
                            </div>
                        </div>
                        <div className='guy'>
                            <img src={guy} width={"450kb"} height={"550px"} />
                        </div>
                </div>
              <div className='past-mock'>
                    <div className='inner-mock'>
                            <div className='pasque'>
                                <img src={pasque} />
                            </div>
                            <div className='mockex'>
                                <img src={mock}  />
                            </div>
                            <div className='trackac'>
                                <img src={track}  />
                            </div>
                            <div className='affor'>
                                <img src={afford} width={"180kb"} />
                            </div>
                    </div>
              </div>
              <main>
                <div>
                     <div className='best'>
                        <h3>Why ExaLab Is Best?</h3>
                     </div>
                     <div className='chocate'>
                        <div className='cate'>
                            <img src={cate} width={"300px"} />
                        </div>
                        <div className='chose'>
                            <h2>Choose Your Category</h2>
                            <p>Choose the exam category based on your subject. This helps you differentiate between subjects that are essential for studying a particular course and subjects.</p>
                            <div className='line'></div>
                        </div>
                     </div>
                     <div className='prefer'>
                        <div className='sele'>
                            <h2>Select Preferable Subject</h2>
                            <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular career path or not.</p>
                            <div className='line1'></div>
                        </div>
                        <div className='lappy'>
                            <img src={sepresu} width={'350px'}/>
                        </div>
                     </div>
                     <div className='attexam'>
                        <div className='attend'>
                            <img src={attend} width={'250px'}/>
                        </div>
                        <div className='attex'>
                           <h2>Attend Examination</h2>
                            <p>Through our activities and technology, we are able to provide reliable data across several African products.</p>
                            <div className='line2'></div>
                        </div>
                    </div>
                    <div className='joyful'>
                        <div className='smile'>
                            <h2>Select Preferable Subject</h2>
                            <p>The aim of this to help you see things more clearly and get a good impression of the possible options, whether you have your heart set on a particular career path or not.</p>
                        </div>
                        <div className='joy'>
                            <img src={joy} width={'300px'} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='app'>
                        <div className='avail'>
                            <h2>Available On These Platforms</h2>
                        </div>
                        <div className='app-home'>
                            <div className='web'>
                                <img src={web} />
                            </div>
                            <div className='store'>
                                <img src={store}  />
                            </div>
                            <div className='play'>
                                <img src={play}  />
                            </div>
                            <div className='tele'>
                                <img src={tele}  />
                            </div>
                            <div className='whats'>
                                <img src={whats} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='popular'>
                    <div>
                        <h2 style={{color: '#0B2239'}}>Most Popular Subjects</h2>
                    </div>
                    <div className='precise'>
                        <p>All your past questions all in one place. This is your one stop hub for through and precise</p>
                        <p>exams preparations. </p>
                    </div>
                </div>
                <div>
                    <div className='line-1'>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>
                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>
                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>
                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>
                        </div>
                    </div>
                    <div className='line-1'>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                    </div>
                    <div className='line-1'>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                        <div className='neco-1'>
                            <h4>NECO/FUTHER MATHEMATICS</h4>
                            <h6>Neco-Futher Maths</h6>
                            <p style={{color: '#0172DA'}}>Past Questions          
                            <BiChevronsRight/>
                            </p>                        </div>
                    </div>
                    
                    <div className='afriplat'>
                        <div>
                            <h2 style={{color: '#0B2239'}}>Use the Exam.Africa </h2>
                            <h2 style={{color: '#0B2239'}}>Platform the right way</h2>
                        </div>
                        <div>
                            <p>Learn the essential ways to successfully maximize the Platform for a exam success. </p>
                        </div>
                    </div>
                    <div>
                        <div className='frame'>
                            <img src={frame} width={"1000kb"} />
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </main>
            <footer>
                <div className='foot'>
                    <div className='main-foot'>
                        <div>
                            <h4>Main</h4>
                            <Link to="/">Home</Link>
                         </div>
                        <div className='fofaq'>
                            <h4>Need Help</h4>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/faq">FAQ</Link>
                        </div>
                        <div>
                            <h4>Features</h4>
                            <h6>Categories</h6>
                            <h6>Past Questions</h6>
                            <h6>Subjects</h6>
                        </div>
                        <div>
                            <h4>Informative</h4>
                            <Link to="/blog">Blog</Link>
                        </div>
                    
                    </div>
                    <div className='footex'>
                        <img src={exma} />
                    </div>
                    <div className='know'>
                        <h4>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! With our easy online exam site, you will set up your own engaging exams that fit any kind of difficulty level and be a learning expert.</h4>
                        <div className='socials'>
                            <img src={socials} />
                         </div>
                    </div>
                    <div style={{backgroundColor: "#00070F"}}>
                        
                    </div>
                </div>
                <div className='rights'>
                    <h5> © 2022 All Rights reserved by Exams Africa</h5>
                </div>
            </footer>
            </div>
        </div>
           
    )
}

export default Home