import '../../styles/globals.css'

import { storeContainer } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default storeContainer.withRedux(MyApp)
