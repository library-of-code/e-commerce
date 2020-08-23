import { Provider } from 'next-auth/client'

import '../styles/globals.css'
import "../styles/antd.less";
import CartProvider from '../providers/cart';

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  )
}

export default MyApp
