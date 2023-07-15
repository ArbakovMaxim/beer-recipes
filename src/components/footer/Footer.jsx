import { LinkedIn } from "../../image/svg/LinkedIn.jsx";
import { Telegram } from "../../image/svg/Telegram.jsx";
import {
  FooterTeg,
  TextFooter,
  WraperFooter,
  WraperSocialBlock,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterTeg>
      <WraperFooter>
        <TextFooter>
          Данное мини приложение было выполнено для тестового задания, компаний
          AiroMedical. <br />
          Тестовое задание выполнил Арбаков Максим.
        </TextFooter>
      </WraperFooter>
      <WraperSocialBlock>
        <a
          href="https://www.linkedin.com/in/arbakov-maksim/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          href="https://t.me/ArbakovMaksim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram />
        </a>
      </WraperSocialBlock>
    </FooterTeg>
  );
};

export default Footer;
