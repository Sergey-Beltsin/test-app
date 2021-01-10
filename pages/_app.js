/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import '../styles/style.scss';

import { LeftAside } from '../common/components/left-aside';
import { RightAside } from '../common/components/right-aside';
import { wrapper } from '../store/store';

const MyApp = ({ Component, pageProps }) => (
  <>
    <LeftAside />
    <main className="page-main">
      <div className="page-main__wrapper">
        <Component {...pageProps} />
      </div>
    </main>
    <RightAside />
  </>
);

export default wrapper.withRedux(MyApp);
