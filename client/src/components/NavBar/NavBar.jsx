import { useDispatch, useSelector } from "react-redux";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { setAuth } from "store/authSlice";
import { SHOP_ROUTE } from "utils/consts";
import css from "./styles.module.css";

export const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={css.toolBar}>
          <Typography
            variant="h6"
            component="a"
            href={SHOP_ROUTE}
            className={css.logo}
          >
            PC STORE
          </Typography>
          {isAuth ? (
            <Box className={css.buttonGroup}>
              <Button color="inherit" variant="outlined">
                Админ панель
              </Button>
              <Button color="inherit" variant="outlined">
                Войти
              </Button>
            </Box>
          ) : (
            <Box className={css.buttonGroup}>
              <Button
                color="inherit"
                variant="outlined"
                onClick={() => dispatch(setAuth(true))}
              >
                Авторизация
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
