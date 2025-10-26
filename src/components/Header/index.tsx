import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const MenuItem = () => {
    return (
      <>
        <Link to="/" onClick={() => { setVisibility(false); scrollToTop(); }}>
          <CustomNavLinkSmall>
            <Span>{t("Home")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/about" onClick={() => { setVisibility(false); scrollToTop(); }}>
          <CustomNavLinkSmall>
            <Span>{t("About")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/services" onClick={() => { setVisibility(false); scrollToTop(); }}>
          <CustomNavLinkSmall>
            <Span>{t("Services")}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="/contact" onClick={() => { setVisibility(false); scrollToTop(); }}>
          <CustomNavLinkSmall>
            <Span>
              <Button>{t("Contact")}</Button>
            </Span>
          </CustomNavLinkSmall>
        </Link>
        <a 
          href="https://www.facebook.com/RJCOHowick/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Facebook"
          onClick={() => setVisibility(false)}
          style={{ display: "inline-block", margin: "0.5rem 2rem" }}
        >
          <Span>
            <SvgIcon src="facebook.svg" width="24px" height="24px" />
          </Span>
        </a>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage" onClick={scrollToTop}>
            <img src="/img/photos/RJCO Logo2.avif" alt="RJCO Howick" style={{ maxHeight: "64px", width: "auto" }} />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
