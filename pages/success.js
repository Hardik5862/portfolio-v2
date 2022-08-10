import Head from "next/head";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export default function About() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Form submitted successfully! | Hardik Sachan</title>
      </Head>

      <CsContainer>
        <p>Thanks for contacting me 😊! Will reply to you asap.</p>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => router.push("/")}
        >
          Go back to home
        </Button>
      </CsContainer>
    </>
  );
}

const CsContainer = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;

  & p {
    padding: 0 10px;
    margin-bottom: 20px;
  }
`;
