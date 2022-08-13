import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: string | number | JSX.Element | JSX.Element[];
};

const Container = styled.div`
  color: #888;
`;

const ReadTheDocs: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ReadTheDocs;
