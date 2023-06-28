import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import './App.css';
import Card, { StyledPool, StyledFace } from './Card';
import CardTwo, { StyledGlitter } from './CardTwo';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import logo from './assets/splash.png';
import { FaJediOrder } from "react-icons/fa";


const MyButton = styled.button`
  padding: 4em;
  background-color: papayawhip;
`;



const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 7rem repeat(3, 1fr) 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas: 
  "logo top top top top"
  "main main main main main"
  "main main main main main"
  "main main main main main"
  "footer footer footer footer footer";
  min-height: 100vh;
`;



const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  justify-self: center;
  background: rgb(246,215,150);
background: linear-gradient(0deg, rgba(246,215,150,1) 0%, rgba(255,255,255,0) 100%);

`;



const LogoContainer = styled.div`
  max-width: 4rem;
  grid-area: logo;
`;

const StyledImg = styled.img`
width: 100%;
`;



const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: row;
  padding: 2em;
`;

const useGithubApi = () => {
  const [data, setData] = useState([]);
  
}

const App = () => {

  
  
  return (
    <Router>
      
      <GridContainer> 
        
        <LogoContainer>  
  <FaJediOrder />
          <StyledImg src={logo} alt="Logo" /> 
          </LogoContainer>
        <Navbar />
       
        <Hero text='Myhero'/>
        <MainContainer> 
        <Switch>
          <Route path="/about">
            <p>About</p>
          </Route>
          <Route path="/portfolio">
            <p>Portfolio</p>
          </Route>
          <Route path="/">
            <p>Home</p>
          </Route>
        </Switch>
          <h1> UX/UI designer with frontend skills
            Also freelancing artist, dj and nurse
          Multi talented beauty</h1>
          <Card />
          <CardTwo />
         
        </MainContainer>

        

        <Footer /> 
     
 </GridContainer>
      
    </Router>
   
  );
}


export default App;