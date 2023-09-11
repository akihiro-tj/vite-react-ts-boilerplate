import { FC } from 'react';

type PanelProps = {
  className?: string;
  value: number;
};

const Panel: FC<PanelProps> = ({ className, value }) => {
  return <div className={className}>Count: {value}</div>;
};

export default Panel;
