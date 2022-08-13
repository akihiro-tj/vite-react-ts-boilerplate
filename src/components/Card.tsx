import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: string | number | JSX.Element | JSX.Element[];
};

const Container = styled.div`
  padding: 2em;
`;

const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
