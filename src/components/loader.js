import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import { IconLoader } from '@components/icons';
import styled from 'styled-components';
import { theme, mixins } from '@styles';
const { colors } = theme;

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${colors.pback};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #B {
      opacity: 0;
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      /*
      .add({
        targets: '#heart',
        delay: 500,
        duration: 600,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })*/
      .add({
        targets: '#logo',
        duration: 600,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo #top',
        delay: 150,
        duration: 75,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo #left_piece',
        delay: 200,
        duration: 100,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo #midleft_piece',
        delay: 150,
        duration: 75,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo #midright_piece',
        delay: 150,
        duration: 75,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo #right_piece',
        delay: 200,
        duration: 100,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo #bottom',
        delay: 150,
        duration: 75,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '#logo #heart',
        delay: 800,
        duration: 600,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderContainer className="loader">
      <Helmet bodyAttributes={{ class: `hidden` }} />

      <LogoWrapper isMounted={isMounted}>
        <IconLoader />
      </LogoWrapper>
    </LoaderContainer>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
