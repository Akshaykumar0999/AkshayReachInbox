import './index.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import nomessage from '/no-message.svg'

import OneboxHeader from '../OneboxHeader';
import OneboxNav from '../OneboxNav';


const OneBox = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Remove the token from localStorage (or wherever you're storing it)
        localStorage.removeItem('googleToken'); // Adjust key name based on your storage key
        // Navigate back to the login page
        navigate('/login');
    };
    return (
        <div className='onebox-main-container'>
            <OneboxNav />
            <div className='onebox-main-content-container'>
                <OneboxHeader />
                <div className='onebox-main-content'>
                    <div className='onebox-default-message-card'>
                        <img src={nomessage} alt="Email"  />
                        <h3 className='onebox-default-message'>It's the beginning of a legendary pipeline</h3>
                        <p className='onebox-default-message-des'>When you have inbound E-mails</p>
                        <p className='onebox-default-message-des'>you'll see them here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneBox