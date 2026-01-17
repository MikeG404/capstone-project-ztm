import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './global.styles';

import App from './App.jsx'
import { CartProductProvider } from './context/cart.context.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CartProductProvider>
          <GlobalStyle />
          <App />
        </CartProductProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
