import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";

export const CsContainer = styled("div")`
  width: 100%;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CsHeader = styled("div")`
  & h1 {
    font-size: calc(1.3vw + 1.1rem);
    color: ${({ theme }) => theme.palette.secondary.main};
    margin-bottom: 30px;
  }
`;

export const CsMain = styled("div")`
  max-width: 700px;
  display: flex;
  margin: 10px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const CsAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  margin-right: 40px;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const CsTextMain = styled("p")`
  padding-top: 10px;
  text-align: justify;
`;
