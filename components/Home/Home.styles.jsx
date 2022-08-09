import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const CsContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "calc(1vw + 0.7rem)",
}));

export const CsHeader = styled("div")(({ theme }) => ({
  margin: "0 10px 50px 20px",
  color: `${theme.palette.primary.contrastText}`,
}));

export const CsName = styled("span")(({ theme }) => ({
  color: `${theme.palette.secondary.main}`,
}));

export const CsBtn = styled(Button)`
  margin: 0 5px;

  &:first-child {
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
