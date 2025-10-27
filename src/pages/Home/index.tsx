import { lazy } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import HomeContentData from "../../content/HomeContent.json";
import HorizontalInfiniteCarousel from "../../components/HorizontalInfiniteCarousel";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = ({ t }: { t: TFunction }) => {
  const history = useHistory();
  const HomeContent = HomeContentData;

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero Section - Video Background */}
      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            rotate: "180deg",
            opacity: 30
          }}
        >
          <source src="/img/videos/hero_bg.mp4" type="video/mp4" />
        </video>

        {/* Content Layer */}
        <div style={{ position: "relative", zIndex: 3 }}>
          <Container>
            <Fade triggerOnce>
              <Row
                justify="center"
                style={{ minHeight: "100vh", alignItems: "center" }}
              >
                <Col
                  lg={18}
                  md={20}
                  sm={24}
                  xs={24}
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  <h1
                    style={{
                      fontSize: "clamp(3rem, 6vw, 5rem)",
                      fontWeight: 800,
                      marginBottom: "2rem",
                      lineHeight: "1.2",
                      letterSpacing: "-0.03em",
                      color: "#fff",
                    }}
                  >
                    {HomeContent.hero.title}
                  </h1>
                  <p
                    style={{
                      fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                      marginBottom: "3rem",
                      opacity: 0.95,
                      fontWeight: 300,
                      lineHeight: "1.6",
                      maxWidth: "800px",
                      margin: "0 auto 3rem",
                      color: "#fff",
                    }}
                  >
                    {HomeContent.hero.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                      justifyContent: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      onClick={() => {
                        history.push("/contact");
                        setTimeout(() => window.scrollTo(0, 0), 100);
                      }}
                      style={{
                        padding: "1.25rem 3rem",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        borderRadius: "50px",
                        backgroundColor: "#fff",
                        color: "#667eea",
                        border: "none",
                        boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 35px rgba(76, 175, 80, 0.4)";
                        e.currentTarget.style.backgroundColor = "#4caf50";
                        e.currentTarget.style.color = "#fff";
                      }}
                      onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(102, 126, 234, 0.3)";
                        e.currentTarget.style.backgroundColor = "#fff";
                        e.currentTarget.style.color = "#667eea";
                      }}
                    >
                      {HomeContent.callToAction.button.title}
                    </button>

                    <button
                      onClick={() =>
                        history.push(HomeContent.servicesPreview.button.path)
                      }
                      style={{
                        padding: "1.25rem 3rem",
                        fontSize: "1.1rem",
                        fontWeight: 600,
                        borderRadius: "50px",
                        background:
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        color: "#fff",
                        border: "none",
                        boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 35px rgba(76, 175, 80, 0.4)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)";
                      }}
                      onMouseLeave={(
                        e: React.MouseEvent<HTMLButtonElement>
                      ) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px rgba(102, 126, 234, 0.3)";
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                      }}
                    >
                      {HomeContent.servicesPreview.button.title}
                    </button>
                  </div>
                </Col>
              </Row>
            </Fade>
          </Container>

          {/* Bottom Fade-Out Gradient */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "200px",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fafbfc 100%)",
              zIndex: 4,
              pointerEvents: "none",
            }}
          ></div>
        </div>
      </div>

      {/* Features Section - Glassmorphism Cards */}
      <div style={{ padding: "6rem 0", backgroundColor: "#fafbfc" }}>
        <Container>
          <Fade triggerOnce direction="up">
            <Row justify="center" style={{ marginBottom: "5rem" }}>
              <Col lg={16} md={18} sm={24} xs={24} style={{ textAlign: "center" }}>
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
                  fontWeight: 800,
                  marginBottom: "1.5rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}>
                  {HomeContent.intro.title}
                </h2>
                <p style={{ 
                  fontSize: "1.3rem", 
                  color: "#666",
                  lineHeight: "1.8"
                }}>
                  {HomeContent.intro.text}
                </p>
              </Col>
            </Row>
          </Fade>
          <Fade triggerOnce direction="up">
            <Row gutter={[32, 32]} justify="center" style={{ display: "flex" }}>
              {HomeContent.intro.features.map((feature: any, index: number) => (
                <Col lg={8} md={8} sm={24} xs={24} key={index} style={{ display: "flex" }}>
                  <div style={{ 
                    textAlign: "center", 
                    padding: "3rem 2.5rem",
                    borderRadius: "24px",
                    backgroundColor: "#fff",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.06)",
                    minHeight: "360px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%"
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(-12px)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(102, 126, 234, 0.15)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.06)";
                  }}>
                    <div style={{ 
                      width: "80px", 
                      height: "80px", 
                      margin: "0 auto 2rem",
                      borderRadius: "20px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}>
                      <SvgIcon src={feature.icon} width="48px" height="48px" />
                    </div>
                    <h3 style={{ 
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      color: "#1a1a1a"
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{ 
                      color: "#666", 
                      lineHeight: "1.7",
                      flexGrow: 1
                    }}>
                      {feature.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Fade>
        </Container>
      </div>

      {/* Our Story Section */}
      <div style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
        <Container>
          <Row gutter={[64, 48]} align="middle">
            <Col lg={12} md={12} sm={24} xs={24}>
              <Fade triggerOnce direction="left">
                <div
  style={{
    position: "relative",
    width: "100%",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
  }}
>
  {/* Background Image */}
  <img
    src={`/img/photos/${HomeContent.mission.image}`}
    alt="Our Story"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
      borderRadius: "24px",
    }}
  />

  {/* Gradient Overlay (matches Hero) */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      borderRadius: "24px",
      background:
        "linear-gradient(135deg, rgba(102, 126, 234, 0.55) 0%, rgba(118, 75, 162, 0.55) 50%, rgba(10, 51, 70, 0.55) 100%)",
      mixBlendMode: "overlay",
    }}
  ></div>
</div>
              </Fade>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <Fade triggerOnce direction="right">
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "2rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}>
                  {HomeContent.mission.title}
                </h2>
                <p style={{ 
                  fontSize: "1.2rem", 
                  color: "#666", 
                  lineHeight: "1.9",
                  marginBottom: "2rem"
                }}>
                  {HomeContent.mission.text}
                </p>
                <div style={{
                  backgroundColor: "rgba(102, 126, 234, 0.05)",
                  borderRadius: "16px",
                  padding: "2rem"
                }}>
                  <p style={{ 
                    fontSize: "1rem", 
                    color: "#555", 
                    lineHeight: "1.8",
                    margin: 0
                  }}>
                    {HomeContent.mission.services}
                  </p>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Infinite Horizontal Carousel */}
      <div style={{ padding: "6rem 0", backgroundColor: "#fafbfc" }}>
        <Container>
          <Fade triggerOnce direction="up">
            <Row justify="center" style={{ marginBottom: "4rem" }}>
              <Col lg={18} md={18} sm={24} xs={24} style={{ textAlign: "center" }}>
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}>
                  {HomeContent.servicesPreview.title}
                </h2>
                <p style={{ 
                  fontSize: "1.3rem", 
                  color: "#666",
                  lineHeight: "1.8"
                }}>
                  {HomeContent.servicesPreview.text}
                </p>
              </Col>
            </Row>
          </Fade>
          <HorizontalInfiniteCarousel 
            items={HomeContent.servicesPreview.services} 
            speed={30}
            onItemClick={() => {
              history.push(HomeContent.servicesPreview.button.path);
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
          />
          <Row justify="center" style={{ marginTop: "4rem" }}>
            <button 
              onClick={() => history.push(HomeContent.servicesPreview.button.path)}
              style={{
                padding: "1.25rem 3rem",
                fontSize: "1.1rem",
                fontWeight: 600,
                borderRadius: "50px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "#fff",
                border: "none",
                boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 35px rgba(76, 175, 80, 0.4)";
                e.currentTarget.style.background = "linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)";
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.3)";
                e.currentTarget.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
              }}
            >
              {HomeContent.servicesPreview.button.title}
            </button>
          </Row>
        </Container>
      </div>

      {/* Call to Action - Modern CTA */}
      <div style={{ 
        padding: "4rem 0", 
        backgroundImage: "url('/img/photos/board.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%)"
        }}></div>
        <Container>
          <div style={{ position: "relative", zIndex: 1 }}>
            <Fade triggerOnce>
              <Row justify="center">
                <Col lg={18} md={18} sm={24} xs={24}>
                <h2 style={{ 
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: "#fff",
                  letterSpacing: "-0.02em"
                }}>
                  {HomeContent.callToAction.title}
                </h2>
                <p style={{ 
                  fontSize: "1.1rem", 
                  marginBottom: "1.5rem", 
                  opacity: 0.95,
                  lineHeight: "1.6",
                  color: "#fff"
                }}>
                  {HomeContent.callToAction.text}
                </p>
                <button 
                  onClick={() => {
                    history.push('/contact');
                    setTimeout(() => window.scrollTo(0, 0), 100);
                  }}
                  style={{ 
                    padding: "1.25rem 3rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                    color: "#667eea",
                    border: "none",
                    boxShadow: "0 8px 25px rgba(102, 126, 234, 0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = "0 12px 35px rgba(76, 175, 80, 0.4)";
                    e.currentTarget.style.backgroundColor = "#4caf50";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(102, 126, 234, 0.3)";
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#667eea";
                  }}
                >
                  {HomeContent.callToAction.button.title}
                </button>
              </Col>
            </Row>
            </Fade>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation()(Home);
