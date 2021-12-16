import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((proj) => (
        <BlogCard key={proj.id}>
          <Img src={proj.image}/>
          <TitleContent>
            <HeaderThree title>{proj.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{proj.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {proj.tags.map((tag,i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={proj.visit}>Code</ExternalLinks>
            <ExternalLinks href={proj.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;