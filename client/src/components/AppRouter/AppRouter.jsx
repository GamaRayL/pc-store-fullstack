import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/system";
import { authRoutes, publicRoutes } from "routes";
import css from "./styles.module.css";

export const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  return (
    <Container className={css.container} maxWidth="auto">
      <Routes>
        {isAuth &&
          authRoutes.map(({ path, page }) => (
            <Route key={path} path={path} element={page} />
          ))}
        {publicRoutes.map(({ path, page }) => (
          <Route key={path} path={path} element={page} />
        ))}
      </Routes>
    </Container>
  );
};
