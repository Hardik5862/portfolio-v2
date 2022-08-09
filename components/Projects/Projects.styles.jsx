import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export const CsContainer = styled("div")`
  width: 100%;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CsHeader = styled("div")`
  color: ${({ theme }) => theme.palette.secondary.main};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  width: 100%;
  margin-bottom: 40px;

  & h1 {
    font-size: calc(1.5vw + 1rem);
  }
`;

export const CsGrid = styled(Grid)`
  flex-grow: 1;
`;

export const CsCard = styled(Card)`
  max-width: 345px;
`;

export const CsCardMedia = styled(CardMedia)`
  height: 140px;
`;
