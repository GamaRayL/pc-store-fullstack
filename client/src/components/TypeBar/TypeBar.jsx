import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { selectType } from "store/selectedTypeSlice";
import css from "./styles.module.css";

export const TypeBar = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types.types);
  const selected = useSelector((state) => state.selectedType);

  return (
    <Box sx={{ pr: "24px" }}>
      <nav>
        <List>
          <ListSubheader component="div">Комплектующие</ListSubheader>
          {types.map((type) => (
            <ListItem key={type.id} disablePadding>
              <ListItemButton
                selected={selected === type.id}
                onClick={() => dispatch(selectType(type.id))}
              >
                <ListItemIcon sx={{ minWidth: "44px" }}>
                  <img
                    src={type.img}
                    width={24}
                    height={24}
                    alt="иконка элемента"
                  />
                </ListItemIcon>
                <ListItemText className={css.itemText} primary={type.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
};
