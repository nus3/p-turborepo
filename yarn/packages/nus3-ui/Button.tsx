import { Button as ExampleButton } from '@nus3/example-button2';
import { VFC } from 'react';

type ButtonProps = {
  showExample?: boolean;
};

export const Button: VFC<ButtonProps> = ({ showExample }) => {
  if (showExample) {
    return <ExampleButton />;
  }

  return <button>ボタンだよ</button>;
};
