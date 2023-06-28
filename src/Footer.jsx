import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-area: footer;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: black;
  border-radius: 8px;
`;

const StyledIcon = styled.img`
  width: 20%;
`;



const LogoContainer = styled.div`
  max-width: 4rem;
  grid-area: logo;
`;



const links = [
  {
    id: 1,
    to: "https://www.linkedin.com/in/jessika-wiberg-59392922b/",
    icon: <FaLinkedin />,
  },
  {
    id: 2,
    to: "mailto:jessikawiberg@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    id: 3,
    to: "https://github.com/chasacademy-jessika-wiberg/",
    icon: <FaGithub />,
  },
];

const Footer = () => {
  return (
    <StyledFooter>
      <LogoContainer>{/* Logo? */}</LogoContainer>
      {links.map((link) => (
        <a key={link.id} href={link.to}>
          {link.icon}
        </a>
      ))}
      <StyledIcon /> 
    </StyledFooter>
  );
};

export default Footer;