import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const CsContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(1vw + 0.7rem);
`;

export const CsHeader = styled("div")`
  margin: 0 10px 50px 20px;
  color: ${({ theme }) => theme.palette.primary.contrastText};

  & h2 {
    font-weight: 400;
  }
`;

export const CsName = styled("span")`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const CsBtn = styled(Button)`
  margin: 0 5px;

  &:first-child {
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
