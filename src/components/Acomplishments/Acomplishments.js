import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 2, text: 'Large & Medium sized Projects'},
  { number: 10, text: 'Small Projects', },
  { number: 1000, text: 'Hours of coding experience', },
  { number: 15, text: 'Weeks of intensive Bootcamp training', }
];

const Acomplishments = () => (
  <Section>
     <SectionDivider />
     <br/>
      <br/>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
