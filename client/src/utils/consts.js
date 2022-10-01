import { createTheme } from "@mui/material";

export const SHOP_ROUTE = "/";
export const NOMATCH_ROUTE = "*";
export const ADMIN_ROUTE = "/admin";
export const LOGIN_ROUTE = "/login";
export const REGISTRATION_ROUTE = "/registration";
export const BASKET_ROUTE = "/basket";
export const DEVICE_ROUTE = "/device";

export const Price = (value) => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
  }).format(value);
};

export const breakpoints = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1020,
      md: 1420,
      lg: 1720,
      xl: 1920,
    },
  },
});
