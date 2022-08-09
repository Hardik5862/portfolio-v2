import { styled } from "@mui/material/styles";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

export const CsContainer = styled("div")`
  width: 100%;
  padding: 20px 40px;
  overflow-x: hidden;
  overflow-y: auto;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const CsGridItem = styled(Grid)`
  max-width: 500px;
  margin: 0 30px;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const CsList = styled("div")`
  margin: 50px 0;

  & h3 {
    color: ${({ theme }) => theme.palette.secondary.main};
  }

  & ul {
    margin: 10px 0;
  }
`;

export const CsMain = styled(CardActionArea)`
  max-width: 500px;
  margin: 20px 0;

  .MuiCardActionArea-focusHighlight {
    background: transparent;
  }
`;

export const CsCard = styled(Card)`
  display: flex;
`;

export const CsCover = styled("img")`
  width: 90px;
  padding: 3px;
  background-color: #fff;

  @media (max-width: 600px) {
    width: 50px;
  }
`;

export const CsDetails = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const CsContent = styled("div")`
  flex: 1 0 auto;
  padding: 10px;
`;

export const CsText = styled("span")`
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
