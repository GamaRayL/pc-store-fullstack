import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { AddShoppingCart, Star } from "@mui/icons-material";
import { breakpoints, Price } from "utils/consts";
import css from "./styles.module.css";

export const DeviceItem = ({ device }) => {
  return (
    <ThemeProvider theme={breakpoints}>
      <Grid item xl={2} lg={2.4} md={3} sm={4} xs={6}>
        <Card className={css.card} variant="">
          <CardMedia
            height="240"
            image={device.img}
            component="img"
            alt="товар"
            className={css.cardMedia}
          />
          <CardContent sx={{ padding: 0 }}>
            <Box sx={{ mb: 1 }}>
              <Star sx={{ fontSize: 14 }} color="warning" />
              <Star sx={{ fontSize: 14 }} color="disabled" />
              <Star sx={{ fontSize: 14 }} color="disabled" />
              <Star sx={{ fontSize: 14 }} color="disabled" />
              <Star sx={{ fontSize: 14 }} color="disabled" />
            </Box>
            <Typography
              variant="h5"
              className={css.price}
              gutterBottom
              component="div"
            >
              {Price(device.price)}
            </Typography>
            <Typography variant="body2" className={css.name}>
              {device.name}
            </Typography>
          </CardContent>
          <CardActions className={css.cardActions}>
            <Button
              className={css.button}
              color="primary"
              variant="outlined"
              startIcon={<AddShoppingCart color="warning" />}
            >
              <Typography variant="subtitle2">В корзину</Typography>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};
