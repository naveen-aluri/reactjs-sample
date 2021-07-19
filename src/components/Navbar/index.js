import React, { useState, useEffect } from 'react'
import { PageRoute } from '../../constants';
import Logo from '../../images/logo.svg'
import { MobileMenu, Nav, NavbarContainer, NavItem, NavLogo, NavMenu } from './NavbarStyles';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggleMenu }) => {
    const [scrollNav, setscrollNav] = useState(false);

    const changeScollNav = () => {
        window.scrollY >= 80 ? setscrollNav(true) : setscrollNav(false);
    }

    const scrollToHome = () => {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeScollNav)
        // return () => {
        // }
    }, [])

    return (
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' src={Logo} alt='logo' onClick={scrollToHome} />
                <MobileMenu onClick={toggleMenu} />
                <NavMenu>
                    <NavItem to={PageRoute.Courses}>
                        Courses
                    </NavItem>
                    <NavItem to={PageRoute.CorporateTraining}>
                        Corporate training
                    </NavItem>
                    <NavItem to={PageRoute.ReferralBonus}>
                        Referral Bonus
                    </NavItem>
                    <NavItem to={PageRoute.AboutUs}>
                        About Us
                    </NavItem>
                    <NavItem to='logout'>
                        Log out
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;
