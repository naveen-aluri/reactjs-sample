import React from 'react'
import { PageRoute } from '../../constants';
import { Button } from '../ButtonStyles';
import { CloseIcon, SidebarContainer, SidebarLink, SidebarMenu } from './SidebarStyles';

const Sidebar = ({ isOpen, toggleMenu }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <CloseIcon onClick={toggleMenu} />
            <SidebarMenu>
                <SidebarLink to={PageRoute.Courses} onClick={toggleMenu}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    Courses
                </SidebarLink>
                <SidebarLink to={PageRoute.CorporateTraining} onClick={toggleMenu}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    Corporate training
                </SidebarLink>
                <SidebarLink to={PageRoute.ReferralBonus} onClick={toggleMenu}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    Referral Bonus
                </SidebarLink>
                <SidebarLink to={PageRoute.AboutUs} onClick={toggleMenu}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                >
                    About Us
                </SidebarLink>
            </SidebarMenu>
            <Button>
                Sign In
            </Button>
        </SidebarContainer>
    )
}

export default Sidebar;
