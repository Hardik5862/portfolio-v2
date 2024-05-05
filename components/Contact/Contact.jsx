import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { CsContainer, CsForm, CsTextfield, CsSubmit } from "./Contact.styles";

const ContactPage = () => {
  return (
    <CsContainer>
      <h1>Feel free to contact me</h1>
      <h4>You can also contact me via social media</h4>
      <CsForm
        autoComplete="off"
        name="contactForm1"
        method="post"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contactForm1" />
        <div>
          <CsTextfield
            required
            name="name"
            id="name"
            label="Name"
            variant="outlined"
            color="secondary"
          />
          <CsTextfield
            required
            name="email"
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            color="secondary"
          />
          <CsTextfield
            required
            name="message"
            id="message"
            label="Your message"
            variant="outlined"
            multiline
            rows={5}
            color="secondary"
          />
          <div data-netlify-recaptcha="true"></div>
        </div>
        <CsSubmit>
          <Button type="submit" variant="contained" color="secondary">
            <SendIcon style={{ marginRight: "5px" }} />
            SEND
          </Button>
        </CsSubmit>
      </CsForm>
    </CsContainer>
  );
};

export default ContactPage;
