import { useLocation } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { LockOpen } from "@mui/icons-material";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "utils/consts";
import { GridItem } from "components/GridItem/GridItem";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: window.innerHeight - 64,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "Highlight" }}>
          <LockOpen />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogin ? "Авторизация" : "Регистрация"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Введите ваш email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Введите ваш пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Запомнить меня"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
          <Grid container>
            <GridItem gridSize={true} linkText="Забыли пароль?" href="#" />
            <GridItem
              typographyText={isLogin ? "Нет акаунта?" : "Есть аккаунт?"}
              linkText={isLogin ? "Зарегистрируйтесь" : "Войдите!"}
              href={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}
            />
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
