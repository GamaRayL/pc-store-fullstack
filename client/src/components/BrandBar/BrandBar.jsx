import { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Tab, Tabs } from "@mui/material";

export const BrandBar = () => {
  const brands = useSelector((state) => state.brands.brands);
  const [value, setValue] = useState(0);
  return (
    <Box sx={{ mb: 2 }}>
      <Tabs
        variant="scrollable"
        allowScrollButtonsMobile
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
      >
        {brands.map((brand) => (
          <Tab key={brand.id} label={brand.name} />
        ))}
      </Tabs>
    </Box>
  );
};
