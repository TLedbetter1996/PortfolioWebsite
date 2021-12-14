import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:708-248-0180">708-248-0180</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:tledbetter1996@gmail.com">tledbetter1996@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/TLedbetter1996">
          <AiFillGithub size="3rem" /> 
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/tremaine-ledbetter-3320781b0/">
          <AiFillLinkedin size="3rem" /> 
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/tremaine.ledbetter">
          <AiFillFacebook size="3rem" /> 
        </SocialIcons>
      </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
