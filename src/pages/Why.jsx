// import styled from "styled-components";
// import {
//   Container,
//   Section,
//   Card,
//   Button,
//   GhostButton,
// } from "../components/UI";

// // Swap asset names as needed:
// import trafficImg from "../assets/traffic.jpg"; // you can use any "network/traffic" image
// import dcImg from "../assets/data-center.jpg";

// export default function Why() {
//   return (
//     <>
//       <HeaderSection>
//         <Container>
//           <HeaderGrid>
//             <HeaderText>
//               <Kicker>Why AlethraLink</Kicker>
//               <H1>
//                 Built around <span>reliability</span>, delivered with{" "}
//                 <span>clarity</span>.
//               </H1>
//               <Lead>
//                 Telecom shouldn’t be confusing. We keep things simple:
//                 transparent plans, clean architecture, and proactive support —
//                 so your team can move fast with confidence.
//               </Lead>

//               <Actions>
//                 <Button as="a" href="/contact">
//                   Talk to us
//                 </Button>
//                 <GhostButton to="/services">View Services →</GhostButton>
//               </Actions>
//             </HeaderText>

//             <HeaderCard>
//               <img src={trafficImg} alt="Network performance" />
//               <Overlay />
//               <HeaderCardInner>
//                 <b>Reliability-first mindset</b>
//                 <span>Uptime, monitoring, and fast response</span>
//               </HeaderCardInner>
//             </HeaderCard>
//           </HeaderGrid>
//         </Container>
//       </HeaderSection>

//       <Section $tight>
//         <Container>
//           <ReasonGrid>
//             <Reason>
//               <Tag $tone="brand">01</Tag>
//               <h3>Clear SLAs & predictable delivery</h3>
//               <p>
//                 No vague promises. We set expectations, document everything, and
//                 deliver what we agree.
//               </p>
//             </Reason>
//             <Reason>
//               <Tag $tone="accent">02</Tag>
//               <h3>Modern architecture, scalable choices</h3>
//               <p>
//                 We design networks that grow with your needs — without
//                 complicated rebuilds.
//               </p>
//             </Reason>
//             <Reason>
//               <Tag $tone="brand2">03</Tag>
//               <h3>Proactive monitoring</h3>
//               <p>
//                 We don’t wait for things to break. We monitor and optimize
//                 continuously.
//               </p>
//             </Reason>
//             <Reason>
//               <Tag $tone="brand">04</Tag>
//               <h3>Security-first thinking</h3>
//               <p>
//                 Segmentation, policies, and best-practice safeguards baked into
//                 the plan.
//               </p>
//             </Reason>
//             <Reason>
//               <Tag $tone="accent">05</Tag>
//               <h3>Fast onboarding</h3>
//               <p>
//                 Smooth setup with clear steps — no chaos, no missing
//                 documentation.
//               </p>
//             </Reason>
//             <Reason>
//               <Tag $tone="brand2">06</Tag>
//               <h3>Human support that actually helps</h3>
//               <p>
//                 Direct access to experts who speak in solutions, not jargon.
//               </p>
//             </Reason>
//           </ReasonGrid>
//         </Container>
//       </Section>

//       <Section>
//         <Container>
//           <TwoCol>
//             <Media>
//               <img src={dcImg} alt="Data center and infrastructure" />
//             </Media>

//             <Panel>
//               <h2>Our promise</h2>
//               <p>
//                 We aim to be the easiest telecom partner you’ve worked with:
//                 responsive, transparent, and reliable. If you value uptime,
//                 clarity, and long-term stability — we’re a great match.
//               </p>

//               <PromiseList>
//                 <li>
//                   <b>Transparent pricing:</b> clear scope, no surprises.
//                 </li>
//                 <li>
//                   <b>Clean documentation:</b> you’ll always know what’s
//                   deployed.
//                 </li>
//                 <li>
//                   <b>Proactive support:</b> we prevent issues before they impact
//                   teams.
//                 </li>
//               </PromiseList>

//               <Buttons>
//                 <Button as="a" href="/contact">
//                   Get started
//                 </Button>
//                 <GhostButton to="/about">Meet AlethraLink →</GhostButton>
//               </Buttons>
//             </Panel>
//           </TwoCol>
//         </Container>
//       </Section>

//       <Section $tight>
//         <Container>
//           <BottomCTA>
//             <h2>Want a custom plan for your business?</h2>
//             <p>
//               Share your location, number of users, and required uptime — we’ll
//               propose the best approach.
//             </p>
//             <Button as="a" href="/contact">
//               Contact us
//             </Button>
//           </BottomCTA>
//         </Container>
//       </Section>
//     </>
//   );
// }

// /* =========================
//    STYLED COMPONENTS
// ========================= */

// const HeaderSection = styled.section`
//   padding: 82px 0 30px;
//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     padding: 64px 0 22px;
//   }
// `;

// const HeaderGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.05fr 0.95fr;
//   gap: 20px;
//   align-items: center;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const HeaderText = styled.div``;

// const Kicker = styled.div`
//   display: inline-flex;
//   padding: 8px 12px;
//   border-radius: ${({ theme }) => theme.radii.pill};
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid ${({ theme }) => theme.colors.line};
//   color: ${({ theme }) => theme.colors.muted};
//   font-weight: 650;
//   font-size: 13px;
// `;

// const H1 = styled.h1`
//   margin: 14px 0 10px;
//   font-size: clamp(34px, 4.1vw, 52px);
//   line-height: 1.05;

//   span {
//     background: linear-gradient(
//       135deg,
//       ${({ theme }) => theme.colors.brand},
//       ${({ theme }) => theme.colors.accent}
//     );
//     -webkit-background-clip: text;
//     background-clip: text;
//     color: transparent;
//   }
// `;

// const Lead = styled.p`
//   margin: 0;
//   color: ${({ theme }) => theme.colors.muted};
//   max-width: 66ch;
//   font-size: 16.5px;
// `;

// const Actions = styled.div`
//   margin-top: 18px;
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;
// `;

// const HeaderCard = styled(Card)`
//   position: relative;
//   overflow: hidden;
//   border-radius: ${({ theme }) => theme.radii.xl};
//   min-height: 380px;

//   img {
//     position: absolute;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: saturate(1.08) contrast(1.05);
//   }

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     min-height: 320px;
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background:
//     radial-gradient(
//       900px 420px at 30% 10%,
//       rgba(96, 165, 250, 0.28),
//       transparent 55%
//     ),
//     linear-gradient(180deg, rgba(11, 18, 32, 0.1), rgba(11, 18, 32, 0.92));
// `;

// const HeaderCardInner = styled.div`
//   position: absolute;
//   left: 16px;
//   right: 16px;
//   bottom: 16px;
//   padding: 14px;
//   border-radius: ${({ theme }) => theme.radii.lg};
//   border: 1px solid rgba(255, 255, 255, 0.16);
//   background: rgba(255, 255, 255, 0.06);
//   backdrop-filter: blur(10px);

//   b {
//     display: block;
//   }
//   span {
//     display: block;
//     margin-top: 4px;
//     color: rgba(234, 240, 255, 0.75);
//     font-size: 13px;
//   }
// `;

// const ReasonGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 14px;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Reason = styled(Card)`
//   padding: 18px;

//   h3 {
//     margin: 10px 0 6px;
//   }
//   p {
//     margin: 0;
//     color: ${({ theme }) => theme.colors.muted};
//   }
// `;

// const Tag = styled.div`
//   width: fit-content;
//   padding: 6px 10px;
//   border-radius: ${({ theme }) => theme.radii.pill};
//   font-weight: 800;
//   border: 1px solid ${({ theme }) => theme.colors.line};
//   background: ${({ $tone }) =>
//     $tone === "brand"
//       ? "rgba(96,165,250,0.14)"
//       : $tone === "accent"
//         ? "rgba(167,139,250,0.14)"
//         : "rgba(34,197,94,0.14)"};
// `;

// const TwoCol = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 18px;
//   align-items: center;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Media = styled(Card)`
//   overflow: hidden;
//   border-radius: ${({ theme }) => theme.radii.xl};

//   img {
//     width: 100%;
//     height: 380px;
//     object-fit: cover;
//   }
// `;

// const Panel = styled.div`
//   padding: 10px;

//   h2 {
//     margin: 0 0 8px;
//     font-size: 30px;
//   }
//   p {
//     margin: 0 0 14px;
//     color: ${({ theme }) => theme.colors.muted};
//   }
// `;

// const PromiseList = styled.ul`
//   margin: 0 0 16px;
//   padding-left: 18px;
//   color: ${({ theme }) => theme.colors.muted};

//   li {
//     margin: 10px 0;
//   }
//   b {
//     color: ${({ theme }) => theme.colors.text};
//   }
// `;

// const Buttons = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;
// `;

// const BottomCTA = styled(Card)`
//   padding: 18px;
//   text-align: center;

//   h2 {
//     margin: 0 0 6px;
//   }
//   p {
//     margin: 0 0 14px;
//     color: ${({ theme }) => theme.colors.muted};
//   }
// `;

import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiCheckCircle,
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiGlobe,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";

import heroImg from "../assets/office.jpg"; // <-- add/rename your image
import imgTeam from "../assets/office.png"; // <-- add/rename your image

export default function Why() {
  return (
    <>
      <Hero>
        <Overlay />
        <Container>
          <HeroContent>
            <Kicker>WHY ALETHRALINK</Kicker>
            <Title>
              Engineering-First. Vendor-Agnostic. Long-Term Focused.
            </Title>
            <Subtitle>
              Built by network engineers with real production experience in
              service-provider and enterprise environments — focused on
              implementation discipline, operational stability, and practical
              problem-solving.
            </Subtitle>

            <HeroButtons>
              <PrimaryBtn to="/contact">
                Start a Conversation <FiArrowRight />
              </PrimaryBtn>
              <SecondaryBtn to="/services">View Services</SecondaryBtn>
            </HeroButtons>
          </HeroContent>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionSurface>
            <Split>
              <Text>
                <H2>Our Experience</H2>
                <P>
                  With over 40 years of combined industry expertise, AlethraLink
                  has delivered complex migrations, large-scale implementations,
                  and seamless multi-vendor integrations.
                </P>
                <P>
                  Through close collaboration with leading telecommunications
                  providers, we deliver scalable, secure, and reliable network
                  solutions tailored to each client—built to be efficient,
                  resilient, and future-ready.
                </P>
                <P>
                  Our engineers have supported ISP and enterprise networks,
                  including CEN and CTBH environments — Ethernet aggregation,
                  routing migrations, backbone troubleshooting, and structured
                  operational support.
                </P>

                <BadgeRow>
                  <Badge>
                    <FiUsers /> Real production experience
                  </Badge>
                  <Badge>
                    <FiShield /> Operational stability focus
                  </Badge>
                  <Badge>
                    <FiTrendingUp /> Scalable delivery
                  </Badge>
                </BadgeRow>
              </Text>

              <Image>
                <img src={imgTeam} alt="Team collaboration" />
              </Image>
            </Split>
          </SectionSurface>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionSurface>
            <Center>
              <H2>What Makes Us Different</H2>
              <P className="lead">
                Vendor-agnostic support, deep technical knowledge, structured
                and cost-conscious delivery — with long-term partnership
                mindset.
              </P>
            </Center>

            <Grid>
              <Card>
                <Icon>
                  <FiCheckCircle />
                </Icon>
                <h3>Engineering-First Approach</h3>
                <p>
                  Practical implementation discipline — not unnecessary
                  complexity.
                </p>
              </Card>

              <Card>
                <Icon>
                  <FiGlobe />
                </Icon>
                <h3>Vendor-Agnostic Support</h3>
                <p>
                  Multi-vendor environments without bias or forced redesign.
                </p>
              </Card>

              <Card>
                <Icon>
                  <FiZap />
                </Icon>
                <h3>Deep Technical Knowledge</h3>
                <p>
                  Hands-on expertise across leading platforms and technologies.
                </p>
              </Card>

              <Card>
                <Icon>
                  <FiTrendingUp />
                </Icon>
                <h3>Structured Delivery</h3>
                <p>
                  Clear documentation standards and direct technical
                  communication.
                </p>
              </Card>

              <Card>
                <Icon>
                  <FiShield />
                </Icon>
                <h3>Long-Term Focus</h3>
                <p>
                  Stable partnerships that integrate seamlessly with internal
                  teams.
                </p>
              </Card>
            </Grid>
          </SectionSurface>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionSurface>
            <Center>
              <H2>Why Europe</H2>
              <P className="lead">
                Smart. Scalable. Strategic. A strong destination for engineering
                services — balancing quality, cost-efficiency, and strategic
                location.
              </P>
            </Center>

            <WhyList>
              <li>
                <strong>Top Talent, Top Results</strong>
                <span>Highly skilled STEM professionals ready to deliver.</span>
              </li>
              <li>
                <strong>Speak Your Language</strong>
                <span>
                  Excellent English proficiency for smooth collaboration.
                </span>
              </li>
              <li>
                <strong>Quality Meets Value</strong>
                <span>Premium services at competitive costs.</span>
              </li>
              <li>
                <strong>Tech-Ready Infrastructure</strong>
                <span>Modern IT infrastructure built for global busines.</span>
              </li>
              <li>
                <strong>Time Zone Advantage</strong>
                <span>
                  Real-time collaboration with Europe & overlap with the U.S.
                </span>
              </li>
              <li>
                <strong>Stable & Reliable</strong>
                <span>Secure environment for long-term partnerships.</span>
              </li>
              <li>
                <strong>Motivated Workforce</strong>
                <span>
                  Qualified professionals delivering measurable value and cost
                  savings.
                </span>
              </li>
              <li>
                <strong>Mature ICT Market</strong>
                <span>
                  Proven growth of ICT businesses over the past decade.
                </span>
              </li>
              <li>
                <strong>Strategic Location</strong>
                <span>Competitive hub for ICT and BPO services.</span>
              </li>
              <li>
                <strong>Engineering Excellence</strong>
                <span>Deep expertise across multi-vendor environments.</span>
              </li>
            </WhyList>

            <CtaRow>
              <PrimaryBtn to="/contact">
                Let’s Discuss Your Needs <FiArrowRight />
              </PrimaryBtn>
              <SecondaryBtn to="/about">About Us</SecondaryBtn>
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
    rgba(10, 14, 22, 0.94)
  );
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 730px;
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
  padding: 90px 0;
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
  align-items: start;

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
    height: 360px;
    object-fit: cover;

    @media (max-width: 900px) {
      height: 100%;
    }
  }
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

const BadgeRow = styled.div`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  opacity: 0.95;

  svg {
    color: #5eead4;
  }
`;

const Center = styled.div`
  text-align: center;
  margin-bottom: 28px;
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

const Card = styled.div`
  border-radius: 18px;
  padding: 22px 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    background: rgba(94, 234, 212, 0.07);
  }

  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 0;
    opacity: 0.9;
    line-height: 1.7;
  }
`;

const Icon = styled.div`
  font-size: 26px;
  color: #5eead4;
  margin-bottom: 10px;
`;

const WhyList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;

  li {
    padding: 14px 14px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  strong {
    display: block;
    margin-bottom: 6px;
  }

  span {
    display: block;
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const CtaRow = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;
