import GitHubIcon from "@mui/icons-material/GitHub";
import GetAppIcon from "@mui/icons-material/GetApp";

import { CsContainer, CsHeader, CsName, CsBtn } from "./Home.styles";

const HomePage = () => {
  return (
    <CsContainer>
      <CsHeader>
        <h1>
          Hi, I&apos;m <CsName>Hardik Sachan</CsName>.
        </h1>
        <h2>I&apos;m a Full Stack Web developer.</h2>
      </CsHeader>
      <div>
        <CsBtn
          variant="contained"
          href="https://raw.githubusercontent.com/Hardik5862/resume/main/hardiksachan.pdf"
          download
        >
          <GetAppIcon style={{ marginRight: "5px" }} />
          Resume
        </CsBtn>
        <CsBtn
          variant="contained"
          color="secondary"
          href="https://github.com/Hardik5862"
          target="_blank"
        >
          <GitHubIcon style={{ marginRight: "5px" }} />
          Github
        </CsBtn>
      </div>
    </CsContainer>
  );
};

export default HomePage;
