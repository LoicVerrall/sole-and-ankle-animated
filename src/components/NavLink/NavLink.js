import React from 'react';
import styled from 'styled-components/macro';

import { WEIGHTS } from '../../constants';

const NavLink = ({ href, children }) => {
  return (
    <Wrapper href={href}>
      <DefaultLabel>
        { children }
      </DefaultLabel>
      <HoverLabel>
        { children }
      </HoverLabel>
    </Wrapper>
  );
};

const DefaultLabel = styled.div`
  font-weight: ${WEIGHTS.medium};
  transition: transform 0.3s;
`;

const HoverLabel = styled.div`
  font-weight: ${WEIGHTS.bold};
  transition: transform 0.3s;
  position: absolute;
`;

const Wrapper = styled.a`
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover ${DefaultLabel} {
    transform: translate(0, -100%);
    transition: transform 0.3s;
  }

  &:hover ${HoverLabel} {
    transform: translate(0, -100%);
    transition: transform 0.3s;
    transform-origin: 50% 100%;
    animation-fill-mode: forwards;
  }
`;

export default NavLink;
