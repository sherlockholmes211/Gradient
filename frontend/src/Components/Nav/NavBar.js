import React from 'react'
import {Nav,NavLink,NavMenu} from './NavElements'

const NavBar = () => {
    return (
        <Nav>
            {/* <NavLink to='/about'> */}
                {/* <img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt='logo' /> */}
                <h1 style={{fontFamily:"Courier New, monospace"}}>Tangent</h1>
            {/* </NavLink> */}
            <NavMenu>
                <NavLink to='/Market' activeStyle>about</NavLink>
                <NavLink to='/Portfolio' activeStyle>capabilities</NavLink>
                <NavLink to='/Withdraw' activeStyle>work</NavLink>
                <NavLink to='/about' activeStyle>ideas</NavLink>
                <NavLink to='/contact' activeStyle>careers</NavLink>
                <NavLink to='/contact' activeStyle>contact</NavLink>

            </NavMenu>
            {/* <NavBtn>
                <NavBtnlink to='/about' activeStyle>Login</NavBtnlink>
            </NavBtn> */}
        </Nav>
    )
}

export default NavBar;
