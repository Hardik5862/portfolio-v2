import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const CsContainer = styled("div")`
  width: 100%;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  text-align: center;

  & h1 {
    color: ${({ theme }) => theme.palette.secondary.main};
    margin-bottom: 10px;
  }
`;

export const CsForm = styled("form")`
  max-width: 500px;
  padding: 20px 20px 20px 0;
  margin-top: 20px;
`;

export const CsTextfield = styled(TextField)`
  width: 100%;
  margin: 10px;
`;

export const CsSubmit = styled("div")`
  margin: 10px;
`;
