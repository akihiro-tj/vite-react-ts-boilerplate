import { FunctionComponent, MouseEventHandler, ReactNode } from 'react';

import styles from './style.module.scss';

type ButtonProps = {
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FunctionComponent<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
