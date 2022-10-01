import { Admin, Auth, Basket, DevicePage, NoMatch, Shop } from "../pages";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
  NOMATCH_ROUTE,
} from "utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    page: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    page: <Basket />,
  },
];
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    page: <Shop />,
  },
  {
    path: DEVICE_ROUTE + "/:id",
    page: <DevicePage />,
  },
  {
    path: REGISTRATION_ROUTE,
    page: <Auth />,
  },
  {
    path: LOGIN_ROUTE,
    page: <Auth />,
  },
  {
    path: NOMATCH_ROUTE,
    page: <NoMatch />,
  },
];
