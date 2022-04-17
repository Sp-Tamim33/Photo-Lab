import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLogo from '../../img/google.svg'

const Signup = () => {
    return (
        <div>
            <div className='auth-form-container '>
                <div className='auth-form'>
                    <h1 className="text-3xl">Sign Up</h1>
                    <form>
                        <div className='input-field'>
                            <label htmlFor='name'>Name</label>
                            <div className='input-wrapper'>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                />
                            </div>
                        </div>

                        <div className='input-field'>
                            <label htmlFor='email'>Email</label>
                            <div className='input-wrapper'>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
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
                                    required
                                />
                            </div>

                        </div>
                        <div className='input-field'>
                            <label htmlFor='confirm-password'>Confirm Password</label>
                            <div className='input-wrapper'>
                                <input
                                    type='password'
                                    name='confirmPassword'
                                    id='confirm-password'
                                />
                            </div>
                        </div>
                        <button
                            type='submit'
                            className='auth-form-submit'>
                            Sign Up
                        </button>
                    </form>
                    <p className='redirect'>
                        Already have an account?{" "}
                        <Link to='/login' className='underline text-blue-500'>Login</Link>
                    </p>
                    <div className='horizontal-divider'>
                        <div className='line-left' />
                        <p>or</p>
                        <div className='line-right' />
                    </div>
                    <div className='input-wrapper'>
                        <button
                            className='google-auth'>
                            <img src={GoogleLogo} alt='' />
                            <p> Continue with Google </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;