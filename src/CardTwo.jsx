import React from "react";
import styled from 'styled-components';
import Glitter from './assets/Glitter.jpg';
import Pool from './assets/Pool.jpg';


export const CardContainerTwo = styled.div`

    display: flex;
    flex-direction: column;
   align-items: center;
   grid-area: main;
   border-radius: 10px;
  width: 350px;
  height: 450px;
   overflow: hidden;
   box-shadow: 10px 10px 8px #888888;

`;

function CardTwo() {
    return (
        <CardContainerTwo>
            
            <StyledPool src={Pool} alt="Pool" />
            
            <StyledGlitter src={Glitter} alt="Glitter" />
            <h3> Jessika Wiberg</h3>
            <h4> Artist also </h4>
            <StyledButton> Stuff </StyledButton>
        </CardContainerTwo>

    )
};


export const StyledButton = styled.button`
    border-color: #747bff;
    box-shadow: 6px 7px 6px #747bff;
   margin-bottom: 20px;
   background-color: aliceblue;
   margin-top: 20px;
`

export const StyledPool = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
align-self: center;
    
`;

export const StyledGlitter = styled.img`
    width: 250px;
    height: 100px;
    object-fit: cover;
  opacity: 50%;
    /* border: 5px solid white; */
    margin-top: -16em;
   
    /* border-radius: 50%; */
`;

export default CardTwo;