import { lazy } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";
import ServicesContentData from "../../content/ServicesContent.json";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Services = ({ t }: { t: TFunction }) => {
  const history = useHistory();
  const ServicesContent = ServicesContentData;

  // Map services to their image files
  const serviceImageMap: any = {
    "Accounting Officer": "account officer.svg",
    "Bookkeeping Services": "bookkeeping.svg",
    "Income Tax": "income tax.svg",
    "Statutory Returns": "Statutory Returns.svg",
    "Statutory Registrations": "Registrations.svg",
    "Payroll": "Payroll.svg",
    "Secretarial Services": "Secretarial .svg",
    "Consulting & Advisory": "Consulting.svg"
  };

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
                  {ServicesContent.page.title}
                </h1>
                <p style={{ 
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  color: "#555",
                  fontWeight: 400,
                  textAlign: "center"
                }}>
                  {ServicesContent.page.subtitle}
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>

      {/* Intro */}
      <div style={{ padding: "6rem 0", backgroundColor: "transparent" }}>
        <Container>
          <Fade triggerOnce>
            <Row justify="center">
              <Col lg={16} md={16} sm={24} xs={24} style={{ textAlign: "center" }}>
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "1.5rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}>
                  {ServicesContent.intro.title}
                </h2>
                <p style={{ 
                  fontSize: "1.3rem", 
                  color: "#666",
                  lineHeight: "1.8"
                }}>
                  {ServicesContent.intro.text}
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>

      {/* Services Grid */}
      <div style={{ padding: "4rem 0 6rem", backgroundColor: "#fafbfc" }}>
        <Container>
          <Fade triggerOnce direction="up">
            <Row gutter={[32, 32]}>
              {ServicesContent.services.map((service: any, index: number) => (
                <Col lg={12} md={12} sm={24} xs={24} key={index}>
                  <div style={{ 
                    padding: "3rem", 
                    backgroundColor: "#fff", 
                    borderRadius: "24px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                    height: "100%",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    border: "1px solid rgba(102, 126, 234, 0.1)",
                    cursor: "pointer"
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(-12px)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(102, 126, 234, 0.15)";
                    e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.3)";
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "rgba(102, 126, 234, 0.1)";
                  }}
                  >
                    <div style={{ 
                      display: "flex", 
                      alignItems: "flex-start", 
                      marginBottom: "1.5rem",
                      gap: "1.5rem"
                    }}>
                      <div style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "20px",
                        backgroundColor: "rgba(102, 126, 234, 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <img 
                          src={`/img/services/${serviceImageMap[service.title] || service.icon}`}
                          alt={service.title}
                          style={{ width: "48px", height: "48px" }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `/img/svg/${service.icon}`;
                          }}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ 
                          marginBottom: "1rem", 
                          marginTop: 0,
                          fontSize: "1.8rem",
                          fontWeight: 700,
                          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          {service.title}
                        </h3>
                        <p style={{ 
                          color: "#666", 
                          marginBottom: "1.5rem",
                          lineHeight: "1.7",
                          fontSize: "1.1rem"
                        }}>
                          {service.description}
                        </p>
                        <div style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "0.75rem"
                        }}>
                          {service.details.map((detail: string, idx: number) => (
                            <div key={idx} style={{ 
                              padding: "0.75rem 1rem",
                              backgroundColor: "rgba(102, 126, 234, 0.05)",
                              borderRadius: "12px",
                              fontSize: "0.95rem",
                              color: "#555",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem"
                            }}>
                              <span style={{
                                color: "#667eea",
                                fontSize: "1.2rem",
                                fontWeight: "bold"
                              }}>
                                ✓
                              </span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    </div>
                </Col>
              ))}
            </Row>
          </Fade>
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
                  {ServicesContent.callToAction.title}
                </h2>
                <p style={{ 
                  fontSize: "1.1rem",
                  marginBottom: "1.5rem",
                  opacity: 0.95,
                  lineHeight: "1.6",
                  color: "#fff"
                }}>
                  {ServicesContent.callToAction.text}
                </p>
                <button 
                  onClick={() => history.push(ServicesContent.callToAction.button.path)}
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
                  {ServicesContent.callToAction.button.title}
                </button>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation()(Services);
