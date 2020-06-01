import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {infoContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <h2>Info</h2>
    <Hero titleText={infoContent.title} image={infoContent.image}/>
    <p>{infoContent.text}</p>
  </Container>
);

export default Info;