import styled from "styled-components";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiCheckCircle,
  FiAward,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiCpu,
  FiSliders,
} from "react-icons/fi";

import SEO from "../components/SEO";

import heroImg from "../assets/data-center.jpg"; // <-- add/rename your image
import sideImg from "../assets/data-center.jpg"; // <-- you already have this

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact AlethraLink | Let’s Build Your Network"
        description="Get in touch with AlethraLink for network engineering services, partnership discussions, and trial engagement opportunities."
        path="/contact"
      />

      <Hero>
        <Overlay />
        <Container>
          <HeroContent>
            <Kicker>CONTACT</Kicker>
            <Title>Let’s Build Your Network the Right Way</Title>
            <Subtitle>
              Whether you’re planning a new deployment, optimizing existing
              infrastructure, or exploring a reliable engineering partner —
              AlethraLink is here to help.
            </Subtitle>
          </HeroContent>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionSurface>
            <Split>
              <Left>
                <H2>Get in Touch</H2>
                <P>
                  We are available to discuss requirements, engagement models,
                  or trial support opportunities.
                </P>

                <Info>
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
                </Info>

                <WhatToExpect>
                  <h3>
                    <FiCheckCircle /> What to Expect
                  </h3>
                  <ul>
                    <li>
                      Direct technical communication with experienced engineers
                    </li>
                    <li>
                      Clear discussion of requirements and engagement scope
                    </li>
                    <li>
                      Structured approach to trial engagements and evaluation
                    </li>
                    <li>Transparent communication regarding timelines</li>
                  </ul>
                </WhatToExpect>

                <SideImage>
                  <img src={sideImg} alt="Data center" />
                </SideImage>
              </Left>

              <Right>
                <FormTitle>
                  <FiMessageSquare /> Send us a message
                </FormTitle>

                <Form>
                  <Input placeholder="Full Name" required />
                  <Input placeholder="Email Address" type="email" required />
                  <Input placeholder="Company (optional)" />
                  <TextArea placeholder="How can we help?" rows="6" required />
                  <Submit type="submit">Send Message</Submit>
                </Form>

                <Note>
                  For technical inquiries, partnership discussions, or trial
                  engagement opportunities, please reach out directly via email.
                </Note>
              </Right>
            </Split>
          </SectionSurface>
        </Container>
      </Section>

      {/* BECOME PARTNER */}
      <Section>
        <Container>
          <SectionSurface>
            <PartnerTop>
              <PartnerKicker>BECOME PARTNER</PartnerKicker>
              <PartnerTitle>Why work with AlethraLink</PartnerTitle>
              <PartnerLead>
                A focused engineering partner built for reliability, support,
                and real-world execution.
              </PartnerLead>
            </PartnerTop>

            <PartnerGrid>
              <PartnerCard>
                <PartnerIcon>
                  <FiAward />
                </PartnerIcon>
                <PartnerName>Professional Expert</PartnerName>
              </PartnerCard>

              <PartnerCard>
                <PartnerIcon>
                  <FiClock />
                </PartnerIcon>
                <PartnerName>24/7 Premium Support</PartnerName>
              </PartnerCard>

              <PartnerCard>
                <PartnerIcon>
                  <FiCheckCircle />
                </PartnerIcon>
                <PartnerName>Top Quality Material</PartnerName>
              </PartnerCard>

              <PartnerCard>
                <PartnerIcon>
                  <FiShield />
                </PartnerIcon>
                <PartnerName>Certified Technician</PartnerName>
              </PartnerCard>

              <PartnerCard>
                <PartnerIcon>
                  <FiTrendingUp />
                </PartnerIcon>
                <PartnerName>Reliable Solutions</PartnerName>
              </PartnerCard>

              <PartnerCard>
                <PartnerIcon>
                  <FiCpu />
                </PartnerIcon>
                <PartnerName>Cutting-Edge Technology</PartnerName>
              </PartnerCard>

              <PartnerCard>
                <PartnerIcon>
                  <FiSliders />
                </PartnerIcon>
                <PartnerName>Tailored Connectivity Plans</PartnerName>
              </PartnerCard>
            </PartnerGrid>
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
  padding: 110px 0;
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
  max-width: 660px;
`;

const Kicker = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.9rem;
  opacity: 0.85;
`;

const Title = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  margin: 16px 0;
  line-height: 1.08;
`;

const Subtitle = styled.p`
  font-size: 1.08rem;
  line-height: 1.75;
  opacity: 0.92;
`;

const Section = styled.section`
  padding: 60px 0;
  position: relative;
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
`;

const SectionSurface = styled.div`
  border-radius: 24px;
  padding: 56px 46px;
  background: rgba(15, 20, 32, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 18px 60px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  margin: 22px 0;

  @media (max-width: 700px) {
    padding: 34px 18px;
    margin: 14px 0;
  }
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 26px;
  align-items: start;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div``;

const Right = styled.div`
  border-radius: 18px;
  padding: 18px 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const H2 = styled.h2`
  margin: 0 0 10px;
  font-size: 2rem;
`;

const P = styled.p`
  line-height: 1.75;
  opacity: 0.92;
`;

const Info = styled.div`
  margin-top: 18px;
  display: grid;
  gap: 14px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);

  svg {
    color: #5eead4;
    font-size: 22px;
    flex: 0 0 auto;
  }

  span {
    display: block;
    opacity: 0.88;
    margin-top: 4px;
  }
`;

const WhatToExpect = styled.div`
  margin-top: 18px;
  border-radius: 18px;
  padding: 16px 16px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);

  h3 {
    margin: 0 0 10px;
    display: inline-flex;
    align-items: center;
    gap: 10px;

    svg {
      color: #5eead4;
    }
  }

  ul {
    margin: 0;
    padding-left: 18px;
    line-height: 1.7;
    opacity: 0.92;
  }
`;

const SideImage = styled.div`
  margin-top: 18px;

  img {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const FormTitle = styled.h3`
  margin: 0 0 12px;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #5eead4;
  }
`;

const Form = styled.form`
  display: grid;
  gap: 12px;
`;

const Input = styled.input`
  padding: 14px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.18);
  color: white;

  &:focus {
    outline: none;
    border-color: rgba(94, 234, 212, 0.7);
  }
`;

const TextArea = styled.textarea`
  padding: 14px 14px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.18);
  color: white;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: rgba(94, 234, 212, 0.7);
  }
`;

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
`;

const Note = styled.p`
  margin: 12px 0 0;
  opacity: 0.85;
  line-height: 1.6;
`;

/* BECOME PARTNER */

const PartnerTop = styled.div`
  text-align: center;
  margin-bottom: 22px;
`;

const PartnerKicker = styled.p`
  margin: 0 0 8px;
  letter-spacing: 3px;
  font-weight: 900;
  font-size: 0.85rem;
  opacity: 0.85;
  text-transform: uppercase;
`;

const PartnerTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
`;

const PartnerLead = styled.p`
  margin: 10px auto 0;
  max-width: 860px;
  line-height: 1.7;
  opacity: 0.9;
`;

const PartnerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 18px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const PartnerCard = styled.div`
  border-radius: 18px;
  padding: 18px 16px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.25s ease;
  min-height: 110px;

  display: grid;
  align-content: start;
  gap: 10px;

  &:hover {
    transform: translateY(-6px);
    background: rgba(94, 234, 212, 0.07);
    border-color: rgba(94, 234, 212, 0.18);
  }
`;

const PartnerIcon = styled.div`
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(94, 234, 212, 0.1);
  border: 1px solid rgba(94, 234, 212, 0.2);

  svg {
    color: #5eead4;
    font-size: 20px;
  }
`;

const PartnerName = styled.h3`
  margin: 0;
  font-size: 1.05rem;
  font-weight: 900;
  line-height: 1.25;
`;
