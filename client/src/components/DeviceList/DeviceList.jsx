import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { DeviceItem } from "../DeviceItem/DeviceItem";

export const DeviceList = () => {
  const device = useSelector((state) => state.device.devices);
  return (
    <Grid container spacing={2}>
      {device.map((device) => (
        <DeviceItem key={device.id} device={device}></DeviceItem>
      ))}
    </Grid>
  );
};
