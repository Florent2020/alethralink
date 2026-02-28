import { useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiLayers,
  FiCpu,
  FiShield,
  FiRefreshCw,
  FiHeadphones,
  FiMail,
  FiPhone,
  FiMapPin,
  FiAward,
  FiClock,
  FiCheckCircle,
  FiTrendingUp,
  FiSliders,
  FiWifi,
  FiBriefcase,
  FiServer,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";
// import { Container } from "../components/UI";

// import SEO from "../components/SEO";

import heroImg from "../assets/hero-city-1.jpg"; // city image
import dataCenterImg from "../assets/data-center.jpg";
import howWeWorkImg from "../assets/how-we-work.jpg";

import whoSupportImg from "../assets/who-support.png";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <>
      {/* <SEO
        title="AlethraLink | Network Engineering Services for ISPs & Enterprises"
        description="Professional network engineering services for ISPs and enterprises: operations support, L2/L3 troubleshooting, design, optimization, migrations, and audits."
        path="/"
      /> */}
      {/* HERO */}
      <Hero>
        <Overlay />
        <Container>
          <HeroContent>
            <Kicker>WELCOME TO ALETHRALINK</Kicker>
            <Title>
              Professional Network Engineering Services for ISPs and Enterprises
            </Title>
            <Subtitle>
              We design and deliver advanced telecommunications solutions
              tailored to fuel your growth — supported by independent,
              high-performance network expertise grounded in real operational
              experience.
            </Subtitle>

            <HeroButtons>
              <PrimaryBtn to="/services">Our Services</PrimaryBtn>
              <SecondaryBtn to="/contact">Contact Us</SecondaryBtn>
            </HeroButtons>
          </HeroContent>
        </Container>
      </Hero>

      {/* WHAT WE DO */}
      <Section>
        <Container>
          <SectionSurface>
            <Center>
              <SectionTitle>What We Do</SectionTitle>
            </Center>

            <Grid>
              <ServiceCard>
                <IconWrap>
                  <FiActivity />
                </IconWrap>
                <CardTitle>Network Operations</CardTitle>
                <Paragraph>
                  Professional technical support for network operations
                </Paragraph>
              </ServiceCard>

              <ServiceCard>
                <IconWrap>
                  <FiLayers />
                </IconWrap>
                <CardTitle>Layer 2 / Layer 3 Troubleshooting</CardTitle>
                <Paragraph>
                  Expert diagnosis and resolution of network issues
                </Paragraph>
              </ServiceCard>

              <ServiceCard>
                <IconWrap>
                  <FiCpu />
                </IconWrap>
                <CardTitle>Network Design & Optimization</CardTitle>
                <Paragraph>
                  Architecture design and performance optimization
                </Paragraph>
              </ServiceCard>

              <ServiceCard>
                <IconWrap>
                  <FiShield />
                </IconWrap>
                <CardTitle>Standardization & Audits</CardTitle>
                <Paragraph>
                  Configuration audits and best-practice implementation
                </Paragraph>
              </ServiceCard>

              <ServiceCard>
                <IconWrap>
                  <FiRefreshCw />
                </IconWrap>
                <CardTitle>Migration Support</CardTitle>
                <Paragraph>
                  Structured upgrade and migration execution
                </Paragraph>
              </ServiceCard>

              <ServiceCard>
                <IconWrap>
                  <FiHeadphones />
                </IconWrap>
                <CardTitle>Remote Engineering</CardTitle>
                <Paragraph>
                  European-based support for ISP and enterprise networks
                </Paragraph>
              </ServiceCard>
            </Grid>
          </SectionSurface>
        </Container>
      </Section>

      {/* ABOUT PREVIEW */}
      <Section>
        <Container>
          <Split>
            <TextBlock>
              <SectionTitle>About AlethraLink</SectionTitle>
              <Paragraph>
                AlethraLink is a European network engineering company providing
                professional services for organizations that rely on secure,
                stable, and high-performance network infrastructure.
              </Paragraph>
              <Paragraph>
                We operate as an extension of your technical team — structured,
                disciplined, and results-driven.
              </Paragraph>

              {/* <PrimaryBtn to="/about">Learn More</PrimaryBtn> */}
              <div style={{ marginTop: 28 }}>
                <PrimaryBtn to="/about">Learn More</PrimaryBtn>
              </div>
            </TextBlock>

            <ImageBlock>
              <img src={dataCenterImg} alt="Data Center" />
            </ImageBlock>
          </Split>
        </Container>
      </Section>

      {/* HOW WE WORK PREVIEW */}
      <Section>
        <Container>
          <Split>
            <ImageBlock>
              <img src={howWeWorkImg} alt="Services" />
            </ImageBlock>

            <TextBlock>
              <SectionTitle>How We Work</SectionTitle>
              <Paragraph>
                We operate as an extension of our clients' technical teams,
                following structured workflows, disciplined documentation
                practices, and clear technical communication. Our approach
                prioritizes transparency and measurable technical outcomes
                rather than marketing positioning.
              </Paragraph>

              <div style={{ marginTop: 28 }}>
                <PrimaryBtn to="/services">Learn More</PrimaryBtn>
              </div>
            </TextBlock>
          </Split>
        </Container>
      </Section>

      {/* WHY PARTNER WITH US */}
      <Section>
        <Container>
          <SectionSurface>
            <Center>
              <SectionTitle>Why Partner with Us</SectionTitle>
              <Paragraph>
                A reliable engineering partner focused on stability, discipline,
                and real-world delivery.
              </Paragraph>
            </Center>

            <WhyGrid>
              <WhyCard>
                <WhyIcon>
                  <FiAward />
                </WhyIcon>
                <WhyTitle>Professional Experts</WhyTitle>
                <WhyDesc>
                  Highly skilled network engineers with proven expertise
                </WhyDesc>
              </WhyCard>

              <WhyCard>
                <WhyIcon>
                  <FiClock />
                </WhyIcon>
                <WhyTitle>24/7 Premium Support</WhyTitle>
                <WhyDesc>
                  Round-the-clock technical assistance when you need it
                </WhyDesc>
              </WhyCard>

              <WhyCard>
                <WhyIcon>
                  <FiCheckCircle />
                </WhyIcon>
                <WhyTitle>Top Quality Solutions</WhyTitle>
                <WhyDesc>
                  Enterprise-grade implementations and configurations
                </WhyDesc>
              </WhyCard>

              <WhyCard>
                <WhyIcon>
                  <FiShield />
                </WhyIcon>
                <WhyTitle>Certified Technicians</WhyTitle>
                <WhyDesc>
                  Industry-recognized qualifications and experience
                </WhyDesc>
              </WhyCard>

              <WhyCard>
                <WhyIcon>
                  <FiTrendingUp />
                </WhyIcon>
                <WhyTitle>Reliable Performance</WhyTitle>
                <WhyDesc>Consistent delivery and operational stability</WhyDesc>
              </WhyCard>

              <WhyCard>
                <WhyIcon>
                  <FiCpu />
                </WhyIcon>
                <WhyTitle>Cutting-Edge Technology</WhyTitle>
                <WhyDesc>Modern platforms and best-practice approaches</WhyDesc>
              </WhyCard>

              <WhyCard>
                <WhyIcon>
                  <FiSliders />
                </WhyIcon>
                <WhyTitle>Tailored Connectivity</WhyTitle>
                <WhyDesc>
                  Custom solutions designed for your environment
                </WhyDesc>
              </WhyCard>

              <WhyCard>
                <WhyIcon>
                  <FiLayers />
                </WhyIcon>
                <WhyTitle>Vendor-Agnostic</WhyTitle>
                <WhyDesc>Multi-vendor expertise without bias</WhyDesc>
              </WhyCard>
            </WhyGrid>
          </SectionSurface>
        </Container>
      </Section>

      {/* WHO WE SUPPORT */}
      <Section>
        <Container>
          <SectionSurface>
            <SplitSupport>
              <SupportText>
                <SupportTitle>Who We Support</SupportTitle>

                <SupportLead>
                  We provide expert network engineering services to industries
                  that rely on secure, high-performance connectivity. Our
                  experience allows us to support diverse environments while
                  delivering reliable, scalable, and efficient network
                  solutions.
                </SupportLead>

                <SupportList>
                  <li>
                    <SupportIcon>
                      <FiWifi />
                    </SupportIcon>
                    <div>
                      <strong>Internet Service Providers (ISPs)</strong>
                      <span>
                        Carrier-grade operations, troubleshooting, and delivery
                        support.
                      </span>
                    </div>
                  </li>

                  <li>
                    <SupportIcon>
                      <FiBriefcase />
                    </SupportIcon>
                    <div>
                      <strong>Enterprise Network Environments</strong>
                      <span>
                        Secure, stable connectivity across distributed business
                        sites.
                      </span>
                    </div>
                  </li>

                  <li>
                    <SupportIcon>
                      <FiServer />
                    </SupportIcon>
                    <div>
                      <strong>Data Centers</strong>
                      <span>
                        High-availability networking and performance-focused
                        optimization.
                      </span>
                    </div>
                  </li>

                  <li>
                    <SupportIcon>
                      <FiUsers />
                    </SupportIcon>
                    <div>
                      <strong>Managed Service Providers (MSPs)</strong>
                      <span>
                        Structured engineering capacity when you need reliable
                        execution.
                      </span>
                    </div>
                  </li>
                </SupportList>

                <SupportActions>
                  <PrimaryBtn to="/contact">
                    Talk to an Engineer <FiArrowRight />
                  </PrimaryBtn>
                </SupportActions>
              </SupportText>

              <SupportVisual>
                {/* Use any of your existing images. Example: */}
                <img src={whoSupportImg} alt="Who we support" />
              </SupportVisual>
            </SplitSupport>
          </SectionSurface>
        </Container>
      </Section>

      {/* CONTACT SECTION */}
      <Section alt>
        <Container>
          <SectionSurface>
            <Center>
              <SectionTitle>Get In Touch</SectionTitle>
              <Paragraph>
                Ready to strengthen your network infrastructure? Let’s talk.
              </Paragraph>
            </Center>

            <ContactGrid>
              {/* Contact Info */}
              <ContactInfo>
                <InfoItem>
                  <FiMail />
                  <div>
                    <strong>Email</strong>
                    <span>info@alethralink.com</span>
                  </div>
                </InfoItem>

                <InfoItem>
                  <FiPhone />
                  <div>
                    <strong>Phone</strong>
                    <span>+1 347-704-7744</span>
                  </div>
                </InfoItem>

                <InfoItem>
                  <FiMapPin />
                  <div>
                    <strong>Location</strong>
                    <span>Europe & U.S.</span>
                  </div>
                </InfoItem>
              </ContactInfo>

              {/* Contact Form */}
              <Form onSubmit={handleSubmit}>
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={onChange}
                  required
                />

                <Input
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={onChange}
                  required
                />

                <Input
                  name="company"
                  placeholder="Company (optional)"
                  value={formData.company}
                  onChange={onChange}
                />

                <TextArea
                  name="message"
                  placeholder="How can we help?"
                  rows="6"
                  value={formData.message}
                  onChange={onChange}
                  required
                />

                <Submit type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </Submit>

                {status === "success" && (
                  <FormStatus $ok>
                    ✅ Thanks! Your message has been sent.
                  </FormStatus>
                )}

                {status === "error" && (
                  <FormStatus>
                    ❌ Something went wrong. Please try again.
                  </FormStatus>
                )}
              </Form>
            </ContactGrid>
          </SectionSurface>
        </Container>
      </Section>
    </>
  );
}

/* ========================= STYLES ========================= */

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Hero = styled.section`
  position: relative;
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  padding: 70px 0;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 14, 22, 0.82),
    rgb(10 14 22 / 62%)
  );
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 750px;
`;

const Kicker = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 4vw, 3.6rem);
  margin: 18px 0;
  line-height: 1.1;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  opacity: 0.9;
`;

const HeroButtons = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

// const PrimaryBtn = styled(Link)`
//   padding: 14px 24px;
//   border-radius: 14px;
//   background: #5eead4;
//   color: #0b1220;
//   font-weight: 700;
//   text-decoration: none;
//   transition: 0.3s ease;

//   &:hover {
//     transform: translateY(-3px);
//     background: #2dd4bf;
//   }
// `;

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 14px 26px;
  border-radius: 14px;
  background: #5eead4;
  color: #0b1220;
  font-weight: 800;
  text-decoration: none;
  transition: 0.3s ease;

  svg {
    font-size: 18px;
    display: block;
  }

  &:hover {
    transform: translateY(-3px);
    background: #2dd4bf;
  }
`;

const SecondaryBtn = styled(Link)`
  padding: 14px 24px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Section = styled.section`
  padding: 60px 0;
  position: relative;

  /* This makes the background feel continuous (no harsh band changes) */
  /* background: radial-gradient(circle at top left, #111b2e, #0b1220 60%); */

  background: ${({ alt }) =>
    alt
      ? "radial-gradient(circle at top right, #111b2e, #0b1220 60%)"
      : "radial-gradient(circle at top left, #111b2e, #0b1220 60%)"};
`;

const SectionSurface = styled.div`
  border-radius: 24px;
  padding: 56px 46px;

  /* slightly stronger surface so it doesn't clash with bg */
  background: rgba(15, 20, 32, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);

  box-shadow:
    0 18px 60px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);

  backdrop-filter: blur(10px);

  /* THIS is what prevents sections "touching" visually */
  margin: 22px 0;

  @media (max-width: 700px) {
    padding: 34px 18px;
    margin: 14px 0;
  }
`;

const Center = styled.div`
  text-align: center;
  margin-bottom: 34px; /* tighter so title doesn't float */
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  /* margin-bottom: 0; */
  margin-top: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  padding: 40px 30px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    background: rgba(94, 234, 212, 0.08);
  }
`;

const IconWrap = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  color: #5eead4;
`;

const CardTitle = styled.h3`
  margin: 0;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TextBlock = styled.div`
  max-width: 600px;
`;

const ImageBlock = styled.div`
  img {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  }
`;

// const Paragraph = styled.p`
//   line-height: 1.7;
//   margin-bottom: 20px;
//   opacity: 0.9;

//   &:last-of-type {
//     position: relative;
//     margin-bottom: 2.5rem;
//   }
// `;

const Paragraph = styled.p`
  line-height: 1.7;
  margin: 0 0 18px;
  opacity: 0.9;
`;

/* WHY PARTNER WITH US */

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const WhyCard = styled.div`
  padding: 22px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.25s ease;
  min-height: 150px;

  &:hover {
    transform: translateY(-6px);
    background: rgba(94, 234, 212, 0.07);
    border-color: rgba(94, 234, 212, 0.18);
  }
`;

const WhyIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(94, 234, 212, 0.1);
  border: 1px solid rgba(94, 234, 212, 0.2);
  margin-bottom: 12px;

  svg {
    color: #5eead4;
    font-size: 20px;
  }
`;

const WhyTitle = styled.h3`
  margin: 0 0 8px;
  font-size: 1.05rem;
  font-weight: 900;
`;

const WhyDesc = styled.p`
  margin: 0;
  line-height: 1.55;
  opacity: 0.88;
`;

/* WHO WE SUPPORT */

const SplitSupport = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 46px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const SupportText = styled.div`
  max-width: 680px;
`;

const SupportTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0 0 12px;
`;

const SupportLead = styled.p`
  margin: 0 0 20px;
  line-height: 1.75;
  opacity: 0.92;
`;

const SupportList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 14px;

  li {
    display: flex;
    gap: 14px;
    align-items: flex-start;
    padding: 14px 14px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.25s ease;
  }

  li:hover {
    transform: translateY(-4px);
    background: rgba(94, 234, 212, 0.06);
    border-color: rgba(94, 234, 212, 0.18);
  }

  strong {
    display: block;
    margin-bottom: 4px;
    font-weight: 900;
  }

  span {
    display: block;
    opacity: 0.88;
    line-height: 1.6;
  }
`;

const SupportIcon = styled.div`
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(94, 234, 212, 0.1);
  border: 1px solid rgba(94, 234, 212, 0.2);

  svg {
    color: #5eead4;
    font-size: 18px;
  }
`;

const SupportActions = styled.div`
  margin-top: 16px;
`;

const SupportVisual = styled.div`
  img {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

/* Contact Style */

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 42px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  svg {
    font-size: 26px;
    color: #5eead4;
  }

  span {
    display: block;
    opacity: 0.8;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 14px;
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: white;

  &:focus {
    outline: none;
    border-color: #5eead4;
  }
`;

const TextArea = styled.textarea`
  padding: 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.05);
  color: white;

  &:focus {
    outline: none;
    border-color: #5eead4;
  }
`;

/* ✅ Status message under button */

const Submit = styled.button`
  padding: 14px 16px;
  border-radius: 14px;
  border: none;
  background: #5eead4;
  color: #0b1220;
  font-weight: 900;
  cursor: pointer;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #2dd4bf;
  }

  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
    transform: none;
  }
`;

const FormStatus = styled.p`
  margin: 8px 0 0;
  line-height: 1.5;
  font-size: 0.95rem;
  opacity: 0.9;
  color: ${({ $ok }) => ($ok ? "#5eead4" : "rgba(255,255,255,0.86)")};
`;

// const SubmitButton = styled.button`
//   padding: 14px 16px;
//   border-radius: 14px;
//   border: none;
//   background: #5eead4;
//   color: #0b1220;
//   font-weight: 800;
//   cursor: pointer;
//   transition: 0.25s ease;
//   justify-self: start; /* 👈 key: don't stretch full width */
//   min-width: 180px;

//   &:hover {
//     transform: translateY(-2px);
//     background: #2dd4bf;
//   }

//   @media (max-width: 900px) {
//     justify-self: stretch; /* on mobile it's fine to go full width */
//     width: 100%;
//   }
// `;
