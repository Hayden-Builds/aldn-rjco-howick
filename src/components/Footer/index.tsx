import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import FooterContentData from "../../content/FooterContent.json";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FooterContent = FooterContentData;

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{FooterContent.contact.title}</Language>
              <Para>{FooterContent.contact.description}</Para>
              <Para>{FooterContent.contact.address}</Para>
              <Para>Phone: {FooterContent.contact.phone}</Para>
              <a href={`mailto:${FooterContent.contact.email}`}>
                <Chat>{FooterContent.contact.email}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{FooterContent.quickLinks.title}</Title>
              {FooterContent.quickLinks.links.map((link: any, index: number) => (
                <NavLink key={index} to={link.path} onClick={scrollToTop}>
                  {link.name}
                </NavLink>
              ))}
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{FooterContent.services.title}</Title>
              {FooterContent.services.items.map((item: string, index: number) => (
                <Para key={index}>{item}</Para>
              ))}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <Col span={12} style={{ textAlign: "center" }}>
              <Para style={{ textAlign: "center", margin: "0 auto" }}>
                © 2024 {FooterContent.company.name}
              </Para>
            </Col>
            <Col span={12} style={{ textAlign: "center" }}>
              {FooterContent.social.links
                .filter((link: any) => link.name === "Facebook")
                .map((link: any, index: number) => (
                  <SocialLink
                    key={index}
                    href={link.url}
                    src={link.icon}
                  />
                ))}
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
