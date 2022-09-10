import { FC, MouseEventHandler, useState } from 'react';
import styled from 'styled-components';

import Logo from './components/Logo';
import { LOGO } from './constant';

export const SApp = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-family: var(--font-family);
  color: var(--color-text);
  text-align: center;
`;

const SCard = styled.div`
  padding: 2em;
`;

const SReadTheDocs = styled.div`
  color: #888;
`;

const App: FC = () => {
  const [count, setCount] = useState(0);

  const handleClickButton: MouseEventHandler<HTMLButtonElement> = () => {
    setCount(prev => prev + 1);
  };

  return (
    <SApp>
      <div>
        <Logo {...LOGO.vite} />
        <Logo {...LOGO.react} />
      </div>
      <h1>Vite + React</h1>
      <SCard>
        <button onClick={handleClickButton}>count is {count}</button>
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
