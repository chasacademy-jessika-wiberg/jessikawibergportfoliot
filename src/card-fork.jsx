import React from "react";
import styled from 'styled-components';
import Face from './assets/Face.jpg';
// import Pool from './assets/Pool.jpg';


export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
   align-items: center;
   grid-area: main;
   border-radius: 10px;
  width: 350px;
  height: 450px;
   overflow: hidden;
   box-shadow: 10px 10px 8px #888888;
   background-image: ('./assets/Pool.jpg');
`;

export const CTAContainer = styled.div`

box-shadow: 10px 10px 8px #888888;
border-radius: 10px;

`;

export const ROWContainer = styled.div`

display: flex;
flex-direction: row;

`;


function Card() {
    return (
    
        <CardContainer>
            <StyledPool img src={Pool} alt="Pool" />
            {/* <StyledPool src={Pool} alt="Pool" /> */}
            {/* <StyledFace src={Face} alt="Face" /> */}
            <CTAContainer>
                <ROWContainer>
                <h3> Jessika Wiberg</h3>
                <h4> Badar i kunskap </h4>
                </ROWContainer>
                <ROWContainer>
                    <StyledButton> Simma lugnt </StyledButton>
                </ROWContainer>
            </CTAContainer>
        </CardContainer>

    )
};


export const StyledButton = styled.button`
    border-color: #747bff;
    box-shadow: 10px 10px 8px #747bff;
   margin-bottom: 20px;
   background-color: aliceblue;
   margin-top: 20px;
`

export const StyledPool = styled.img`
    width: 350px;
    /* height: 225px; */
    /* height: 150px; */
    
`;

export const StyledFace = styled.img`
    width: 350px;
    height: 250px;
    object-fit: cover;
  opacity: 50%;
    /* border: 5px solid white; */
    margin-top: -4em;
    /* border-radius: 50%; */
`;

export default Card;