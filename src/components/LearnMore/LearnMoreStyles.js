import styled from "styled-components";
import { Colors } from "../../constants";

export const LearnMoreContainer = styled.div`
    background: ${Colors.GREY_BG};
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    font-size: 25px;
    @media screen and (max-width:768px){
        font-size: 1rem;
        line-height: 20px;
        font-weight: 700;
        font-style: normal;
        text-align: center;
    }
`

export const Desc = styled.p`
    font-size: 14px;
    color: #3C3C3C;
    text-align: center;
    line-height: 20px;
    padding: 40px 0 25px 0;
    max-width: 550px;
`