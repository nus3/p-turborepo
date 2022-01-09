import { NextPage } from 'next';
import { Button } from 'nus3-ui';
import { Button as Nus3Button } from '@nus3/example-button';

const IndexPage: NextPage = () => (
  <div>
    <h1>nus3-aっていうアプリケーションだよ</h1>
    <Button />
    <Nus3Button />
  </div>
);

export default IndexPage;
