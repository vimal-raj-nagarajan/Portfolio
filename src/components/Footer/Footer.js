import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:027-5769-454">027 5769 454</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:vimalraj.nagarajan@gmail.com">vimalraj.nagarajan@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          {/* <Slogan></Slogan> */}
          <Slogan>Copyright © 2021 - Created by Vimal with thanks to MOOCs</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/vimal-raj-nagarajan" target="_blank">
        <AiFillGithub size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/vimal-raj-nagarajan/" target="_blank">
        <AiFillLinkedin size = "3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/?hl=en" target="_blank">
        <AiFillInstagram size = "3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
