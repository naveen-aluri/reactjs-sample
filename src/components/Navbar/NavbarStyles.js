import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";
import { FiMenu } from 'react-icons/fi';


export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 140px;
    margin-top: -140px;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 768px){
        height: 80px;
        margin-top: -80px;
    }

`

export const NavbarContainer = styled.div`
    height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    width: 100%;
    z-index: 1;

    @media screen and (max-width: 768px){
        height: 80px;
        padding: 0 40px;
    }
`
export const NavLogo = styled.img`
    padding: 10px 0;
    cursor: pointer;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;

    @media screen and (max-width: 912px){
        display: none;
    }
`

export const NavItem = styled(LinkScroll)`
    color: white;
    margin-left: 30px;
    cursor: pointer;
`

export const MobileMenu = styled(FiMenu)`
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        color: white;
        cursor: pointer;
        font-size: 1.8rem;
        top: 0;
        right: 0;
        position: absolute;
        transform: translate(-100%, 80%);
    }
    
`