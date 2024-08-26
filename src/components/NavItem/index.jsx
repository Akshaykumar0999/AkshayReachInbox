import './index.css'
import { NavLink } from 'react-router-dom'

const NavItem = ({onClickchangeNav, details, isActive}) => {
    const {navIcon, navLink, id} = details
    const handleNav = () => {
        onClickchangeNav(id)
    }
    const navStyles = ({isActive}) => {
        return{
            background: isActive ? '#2F3030' : '',
            color: isActive ? '#ffffff': '#AEAEAE',
            textDecoration: isActive ? 'none' : '',

        }
    }
    return (
        <li className='nav-icon-menu'  onClick={handleNav}>
            <NavLink to={navLink} style={navStyles}>
                {navIcon}
            </NavLink>
        </li>
    )
}

export default NavItem