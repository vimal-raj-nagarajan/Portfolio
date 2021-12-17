import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi! I'm Vimal<br />
        Full-stack developer
      </SectionTitle>
      <SectionText>
      My main goal is to have a positive impact on whatever project I'm involved in.
      </SectionText>
      <Button onClick={() => window.location = 'mailto:vimalraj.nagarajan@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;