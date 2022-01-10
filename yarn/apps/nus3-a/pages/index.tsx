import { NextPage } from 'next';
import { Button } from 'nus3-ui';
import { Button as Nus3Button } from '@nus3/example-button';
import { Button as Nus3Button2 } from '@nus3/example-button2';

const IndexPage: NextPage = () => (
  <div>
    <h1>nus3-aっていうアプリケーションだよ</h1>
    <Button />
    <Nus3Button />
    <Nus3Button2 />
  </div>
);

export default IndexPage;
