import React from 'react'
import comapnyLogo from '/reachinbox.png'
import google from '/google-icon.png'
import './index.css'
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate



const LoginPage = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const login = useGoogleLogin({
        onSuccess: (tokenResponse) => {
            console.log(tokenResponse);
            // Store the token in localStorage
            localStorage.setItem('googleToken', JSON.stringify(tokenResponse));
            // Navigate to the home page
            navigate('/onebox');
        },
        onError: (error) => {
            console.error('Login failed:', error);
        },
      });
    return (
        <div className='login-main-container'>
            <header className='login-page-header-card'>
                <img src={comapnyLogo} alt='reachbox' className='reachbox-company-logo' />
            </header>
            <main className='login-page-main-content-card'>
                <div className='login-page-card'>
                    <div className='lp-first-card'>
                        <h3 className='lp-title-card'>Create a new account</h3>
                        <button className='lp-acount-button-card' onClick={() => login()}>
                            <img src={google} alt='google-icon' className='google-icon' />
                            <p className='lp-account-button-title'>Sign Up with Google</p>
                        </button>
                        <div className='lp-acount-sign-in-button-card'>
                            <button className='lp-create-account-button-card'>Create an account</button>
                            <p className='lp-des-card'>Already have an account?<span className='lp-sign-in-span-title'>Sign In</span></p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='footer-card'>
                <h5 className='footer-card-des'>© 2023 Planaire. All rights reserved.</h5>
            </footer>
        </div>
    )
}

export default LoginPage