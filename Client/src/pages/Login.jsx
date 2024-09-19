/* eslint-disable no-undef */
// import React, { useState } from 'react';
// import Link from 'react-riuter-dom';

import React, { useState } from 'react';
import '../styles/LoginRegister.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


  return (
    <div className="formContainer">

        <div className="smart-header">
            <div className="smart-logo">
                <h2><Link id='smart-logo-h2' to={'/'}>Video Meet</Link></h2>
            </div>
        </div>

        <div className="formWrapper">
            <span className="title">Login</span>
            <form>
                <div className="mb-3">
                    <label htmlFor='exampleInputEmail1' className='form-label'>Email address</label>
                    <input type='email' className='form-control' id="exampleInputEmail1" arial-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor='exampleInputPassword1' className='form-label'>Password</label>
                    <input type='password' className='form-control' id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Login</button>
            </form>
            <p>Not registered? <Link to={'/register'}>Register Now</Link></p>
        </div>
      
    </div>
  )
}

export default Login;
