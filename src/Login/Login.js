import React from 'react';
import { Form, Button } from 'react-bootstrap'
import style from './Login.module.css';
import Spaceship from '../images/undraw_To_the_stars_qhyy.svg';
import Flag from '../images/undraw_Astronaut_xko2.svg'
const Login = () => {
  return (
    <div className={`${style.wrapper}`}>
      <div className='row h-100'>
        <div className={`col-lg-4 pr-0`}>
    <div className={`row w-100 ${style.left}`}>
      <div className="container">
        <div className={`col-md-12 h-100 w-100 d-flex justify-content-center align-items-center text-center ${style.banner}`}>
          <div>
            <div className={` ${style.left_intro}`}>
                <p className="font-weight-bold text-left">Welcome to Star Wars<br/> the Clone Wars</p>
            </div>
            <div className='pt-5'>
              <img src={Spaceship}/>
            </div>
      </div>
          </div>
        </div>
        <div className={`${style.black_box}`}>

        </div>
    </div>
  
  </div>
       
        <div className='col-lg-4 p-0'>
        <div className={`row w-100 ${style.mid}`}>
      <div className="container">
        <div className={`col-md-12  w-100 d-flex justify-content-center align-items-center text-center ${style.mid_banner}`}>
          <div>
          <div className={`pb-4 ${style.mid_intro}`}>
                <p className="font-weight-bold text-left">Sign in to continue to<br/> your account.</p>
            </div>

            <div className={`pt-3 ${style.form}`}>
            <Form>
  <Form.Group className='pb-3'>
    <Form.Label className='text-left d-flex'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Email address" className=''/>
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label className='text-left d-flex'>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter strong password" />
  </Form.Group>
  
  <div className='pt-3'>
  <Button variant="dark" type="submit" block > 
    Sign in
  </Button>
  </div>
</Form>
            </div>
           
      </div>
          </div>
        </div>
       
    </div>
  
        </div>
     
        <div className={`col-lg-4 p-0`}>
    <div className={`row w-100 ${style.right}`}>
      <div className="container">
        <div className={`col-md-12 h-100 w-100 d-flex justify-content-end align-items-start text-center ${style.banner}`}>
          <div>
            <div className={`pt-5 ${style.right_intro}`}>
                <img src={Flag}/>
            </div>
            
      </div>
          </div>
        </div>
       
    </div>
  
  </div>
       
      </div>
    </div>
  )
} 

export default Login;