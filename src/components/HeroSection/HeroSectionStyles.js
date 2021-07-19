import styled from "styled-components";
import { Colors } from "../../constants";

export const HeroContainer = styled.div`
    height: 100vh;
    background: #0c0c0c;
    display: flex;
    z-index: 1;
    position: relative;
    align-items: center;
    justify-content: center;
    padding: 0 30px;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7) 100%;
        z-index: 2;
    }
`

export const HeroBg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    object-fit: cover;
    -o-object-fit: cover;
    background: #232a34;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1100px;
`

export const HeroH1 = styled.h1`
    color: white;
    font-weight: normal;
    font-size: 2rem;
    line-height: 60px;
   

    @media screen and (max-width: 768px){
        font-size: 1.6rem;
        line-height: 40px;
    }
`

export const HeroH1Wrapper = styled.span`
    border-bottom: 5px solid ${Colors.PRIMARY};
`

export const HeroP = styled.p`
    color: white;
    font-weight: normal;
    font-size: 1rem;
    line-height: 20px;
    padding-bottom: 30px;
    padding-top: 30px;
`