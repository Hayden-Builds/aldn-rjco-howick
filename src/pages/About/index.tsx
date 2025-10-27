import { lazy } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";
import AboutContentData from "../../content/AboutContent.json";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const About = ({ t }: { t: TFunction }) => {
  const history = useHistory();
  const AboutContent = AboutContentData;
  
  const ImageWrapper = ({ name, role, bio, image }: any) => (
    <Col lg={8} md={8} sm={12} xs={24} style={{ marginBottom: "2rem" }}>
      <Fade triggerOnce>
        <div style={{ 
          textAlign: "center",
          padding: "1.5rem",
          backgroundColor: "#fff",
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          height: "100%"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(102, 126, 234, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
        }}
        >
          <div style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            margin: "0 auto 1.5rem",
            border: "4px solid rgba(102, 126, 234, 0.1)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)"
          }}>
            <img 
              src={`/img/photos/${image}`} 
              alt={name}
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover"
              }}
            />
          </div>
          <h4 style={{ 
            marginTop: "1rem",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "0.5rem"
          }}>
            {name}
          </h4>
          <p style={{ 
            color: "#667eea",
            fontWeight: 600,
            marginTop: "0.5rem",
            marginBottom: "1rem"
          }}>
            {role}
          </p>
          <p style={{ 
            marginTop: "1rem",
            color: "#666",
            lineHeight: "1.6"
          }}>
            {bio}
          </p>
        </div>
      </Fade>
    </Col>
  );

  return (
    <div>
      {/* <ScrollToTop /> */}
      
      {/* Hero Header */}
      <div style={{
        padding: "5rem 0 3.5rem",
        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)"
      }}>
        <Container>
          <Fade triggerOnce>
            <Row justify="center">
              <Col lg={18} md={18} sm={24} xs={24}>
                <h1 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)", 
                  fontWeight: 800,
                  marginBottom: "1rem",
                  letterSpacing: "-0.03em",
                  color: "#1a1a1a",
                  textAlign: "center"
                }}>
                  {AboutContent.page.title}
                </h1>
                <p style={{ 
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  color: "#555",
                  fontWeight: 400,
                  textAlign: "center"
                }}>
                  {AboutContent.page.subtitle}
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>

      {/* History Section */}
      <div style={{ padding: "6rem 0", backgroundColor: "transparent" }}>
        <Container>
          <Row gutter={[48, 48]} justify="center">
            {/* Full width centered title */}
            <Col lg={20} md={20} sm={24} xs={24}>
              <Fade triggerOnce>
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "4rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em",
                  textAlign: "center"
                }}>
                  {AboutContent.history.title}
                </h2>
              </Fade>
            </Col>
            
            {/* Full width large image */}
            {/* <Col lg={20} md={20} sm={24} xs={24}>
              <Fade triggerOnce>
                <div style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                  marginBottom: "4rem"
                }}>
                  <img 
                    src={`/img/photos/${AboutContent.history.image}`}
                    alt="History"
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                </div>
              </Fade>
            </Col> */}
            
            {/* Text in centered column */}
            <Col lg={16} md={16} sm={24} xs={24}>
              <Fade triggerOnce direction="up">
                <p style={{ 
                  fontSize: "1.2rem", 
                  color: "#666", 
                  lineHeight: "1.95",
                  textAlign: "center"
                }}>
                  {AboutContent.history.text}
                </p>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Values Section */}
      <div style={{ padding: "6rem 0", backgroundColor: "transparent" }}>
        <Container>
          <Fade triggerOnce>
            <Row justify="center" style={{ marginBottom: "4rem" }}>
              <Col lg={16} md={16} sm={24} xs={24} style={{ textAlign: "center" }}>
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "1.5rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}>
                  {AboutContent.values.title}
                </h2>
              </Col>
            </Row>
          </Fade>
          <Fade triggerOnce>
            <Row gutter={[32, 32]} justify="center">
              {AboutContent.values.values.map((value: any, index: number) => (
                <Col lg={12} md={12} sm={24} xs={24} key={index}>
                  <div style={{ 
                    padding: "3rem",
                    backgroundColor: "#fff",
                    borderRadius: "24px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
                    height: "100%",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderLeft: "4px solid #667eea"
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(102, 126, 234, 0.15)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06)";
                  }}
                  >
                    <h3 style={{ 
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      marginBottom: "1rem",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>
                      {value.title}
                    </h3>
                    <p style={{ 
                      color: "#666", 
                      lineHeight: "1.8",
                      fontSize: "1.1rem"
                    }}>
                      {value.description}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Fade>
        </Container>
      </div>

      {/* Team Section */}
      <div style={{ padding: "6rem 0", backgroundColor: "transparent" }}>
        <Container>
          <Fade triggerOnce>
            <Row justify="center" style={{ marginBottom: "4rem" }}>
              <Col lg={18} md={18} sm={24} xs={24} style={{ textAlign: "center" }}>
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}>
                  {AboutContent.team.title}
                </h2>
                <p style={{ 
                  fontSize: "1.3rem", 
                  color: "#666",
                  lineHeight: "1.8"
                }}>
                  {AboutContent.team.text}
                </p>
              </Col>
            </Row>
          </Fade>
          <Row gutter={[32, 32]} justify="center">
            {AboutContent.team.members.map((member: any, index: number) => (
              <ImageWrapper
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </Row>
        </Container>
      </div>

      {/* Call to Action */}
      <div style={{ 
        padding: "4rem 0", 
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        textAlign: "center"
      }}>
        <Container>
          <Fade triggerOnce>
            <Row justify="center">
              <Col lg={16} md={16} sm={24} xs={24}>
                <h2 style={{ 
                  fontSize: "clamp(2rem, 4vw, 2.5rem)",
                  fontWeight: 800,
                  marginBottom: "1rem",
                  color: "#fff",
                  letterSpacing: "-0.02em"
                }}>
                  {AboutContent.callToAction.title}
                </h2>
                <p style={{ 
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                  opacity: 0.95,
                  lineHeight: "1.6",
                  color: "#fff"
                }}>
                  {AboutContent.callToAction.text}
                </p>
                <button 
                  onClick={() => history.push(AboutContent.callToAction.button.path)}
                  style={{
                    padding: "1rem 3rem",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    backgroundColor: "#fff",
                    color: "#667eea",
                    border: "none",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 15px 50px rgba(76, 175, 80, 0.5)";
                    e.currentTarget.style.backgroundColor = "#4caf50";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.2)";
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#667eea";
                  }}
                >
                  {AboutContent.callToAction.button.title}
                </button>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation()(About);
