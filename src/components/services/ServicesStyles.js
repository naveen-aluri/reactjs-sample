import styled from "styled-components";

export const ServiceContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 60px 0;

    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding: 20px;
    }
`

export const ServiceWrapper = styled.div`
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`

export const ServiceLogo = styled.img`
    height: 60px;
`

export const ServiceTitle = styled.h1`
    font-size: 1.2rem;
    line-height: 20px;
    padding: 10px 0;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
    }
`

export const ServiceDesc = styled.p`
    font-size: 14px;
    color: #606060;
    text-align: center;
    max-width: 250px;
`