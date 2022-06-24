import type { FunctionComponent, FC } from 'react';

interface Props {
  name: string;
  age: number;
}

const FunctionComponent: FunctionComponent<Props> = (props) => {
  return <div>1</div>
};

const FC: FC<Props> = (props) => <div>1</div>