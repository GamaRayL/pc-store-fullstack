import { Grid, Link, Typography } from "@mui/material";
import css from "./styles.module.css";

export const GridItem = (props) => {
  const { typographyText, gridSize, linkText, href } = props;

  return (
    <Grid item xs={gridSize}>
      {typographyText ? (
        <Typography className={css.typographyText} variant="body2">
          {typographyText}
        </Typography>
      ) : null}
      <Link href={href} variant="body2">
        {linkText}
      </Link>
    </Grid>
  );
};
