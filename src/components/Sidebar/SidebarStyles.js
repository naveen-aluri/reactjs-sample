import styled from "styled-components";
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from "react-scroll";
import { Colors } from "../../constants";
import { FaStar } from 'react-icons/fa'


export const SidebarContainer = styled.aside`
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    position: fixed;
    z-index: 999;
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    top: 0;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
   
`

export const CloseIcon = styled(FaTimes)`
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
    outline: none;
    background: transparent;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(4, 60px);
    }

`

export const SidebarLink = styled(LinkScroll)`
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;

    &:hover {
        color: ${Colors.PRIMARY};
        transition: 0.2s ease-in-out;
    }
`