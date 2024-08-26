import './index.css'
import { TbHomeFilled } from "react-icons/tb";
import { MdPersonSearch, MdBarChart, MdViewList } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaTelegramPlane, FaInbox } from "react-icons/fa";
import companyicon from '/reachinboxicon.png';
import NavItem from '../NavItem';
import { useState } from 'react';


const navMenuIcons = [
    {
        id: 1,
        navIcon: <TbHomeFilled size={20} />,
        navLink: '/onebox',
    },
    {
        id: 2,
        navIcon: <MdPersonSearch size={20} />,
        navLink: '/',
    },
    {
        id: 3,
        navIcon: <IoMdMail size={20} />,
        navLink: '/',
    },
    {
        id: 4,
        navIcon: <FaTelegramPlane size={20} />,
        navLink: '/',
    },
    {
        id: 5,
        navIcon: <MdViewList size={20} />,
        navLink: '/',
    },
    {
        id: 6,
        navIcon: <FaInbox size={20} />,
        navLink: '/list',
    },
    {
        id: 7,
        navIcon: <MdBarChart size={20} />,
        navLink: '/',
    },
]
const OneboxNav = () => {
    const [activeNav, setActNav] = useState(navMenuIcons[0].id)
    const onClickchangeNav = (id) => {
        setActNav(id)
    }
    return (
        <div className='prime-nav-container'>
            <div className='prime-nav-icon-card'>
                <img src={companyicon} alt='reachinbox' className='company-logo-icon' />
            </div>
            <nav className='nav-menu-container'>
                <ul className='nav-icons-list-card'>
                    {navMenuIcons.map((eachItem) =>
                        <NavItem key={eachItem.id} details={eachItem} onClickchangeNav={onClickchangeNav} isActive={eachItem.id === activeNav}  />
                    )}
                </ul>
            </nav>
            <div className='prime-nav-icon-card'>
                <div className='profile-card'>
                    AS
                </div>
            </div>
        </div>
    )
}

export default OneboxNav