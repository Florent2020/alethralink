import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiTarget,
  FiEye,
  FiHeart,
  FiShield,
  FiTrendingUp,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

// import SEO from "../components/SEO";

import heroImg from "../assets/engineer.jpg"; // <-- add/rename your image
import imgStory from "../assets/engineer.jpg"; // <-- add/rename your image

export default function About() {
  return (
    <>
      {/* <SEO
        title="About AlethraLink | Structured Network Engineering"
        description="AlethraLink is a European network engineering company delivering structured, stable, and scalable telecommunications solutions."
        path="/about"
      /> */}

      <Hero>
        <Overlay />
        <Container>
          <HeroContent>
            <Kicker>ABOUT US</Kicker>
            <Title>From Vision to Reality: The AlethraLink Journey</Title>
            <Subtitle>
              AlethraLink was founded on a clear principle: network engineering
              should be reliable, transparent, and aligned with real business
              needs — not unnecessary complexity.
            </Subtitle>

            <HeroButtons>
              <PrimaryBtn to="/contact">
                Become a Partner <FiArrowRight />
              </PrimaryBtn>
              <SecondaryBtn to="/services">Explore Services</SecondaryBtn>
            </HeroButtons>
          </HeroContent>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionSurface>
            <Split>
              <Text>
                <H2>Our Story</H2>
                <P>
                  Our journey began with a shared vision among experienced
                  network engineers and a seasoned manager who saw an
                  opportunity to revolutionize network engineering services.
                  Founded on the principles of technical excellence and
                  client-focused solutions, we've built our reputation on
                  delivering seamless telecommunication solutions that drive
                  business success.
                </P>
                <P>
                  With decades of combined expertise across leading
                  telecommunications environments, we specialize in designing,
                  optimizing, and supporting secure, scalable network
                  infrastructures that drive operational efficiency and
                  long-term growth.
                </P>
                <P>
                  At AlethraLink, we turn complex systems into strategic assets
                  — delivering solutions that perform today and scale
                  confidently for tomorrow.
                </P>
              </Text>

              <Image>
                <img src={imgStory} alt="Network engineer" />
              </Image>
            </Split>
          </SectionSurface>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionSurface>
            <Center>
              <H2>Who We Are</H2>
              <P className="lead">
                Experts in Seamless Connectivity — resilient, scalable, and
                high-performance connectivity solutions for modern enterprises.
              </P>
            </Center>

            <Grid>
              <InfoCard>
                <FiTrendingUp />
                <h3>Capability</h3>
                <p>
                  End-to-end migrations, mission-critical deployments,
                  multi-vendor integration, and enterprise architectures built
                  for resilience and long-term growth.
                </p>
              </InfoCard>
              <InfoCard>
                <FiShield />
                <h3>Security & Stability</h3>
                <p>
                  Future-ready networks designed for long-term performance with
                  disciplined engineering practices.
                </p>
              </InfoCard>
              <InfoCard>
                <FiUsers />
                <h3>Partnership</h3>
                <p>
                  We integrate as an extension of your technical team with clear
                  communication and structured delivery.
                </p>
              </InfoCard>
            </Grid>
          </SectionSurface>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionSurface>
            <Grid2>
              <Block>
                <BlockTitle>
                  <FiEye /> Our Vision
                </BlockTitle>
                <P>
                  We envision a future where secure and well-structured network
                  infrastructures enable organizations to operate reliably at
                  scale, reduce operational friction, and support sustainable
                  growth through disciplined engineering practices.
                </P>
              </Block>

              <Block>
                <BlockTitle>
                  <FiTarget /> Our Mission
                </BlockTitle>
                <P>
                  We provide dependable network engineering services through
                  technical accuracy, structured processes, and transparent
                  communication — helping clients manage complexity and maintain
                  long-term performance.
                </P>
              </Block>
            </Grid2>

            <Divider />

            <Center style={{ marginBottom: 18 }}>
              <H2>Our Values</H2>
            </Center>

            <ValuesGrid>
              <ValueCard>
                <FiTrendingUp />
                <h3>Innovation</h3>
                <P>
                  Embracing technological advancement to stay at the forefront
                  of telecommunications.
                </P>
              </ValueCard>
              <ValueCard>
                <FiHeart />
                <h3>Reliability & Quality</h3>
                <p>
                  Delivering dependable, high-performance solutions with the
                  highest standards of service excellence.
                </p>
              </ValueCard>
              <ValueCard>
                <FiTarget />
                <h3>Security & Privacy</h3>
                <p>
                  WProtecting customer data and communications through rigorous
                  security practices.
                </p>
              </ValueCard>
              <ValueCard>
                <FiShield />
                <h3>Sustainability</h3>
                <p>
                  Promoting responsible, environmentally conscious solutions
                  that support long-term growth.
                </p>
              </ValueCard>
              <ValueCard>
                <FiUsers />
                <h3>Inclusivity</h3>
                <p>
                  Enabling accessible, scalable connectivity for diverse
                  businesses and communities.
                </p>
              </ValueCard>
              <ValueCard>
                <FiTrendingUp />
                <h3>Continuous Improvement</h3>
                <p>
                  Constantly refining our processes, technologies, and services
                  to create lasting value.
                </p>
              </ValueCard>
            </ValuesGrid>

            <CtaRow>
              <PrimaryBtn to="/contact">
                Work With Us <FiArrowRight />
              </PrimaryBtn>
              <SecondaryBtn to="/why">Why AlethraLink</SecondaryBtn>
            </CtaRow>
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
  max-width: 630px;
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

const HeroButtons = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
`;

const PrimaryBtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-radius: 14px;
  background: #5eead4;
  color: #0b1220;
  font-weight: 900;
  text-decoration: none;
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    background: #2dd4bf;
  }
`;

const SecondaryBtn = styled(Link)`
  padding: 14px 18px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: white;
  text-decoration: none;
  font-weight: 700;
  transition: 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
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
  gap: 38px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div``;

const Image = styled.div`
  img {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const Center = styled.div`
  text-align: center;
  margin-bottom: 28px;
`;

const H2 = styled.h2`
  margin: 0 0 14px;
  font-size: 2.1rem;
`;

const P = styled.p`
  line-height: 1.75;
  opacity: 0.92;

  &.lead {
    max-width: 860px;
    margin: 10px auto 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  border-radius: 18px;
  padding: 22px 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.25s ease;

  svg {
    color: #5eead4;
    font-size: 26px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 0;
    opacity: 0.9;
    line-height: 1.7;
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(94, 234, 212, 0.07);
  }
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Block = styled.div`
  border-radius: 18px;
  padding: 20px 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const BlockTitle = styled.h3`
  margin: 0 0 10px;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #5eead4;
  }
`;

const Divider = styled.div`
  height: 1px;
  margin: 22px 0;
  background: rgba(255, 255, 255, 0.08);
  margin-top: 2.5rem !important;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  border-radius: 16px;
  padding: 14px 14px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  svg {
    color: #5eead4;
    font-size: 26px;
    margin-top: 1rem;
  }

  h3 {
    font-weight: 500;
    opacity: 0.95;
    margin: 0.3rem 0 0rem;
    font-size: 1.3rem;
  }

  p {
    text-align: center;
    margin-top: 0.3rem;
  }
`;

const CtaRow = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;
