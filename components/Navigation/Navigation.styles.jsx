import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

export const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
}));

export const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

export const ListContainer = styled("div")(({ theme }) => ({
  width: 250,
}));
