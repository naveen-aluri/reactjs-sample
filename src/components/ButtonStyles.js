import styled from "styled-components";
import { Colors } from "../constants";

export const Button = styled.button`
    width: ${props => props.width ? props.width : '250px'};
    border-radius: ${props => props.radius ? props.radius : '50px'};
    background: ${Colors.PRIMARY};
    color: white;
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
    padding: 14px 48px;
    border: none;
    outline: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: ${Colors.PRIMARY};
    }
`