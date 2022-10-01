import { Grid } from "@mui/material";
import { BrandBar } from "components/BrandBar/BrandBar";
import { DeviceList } from "components/DeviceList/DeviceList";
import { TypeBar } from "components/TypeBar/TypeBar";

export const Shop = () => {
  return (
    <>
      <TypeBar />
      <Grid container>
        <Grid item>
          <BrandBar />
          <DeviceList />
        </Grid>
      </Grid>
    </>
  );
};
