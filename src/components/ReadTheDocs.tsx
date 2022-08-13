import React from 'react';
import styled from 'styled-components';

type Props = React.HTMLAttributes<HTMLDivElement>;

const Container = styled.div`
  color: #888;
`;

const ReadTheDocs: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ReadTheDocs;
