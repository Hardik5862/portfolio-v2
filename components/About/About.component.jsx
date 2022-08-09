import {
  CsAvatar,
  CsContainer,
  CsHeader,
  CsMain,
  CsTextMain,
} from "./About.styles";

const AboutPage = ({ author }) => {
  return (
    <CsContainer>
      <CsHeader>
        <h1>About me</h1>
      </CsHeader>
      <CsMain>
        <CsAvatar alt="Hardik Sachan" src={author[0].image.asset.url} />
        <CsTextMain>
          {author[0].bio[0].children[0].text}
          <br />
          <br />
          {author[0].bio[1].children[0].text}
        </CsTextMain>
      </CsMain>
    </CsContainer>
  );
};

export default AboutPage;
