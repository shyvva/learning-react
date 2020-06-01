import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {faqContent} from '../../data/dataStore';

const Faq = () => (
  <Container>
    <h2>FAQ</h2>
    <Hero titleText={faqContent.title} image={faqContent.image}/>
    <p>{faqContent.text}</p>
  </Container>
);

export default Faq;