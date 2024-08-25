import { Container, FooterStyles, Icon } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyles>
      <p>GoIT 2023-2024</p>
      <Container>
        <span>Powered by Roxana Necșoi</span>
        <a
          href="https://github.com/roxananecsoi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to GitHub"
        >
          <Icon />
        </a>
      </Container>
    </FooterStyles>
  );
};

export default Footer;
