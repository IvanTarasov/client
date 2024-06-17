import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import UserStore from './store/UserStore';
import ItemStore from './store/ItemStore';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './pages/Shop';
import Auth from './pages/Auth';
import ItemPage from './pages/ItemPage';
import Admin from './pages/Admin';
import Basket from './pages/Basket';
import { ADMIN_ROUTE, BASKET_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/consts';
import App from './App';

export const Context = createContext(null)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: LOGIN_ROUTE,
        element: <Auth />,
      },
      {
        path: REGISTRATION_ROUTE,
        element: <Auth />,
      },
      {
        path: ITEM_ROUTE,
        element: <ItemPage />,
      },
      {
        path: ADMIN_ROUTE,
        element: <Admin />,
      },
      {
        path: SHOP_ROUTE,
        element: <Shop />,
      },
      {
        path: BASKET_ROUTE,
        element: <Basket />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      item: new ItemStore()
    }}>
      <RouterProvider router={router}/>
    </Context.Provider>
  </React.StrictMode>
);



