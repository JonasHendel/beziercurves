import '../styles/globals.css'
import LogRocket from 'logrocket';

function MyApp({ Component, pageProps }) {
  LogRocket.init('xfw64p/beziercurves');
  LogRocket.identify('user', {
    name: 'user',
    email: 'user@gmail.com'
  });
  return <Component {...pageProps} />
}

export default MyApp
