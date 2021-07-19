import styled from "styled-components";
import { Colors } from '../../constants/index';

export const BenefitsContainer = styled.div`
    background: ${Colors.GREY_BG};
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BenefitsH1 = styled.h2`
    font-size: 1rem;
    line-height: 21px;
    font-weight: 700;
    padding-bottom: 35px;
`

export const BenefitsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px 30px;
    max-width: 800px;

    @media screen and (max-width: 768px){

    }
`

export const Benefit = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export const BWrap = styled.div`
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    @media screen and (max-width: 768px){
        padding: 0px;
    }
`

export const BImage = styled.img`
    height: 40px;
`

export const BTitle = styled.h3`
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    padding: 7px 0 4px 0;
`

export const BDesc = styled.p`
    font-size: 14px;
    line-height: 20px;
    font-weight: normal;
    color: #606060;

`