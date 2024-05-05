import Grid from "@mui/material/Grid";
import Certificates from "./Certificates";

import { CsContainer, CsGridItem, CsList } from "./Skills.styles";

const SkillsPage = ({ infolist }) => {
  return (
    <CsContainer>
      <Grid container justifyContent="center" spacing={4}>
        <CsGridItem item>
          <h1>Skills</h1>
          <>
            <CsList>
              <h3>Languages</h3>
              <ul>
                {infolist[0].languages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CsList>
            <CsList>
              <h3>Tools and Technologies for Web Development</h3>
              <ul>
                {infolist[0].webdevelopment.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CsList>
            <CsList>
              <h3>Tools and Technologies for Graphic Design</h3>
              <ul>
                {infolist[0].graphicdesign.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CsList>
          </>
        </CsGridItem>
        <CsGridItem item>
          <h1>Certificates</h1>
          <Certificates certificates={infolist[0].certificates} />
        </CsGridItem>
      </Grid>
    </CsContainer>
  );
};

export default SkillsPage;
