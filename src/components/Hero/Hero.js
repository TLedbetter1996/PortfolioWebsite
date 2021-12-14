import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I am Tremaine  <br />
       Your Full Stack developer

      </SectionTitle>
      <SectionText>
        I am an aspiring full stack developer offering experience in the React Framework, Javascript, HTML, and CSS. 
      </SectionText>
      {/* Change to my email potentially  */}
      <Button onClick={() => window.location = 'https://google.com'}>Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;