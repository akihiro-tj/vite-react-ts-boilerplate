import { FC, useState } from 'react';
import styled from 'styled-components';

import reactLogo from './assets/react.svg';

export const SApp = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const SCard = styled.div`
  padding: 2em;
`;

const SReadTheDocs = styled.div`
  color: #888;
`;

const SLogo = styled.img<{ type: 'vite' | 'react' }>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: ${props => `drop-shadow(0 0 2em var(--color-${props.type}-logo))`};
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    animation: ${props =>
      props.type === 'react' ? 'logo-spin infinite 20s linear' : 'none'};
  }
`;

const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <SApp>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <SLogo type="vite" src="/vite.svg" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <SLogo type="react" src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <SCard>
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </SCard>
      <SReadTheDocs>
        Click on the Vite and React logos to learn more
      </SReadTheDocs>
    </SApp>
  );
};

export default App;
