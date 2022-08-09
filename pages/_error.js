import { styled } from "@mui/material/styles";

function Error({ statusCode }) {
  return (
    <StyledError>
      <StyledTitle>Error {statusCode ? statusCode : 500}</StyledTitle>
      <p>Something went wrong!!!</p>
    </StyledError>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

const StyledError = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.5rem",
}));

const StyledTitle = styled("h1")(({ theme }) => ({
  color: `${theme.palette.secondary.main}`,
}));
