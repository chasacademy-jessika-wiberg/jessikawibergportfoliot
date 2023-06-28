import React from "react";
import styled from "styled-components";
import {
    Link
} from "react-router-dom";
import hamburgericon from "./assets/hamburgericon.png"





const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-area: top; 
    align-items: center;

`;


 const StyledLink = styled(Link)`
 color: #747bff;
 border-radius: 8px;
  `;



const links = [
  {
    id: 1,
    to: "/",
    text: "Home"
  },

  {
    id: 2,
    to: "/contact",
    text: "Contact"
  },

  {
    id: 3,
    to: "/portfolio",
    text: "Portfolio"
  },

  {
    id: 4,
    to: "/about",
    text: "About"
  },
];


const Navbar = () => {
  // const [isOpen, setIsOpen] =set
    return (
      <> 
        <StyledNav>
    
              {/* <logo /> */}
              {links.map(link => <StyledLink to={link.to} key={link.id}> {link.text} </StyledLink>)}
        </StyledNav>

          
        </>
    )
};



export default Navbar;
