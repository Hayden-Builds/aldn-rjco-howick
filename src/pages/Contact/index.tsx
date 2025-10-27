import { lazy } from "react";
import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { useHistory } from "react-router-dom";
import { SvgIcon } from "../../common/SvgIcon";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import ContactContentData from "../../content/ContactContent.json";

const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

interface ValidationTypeProps {
  type: string;
}

const Contact = ({ t }: { t: TFunction }) => {
  const history = useHistory();
  const ContactContent = ContactContentData;
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <span style={{ color: "red", fontSize: "0.875rem" }}>{ErrorMessage}</span>;
  };

  return (
    <div style={{ overflow: "hidden" }}>
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
                  {ContactContent.page.title}
                </h1>
                <p style={{ 
                  fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
                  color: "#555",
                  fontWeight: 400,
                  textAlign: "center"
                }}>
                  {ContactContent.page.subtitle}
                </p>
              </Col>
            </Row>
          </Fade>
        </Container>
      </div>

      {/* Contact Section */}
      <div style={{ padding: "6rem 0", backgroundColor: "#fafbfc" }}>
        <Container>
          <Row gutter={[48, 32]}>
            {/* Contact Information */}
            <Col lg={12} md={12} sm={24} xs={24}>
              <Fade triggerOnce>
                <div style={{
                  padding: "3rem",
                  backgroundColor: "#fff",
                  borderRadius: "24px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  height: "100%"
                }}>
                  <h2 style={{ 
                    fontSize: "2rem",
                    fontWeight: 700,
                    marginBottom: "2rem",
                    color: "#1a1a1a"
                  }}>{ContactContent.contactInfo.office.title}</h2>
                  <p>{ContactContent.contactInfo.office.address}</p>
                  <p>{ContactContent.contactInfo.office.city}, {ContactContent.contactInfo.office.country}</p>
                  <p>{ContactContent.contactInfo.office.postalCode}</p>
                  
                  <div style={{ marginTop: "2rem" }}>
                    <p><strong>Phone:</strong> {ContactContent.contactInfo.contact.phone}</p>
                    <p><strong>Email:</strong> <a href={`mailto:${ContactContent.contactInfo.contact.email}`}>
                      {ContactContent.contactInfo.contact.email}
                    </a></p>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <h3>{ContactContent.contactInfo.hours.title}</h3>
                    <p>{ContactContent.contactInfo.hours.weekdays}</p>
                    <p>{ContactContent.contactInfo.hours.times}</p>
                  </div>

                  {/* Social Links */}
                  <div style={{ marginTop: "2rem" }}>
                    <h3>{ContactContent.social.title}</h3>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      {ContactContent.social.links.map((link: any, index: number) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.name}
                        >
                          <SvgIcon src={link.icon} width="32px" height="32px" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>

            {/* Contact Form */}
            <Col lg={12} md={12} sm={24} xs={24}>
              <Fade triggerOnce>
                <div style={{
                  padding: "3rem",
                  backgroundColor: "#fff",
                  borderRadius: "24px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  height: "100%"
                }}>
                  <h2 style={{ 
                    fontSize: "2rem",
                    fontWeight: 700,
                    marginBottom: "1rem",
                    color: "#1a1a1a"
                  }}>{ContactContent.form.title}</h2>
                  <p style={{ marginBottom: "2rem", color: "#666" }}>{ContactContent.form.text}</p>
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <Col span={24} style={{ marginBottom: "1rem" }}>
                      <Input
                        type="text"
                        name="name"
                        placeholder={ContactContent.form.fields.name}
                        value={values.name || ""}
                        onChange={handleChange}
                      />
                      <ValidationType type="name" />
                    </Col>
                    <Col span={24} style={{ marginBottom: "1rem" }}>
                      <Input
                        type="text"
                        name="email"
                        placeholder={ContactContent.form.fields.email}
                        value={values.email || ""}
                        onChange={handleChange}
                      />
                      <ValidationType type="email" />
                    </Col>
                    <Col span={24} style={{ marginBottom: "1rem" }}>
                      <TextArea
                        placeholder={ContactContent.form.fields.message}
                        value={values.message || ""}
                        name="message"
                        onChange={handleChange}
                      />
                      <ValidationType type="message" />
                    </Col>
                    <Col span={24}>
                      <button 
                        type="submit"
                        style={{
                          padding: "0.75rem 2rem",
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          borderRadius: "50px",
                          backgroundColor: "#fff",
                          color: "#667eea",
                          border: "none",
                          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          width: "auto",
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
                        {ContactContent.form.button}
                      </button>
                    </Col>
                  </form>
                </div>
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Map Section */}
      <div style={{ padding: "6rem 0", backgroundColor: "transparent" }}>
        <Container>
          <Fade triggerOnce>
            <Row justify="center" style={{ marginBottom: "3rem" }}>
              <Col lg={20} md={20} sm={24} xs={24} style={{ textAlign: "center" }}>
                <h2 style={{ 
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  marginBottom: "1.5rem",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em"
                }}>
                  {ContactContent.map.title}
                </h2>
                <p style={{ 
                  fontSize: "1.3rem",
                  color: "#666",
                  lineHeight: "1.8"
                }}>
                  {ContactContent.map.text}
                </p>
              </Col>
            </Row>
          </Fade>
          <Row justify="center">
            <Col lg={20} md={20} sm={24} xs={24}>
              <div style={{ 
                position: "relative", 
                paddingBottom: "56.25%", 
                height: 0, 
                overflow: "hidden", 
                borderRadius: "24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
              }}>
                <iframe
                  src="https://www.google.com/maps?q=95+Main+Street,+Howick,+3290&output=embed"
                  width="100%"
                  height="100%"
                  style={{ 
                    position: "absolute", 
                    top: 0, 
                    left: 0, 
                    width: "100%", 
                    height: "100%", 
                    border: 0
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RJCO Howick Location"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default withTranslation()(Contact);
