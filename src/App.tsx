import { useState } from 'react';
import styled from 'styled-components';

import reactLogo from './assets/react.svg';
import Card from './components/Card';
import Logo from './components/Logo';
import ReadTheDocs from './components/ReadTheDocs';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <Logo type="vite" src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <Logo type="react" src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Card>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
    </Container>
  );
};

export default App;
