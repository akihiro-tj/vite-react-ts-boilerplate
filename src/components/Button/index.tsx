import clsx from 'clsx';
import { FC, MouseEventHandler, ReactNode } from 'react';

import style from './style.module.scss';

type ButtonProps = {
  className?: string;
  children?: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={clsx(className, style.button)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
