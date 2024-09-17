import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:tiwarishivam5803@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:tiwarishivam5803@gmail.com">
            tiwarishivam5803@gmail.com
          </a>
        </div>
        <div>
          <a href="tel:+917709219682">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="tel:+917709219682">(+91) 7709219682</a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
