import styled from "styled-components";
import { Colors } from '../../constants/index'

export const InfoContainer = styled.div`
    background: ${Colors.GREY_BG};
    padding: 30px;
    align-items: center;
    justify-content: center;
    justify-items: center;
    
`

export const InfoWrapper = styled.div`
    max-width: 1000px;
    align-content: center;
    margin-left: auto;
    margin-right: auto;
`

export const InfoH1 = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2rem;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        font-weight: 700;
        line-height: 22px;
    }
`

export const InfoP = styled.p`
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    text-align: center;
    padding: 15px 0;
    max-width: 550px;
    color: #3C3C3C;
    margin-left: auto;
    margin-right: auto;
`

export const InfoP1 = styled.p`
    color: white;
    font-size: 1rem;
    font-weight: normal;
    line-height: 34px;
    text-align: center;
    padding: 15px 0;
`

export const InfoGreyBlock = styled.div`
    background: #444444;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%; 
    padding: 80px;

    @media screen and (max-width:768px){
        padding: 0px;
    }
`

export const DataWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:768px){
        padding:  40px 40px 3px 30px; 
    }
`

export const ButtonWrap = styled.div`
    background: #4E4E4E;
    width: 100%;
    padding: 10px;
    display: none;

    @media screen and (max-width: 768px){
        display: block;
    }
`

export const InfoLogo = styled.img`

`
export const ButtonWrapDesk = styled.div`
    @media screen and (max-width:768px){
        display: none;
    }
`