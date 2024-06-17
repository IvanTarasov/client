import Admin from './pages/Admin'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import ItemPage from './pages/ItemPage'

import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, ITEM_ROUTE  } from './utils/consts'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: Admin
    },
    {
        path: BASKET_ROUTE,
        element: Basket
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        element: Auth
    },
    {
        path: SHOP_ROUTE,
        element: Shop
    },
    {
        path: ITEM_ROUTE + '/:id',
        element: ItemPage
    }
]