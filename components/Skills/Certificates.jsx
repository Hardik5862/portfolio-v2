import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../helpers/sanityClient";

import {
  CsMain,
  CsCard,
  CsCover,
  CsDetails,
  CsContent,
  CsText,
} from "./Skills.styles";

const Certificates = ({ certificates }) => {
  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (data) => {
    return builder.image(data).url();
  };

  return (
    <>
      {certificates.map((certificate) => (
        <CsMain key={certificate.url} href={certificate.url} target="_blank">
          <CsCard>
            <CsCover src={urlFor(certificate.logo)} alt="course logo" />
            <CsDetails>
              <CsContent>
                <CsText>{certificate.coursetitle}</CsText>
              </CsContent>
            </CsDetails>
          </CsCard>
        </CsMain>
      ))}
    </>
  );
};

export default Certificates;
