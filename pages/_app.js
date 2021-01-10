/* eslint-disable react/jsx-filename-extension,react/jsx-props-no-spreading */
import '../styles/style.scss';

import { Provider } from 'react-redux';

import { LeftAside } from '../common/components/left-aside';
import { RightAside } from '../common/components/right-aside';
import { useStore } from '../store/store';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <LeftAside />
      <main className="page-main">
        <div className="page-main__wrapper">
          <Component {...pageProps} />
        </div>
      </main>
      <RightAside />
    </Provider>
  );
}

export default MyApp;
