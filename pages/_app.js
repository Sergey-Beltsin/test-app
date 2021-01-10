/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import '../styles/style.scss';

import { wrapper } from '../store/store';
import { LeftAside } from '../common/components/left-aside';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LeftAside />
      <main className="page-main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default wrapper.withRedux(MyApp);
