import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig, email } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
const { colors, fontSizes, fonts } = theme;

const PerformanceContainer = styled(Section)`
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`;
const GreenHeading = styled(Heading)`
  display: block;
  color: ${colors.pyellow};
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 20px;
  justify-content: center;
  ${media.desktop`font-size: ${fontSizes.small};`};
  &:before {
    bottom: 0;
    font-size: ${fontSizes.small};
    ${media.desktop`font-size: ${fontSizes.smallish};`};
  }
  &:after {
    display: none;
  }
`;
const Title = styled.h4`
  margin: 0 0 20px;
  font-size: ${fontSizes.smallish};
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
`;



const Performance = ({ data }) => {
    const { frontmatter, html } = data[0].node;
    const { title } = frontmatter;
    const revealContainer = useRef(null);
    useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

    return (
        <PerformanceContainer id="performance" ref={revealContainer}>
            <GreenHeading>Some classical music...</GreenHeading>

            <Title>{title}</Title>

            <div dangerouslySetInnerHTML={{ __html: html }} />

        </PerformanceContainer>
    );
};

Performance.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Performance;
