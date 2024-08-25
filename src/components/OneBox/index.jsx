import './index.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import comapnyicon from '/reachinboxicon.png';
import { TbHomeFilled } from "react-icons/tb";
import { MdPersonSearch, MdBarChart, MdViewList } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane, FaInbox, FaChevronDown } from "react-icons/fa";
import oneboxdefault from '/oneboxdefault.png'
const navMenuIcons = [
    {
        id: 1,
        navIcon: <TbHomeFilled size={20} />,
    },
    {
        id: 2,
        navIcon: <MdPersonSearch size={20} />,
    },
    {
        id: 3,
        navIcon: <IoMdMail size={20} />,
    },
    {
        id: 4,
        navIcon: <FaTelegramPlane size={20} />,
    },
    {
        id: 5,
        navIcon: <MdViewList size={20} />,
    },
    {
        id: 6,
        navIcon: <FaInbox size={20} />,
    },
    {
        id: 7,
        navIcon: <MdBarChart size={20} />,
    },
]

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
            <nav className='prime-nav-container'>
                <div className='prime-nav-icon-card'>
                    <img src={comapnyicon} alt='reachinbox' className='company-logo-icon' />
                </div>
                <div className='nav-menu-container'>
                    <ul className='nav-icons-list-card'>
                        {navMenuIcons.map((eachItem) =>
                            <li className='nav-icon-menu' key={eachItem.id}>
                                {eachItem.navIcon}
                            </li>
                        )}
                    </ul>
                </div>
                <div className='prime-nav-icon-card'>
                    <div className='profile-card'>
                        AS
                    </div>
                </div>
            </nav>
            <div className='onebox-main-content-container'>
                <header className="onbox-header-card">
                    <div className="header-left-card">
                        <h1 className="onebox-header-title">Onebox</h1>
                    </div>
                    <div className="header-right-card">
                        {/* Replace with your actual toggle switch component */}
                        <div className="header-toggle-card">
                            <span className="header-toggle-icon"></span>
                        </div>
                        <h2 className="header-workspace">Tim's Workspace <FaChevronDown size={10} /> </h2>
                    </div>
                </header>
                <div className='onebox-main-content'>
                    <div className='onebox-default-message-card'>
                        <img src={oneboxdefault} alt="Email"  />
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