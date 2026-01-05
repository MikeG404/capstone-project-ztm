import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

import App from './App.jsx'
import { UserProvider } from './context/user.context.jsx';
import { ProductProvider } from './context/product.context.jsx';
import { CartProductProvider } from './context/cart.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProductProvider>
            <App />
          </CartProductProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
