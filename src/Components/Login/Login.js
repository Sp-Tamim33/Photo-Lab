import React from 'react';
import './AuthForm.css';

import GoogleLogo from '../../img/google.svg'
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init';

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);



    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className="text-3xl">Login</h1>
                    <form>
                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='email'
                                    id='email'
                                />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label htmlFor='password'>Password</label>
                            <div className='input-wrapper'>
                                <input
                                    type='password'
                                    name='password'
                                    id='password'
                                />
                            </div>

                        </div>
                        <button
                            type='submit' className='auth-form-submit'>
                            Login
                        </button>
                    </form>
                    <p className='redirect'>
                        New to SP's PhotoLab ?{" "}
                        <Link to='/signup' className='underline text-blue-500'>Create New Account</Link>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>or</p>
                        <div className='line-right' />
                    </div>
                    <div className='input-wrapper'>
                        <button onClick={() => signInWithGoogle()} className='google-auth'>
                            <img src={GoogleLogo} alt='' />
                            <p> Continue with Google </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;