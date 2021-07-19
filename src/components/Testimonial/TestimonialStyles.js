import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { Colors } from '../../constants';

export const TestimonialContainer = styled.div`
    padding: 20px;
`

export const TCard = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 7px 18px rgba(231, 231, 231, 0.767592);
    border-radius: 8px;
    padding: 30px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;

`

export const TWrapper = styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;
    padding: 20px 0;
    margin-top: 70px;
    ::-webkit-scrollbar {
        width: 0px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
`
export const ReviewCard = styled.div`
    background: ${Colors.GREY_BG};
    border-radius: 20px;
    padding: 15px 30px 30px 30px; 
    flex-shrink: 0;
    width: 300px;
    max-height: 300px;
    margin-left: 10px;
    margin-right: 10px;
    cursor: grab;
    transition: all 0.2s ease-in-out;
    margin-bottom: 30px;
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    flex-direction: column;

    /* &:hover {
        bottom:30px;
        position: relative;
        transition: all 0.2s ease-in-out;
    } */
`
export const TReview = styled.p`
    font-size: 14px;
    color: #757575;
    line-height: 20px;
`
export const RatingWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
`

export const StarIcon = styled(FaStar)`
    color: #F0B53F;
    font-size: 1.5rem;
    outline: none;
    margin-left: 5px;
`

export const NameCard = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 120px;
    height: 60px;
    border-radius: 5px;
    background: white;
    justify-content: center;
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 10px;
    top: 55px;
    position: relative;
`

export const Name = styled.h2`
    font-size: 15px;
    line-height: 20px;
    text-align: center;
`

export const JobTitle = styled.p`
    font-size: 12px;
    font-weight: normal;
    line-height: 20px;
    text-align: center;
`