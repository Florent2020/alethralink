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
} from "react-icons/fi";
// import { Container } from "../components/UI";

import heroImg from "../assets/hero-city-1.jpg"; // city image
import dataCenterImg from "../assets/data-center.jpg";
import howWeWorkImg from "../assets/how-we-work.jpg";

export default function Home() {
  return (
    <>
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

              <PrimaryBtn to="/about">Learn More</PrimaryBtn>
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

              <PrimaryBtn to="/services">Learn More</PrimaryBtn>
            </TextBlock>
          </Split>
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
                    <span>+31 000 000 000</span>
                  </div>
                </InfoItem>

                <InfoItem>
                  <FiMapPin />
                  <div>
                    <strong>Location</strong>
                    <span>Europe</span>
                  </div>
                </InfoItem>
              </ContactInfo>

              {/* Contact Form */}
              <Form>
                <Input placeholder="Full Name" required />
                <Input placeholder="Email Address" type="email" required />
                <Input placeholder="Company" />
                <TextArea placeholder="Your Message" rows="5" required />
                <SubmitButton type="submit">Send Message</SubmitButton>
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
  padding: 100px 0;
  color: white;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 14, 22, 0.85),
    rgb(10 14 22 / 75%)
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

const PrimaryBtn = styled(Link)`
  padding: 14px 24px;
  border-radius: 14px;
  background: #5eead4;
  color: #0b1220;
  font-weight: 700;
  text-decoration: none;
  transition: 0.3s ease;

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
  padding: 90px 0;
  position: relative;

  /* This makes the background feel continuous (no harsh band changes) */
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
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

const Paragraph = styled.p`
  line-height: 1.7;
  margin-bottom: 20px;
  opacity: 0.9;
`;

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

const SubmitButton = styled.button`
  padding: 14px 16px;
  border-radius: 14px;
  border: none;
  background: #5eead4;
  color: #0b1220;
  font-weight: 800;
  cursor: pointer;
  transition: 0.25s ease;
  justify-self: start; /* 👈 key: don't stretch full width */
  min-width: 180px;

  &:hover {
    transform: translateY(-2px);
    background: #2dd4bf;
  }

  @media (max-width: 900px) {
    justify-self: stretch; /* on mobile it's fine to go full width */
    width: 100%;
  }
`;
