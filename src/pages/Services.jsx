// import styled from "styled-components";
// import {
//   Container,
//   Section,
//   Card,
//   Button,
//   GhostButton,
// } from "../components/UI";

// // Swap these with your real assets:
// import cubesImg from "../assets/network-cubes.jpg";
// import fiberImg from "../assets/fiber.jpg";
// import ispImg from "../assets/isp.jpg";

// export default function Services() {
//   return (
//     <>
//       <Top>
//         <Container>
//           <TopGrid>
//             <TopText>
//               <Kicker>Services</Kicker>
//               <H1>
//                 Everything you need to build <span>reliable connectivity</span>.
//               </H1>
//               <Lead>
//                 From high-speed internet to secure network design and managed
//                 operations — AlethraLink helps businesses stay online, stable,
//                 and ready to scale.
//               </Lead>

//               <Actions>
//                 <Button as="a" href="/contact">
//                   Request a Quote
//                 </Button>
//                 <GhostButton to="/why">Why AlethraLink →</GhostButton>
//               </Actions>
//             </TopText>

//             <TopMedia>
//               <MediaCard>
//                 <img src={cubesImg} alt="Network infrastructure visual" />
//                 <MediaOverlay />
//                 <MediaLabel>
//                   <b>Enterprise-ready</b>
//                   <span>Designed for performance & resilience</span>
//                 </MediaLabel>
//               </MediaCard>
//             </TopMedia>
//           </TopGrid>
//         </Container>
//       </Top>

//       <Section $tight>
//         <Container>
//           <Grid>
//             <Service>
//               <Icon $tone="brand">⚡</Icon>
//               <h3>High-Speed Internet</h3>
//               <p>
//                 Fast, stable connectivity built for business workloads and
//                 growth.
//               </p>
//               <ul>
//                 <li>Business-grade plans</li>
//                 <li>Low latency routing</li>
//                 <li>Scalable bandwidth options</li>
//               </ul>
//             </Service>

//             <Service>
//               <Icon $tone="accent">🛡️</Icon>
//               <h3>Network Security</h3>
//               <p>
//                 Practical security that protects traffic, users, and critical
//                 systems.
//               </p>
//               <ul>
//                 <li>Firewall & policy design</li>
//                 <li>Secure segmentation</li>
//                 <li>Monitoring & alerts</li>
//               </ul>
//             </Service>

//             <Service>
//               <Icon $tone="brand2">🧠</Icon>
//               <h3>Managed Services</h3>
//               <p>
//                 Let us manage the network so your team can focus on the
//                 business.
//               </p>
//               <ul>
//                 <li>24/7 monitoring</li>
//                 <li>Incident response</li>
//                 <li>Performance optimization</li>
//               </ul>
//             </Service>

//             <Service>
//               <Icon $tone="brand">🛰️</Icon>
//               <h3>Wireless & Backup Links</h3>
//               <p>
//                 Resilient connectivity options to keep you online during
//                 outages.
//               </p>
//               <ul>
//                 <li>Backup connections</li>
//                 <li>Failover planning</li>
//                 <li>Uptime-focused design</li>
//               </ul>
//             </Service>

//             <Service>
//               <Icon $tone="accent">🧩</Icon>
//               <h3>Network Design & Consulting</h3>
//               <p>
//                 Architecture, planning, and upgrades done with clean
//                 documentation.
//               </p>
//               <ul>
//                 <li>Topology planning</li>
//                 <li>Equipment recommendations</li>
//                 <li>Migration strategy</li>
//               </ul>
//             </Service>

//             <Service>
//               <Icon $tone="brand2">📈</Icon>
//               <h3>Performance & SLA Support</h3>
//               <p>
//                 Predictable service delivery with transparent expectations and
//                 support.
//               </p>
//               <ul>
//                 <li>Clear SLAs</li>
//                 <li>Priority support options</li>
//                 <li>Regular reporting</li>
//               </ul>
//             </Service>
//           </Grid>
//         </Container>
//       </Section>

//       <Section>
//         <Container>
//           <Split>
//             <SplitMedia>
//               <img src={fiberImg} alt="Fiber connectivity" />
//             </SplitMedia>

//             <SplitCard>
//               <h2>How we deliver</h2>
//               <p>
//                 We approach telecom delivery like a product team: clear scope,
//                 clean execution, and proactive support. You’ll always know
//                 what’s happening, what’s next, and how to scale.
//               </p>

//               <Steps>
//                 <Step>
//                   <b>1. Assess</b>
//                   <span>We understand requirements & site constraints.</span>
//                 </Step>
//                 <Step>
//                   <b>2. Design</b>
//                   <span>We propose a reliable architecture & plan.</span>
//                 </Step>
//                 <Step>
//                   <b>3. Deploy</b>
//                   <span>We implement quickly with clear documentation.</span>
//                 </Step>
//                 <Step>
//                   <b>4. Support</b>
//                   <span>We monitor, optimize, and keep it stable.</span>
//                 </Step>
//               </Steps>

//               <GhostButton to="/contact">Talk to us →</GhostButton>
//             </SplitCard>
//           </Split>
//         </Container>
//       </Section>

//       <Section $tight>
//         <Container>
//           <CTA>
//             <CTAInner>
//               <CtaText>
//                 <h2>Not sure what plan fits your business?</h2>
//                 <p>
//                   Send us your location + needs. We’ll recommend the best setup
//                   and pricing.
//                 </p>
//               </CtaText>
//               <CtaActions>
//                 <Button as="a" href="/contact">
//                   Contact Sales
//                 </Button>
//                 <GhostButton to="/why">See our approach →</GhostButton>
//               </CtaActions>
//             </CTAInner>

//             <CtaBanner>
//               <img src={ispImg} alt="ISP network" />
//               <BannerOverlay />
//               <BannerText>
//                 <b>Built for teams</b>
//                 <span>Fast onboarding • Clear SLAs • 24/7 support</span>
//               </BannerText>
//             </CtaBanner>
//           </CTA>
//         </Container>
//       </Section>
//     </>
//   );
// }

// /* =========================
//    STYLED COMPONENTS
// ========================= */

// const Top = styled.section`
//   padding: 82px 0 30px;
//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     padding: 64px 0 22px;
//   }
// `;

// const TopGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.05fr 0.95fr;
//   gap: 22px;
//   align-items: center;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const TopText = styled.div``;

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
//   max-width: 62ch;
//   font-size: 16.5px;
// `;

// const Actions = styled.div`
//   margin-top: 18px;
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;
// `;

// const TopMedia = styled.div``;

// const MediaCard = styled(Card)`
//   position: relative;
//   overflow: hidden;
//   min-height: 380px;
//   border-radius: ${({ theme }) => theme.radii.xl};

//   img {
//     position: absolute;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: saturate(1.1) contrast(1.05);
//   }

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     min-height: 320px;
//   }
// `;

// const MediaOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background:
//     radial-gradient(
//       900px 420px at 30% 10%,
//       rgba(96, 165, 250, 0.32),
//       transparent 55%
//     ),
//     linear-gradient(180deg, rgba(11, 18, 32, 0.1), rgba(11, 18, 32, 0.92));
// `;

// const MediaLabel = styled.div`
//   position: absolute;
//   left: 16px;
//   right: 16px;
//   bottom: 16px;
//   padding: 14px 14px;
//   border-radius: ${({ theme }) => theme.radii.lg};
//   border: 1px solid rgba(255, 255, 255, 0.16);
//   background: rgba(255, 255, 255, 0.06);
//   backdrop-filter: blur(10px);

//   b {
//     display: block;
//   }
//   span {
//     display: block;
//     color: rgba(234, 240, 255, 0.75);
//     margin-top: 4px;
//     font-size: 13px;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 14px;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Service = styled(Card)`
//   padding: 18px;

//   h3 {
//     margin: 10px 0 6px;
//   }
//   p {
//     margin: 0 0 12px;
//     color: ${({ theme }) => theme.colors.muted};
//   }
//   ul {
//     margin: 0;
//     padding-left: 18px;
//     color: ${({ theme }) => theme.colors.muted};
//   }
//   li {
//     margin: 8px 0;
//   }
// `;

// const Icon = styled.div`
//   width: 46px;
//   height: 46px;
//   border-radius: 14px;
//   display: grid;
//   place-items: center;
//   font-size: 18px;
//   border: 1px solid ${({ theme }) => theme.colors.line};
//   background: ${({ $tone }) =>
//     $tone === "brand"
//       ? "rgba(96,165,250,0.14)"
//       : $tone === "accent"
//         ? "rgba(167,139,250,0.14)"
//         : "rgba(34,197,94,0.14)"};
// `;

// const Split = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 18px;
//   align-items: center;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const SplitMedia = styled(Card)`
//   overflow: hidden;
//   border-radius: ${({ theme }) => theme.radii.xl};
//   img {
//     width: 100%;
//     height: 380px;
//     object-fit: cover;
//   }
// `;

// const SplitCard = styled.div`
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

// const Steps = styled.div`
//   display: grid;
//   gap: 10px;
//   margin: 0 0 16px;
// `;

// const Step = styled.div`
//   padding: 12px 14px;
//   border: 1px solid ${({ theme }) => theme.colors.line};
//   border-radius: ${({ theme }) => theme.radii.lg};
//   background: rgba(255, 255, 255, 0.04);

//   b {
//     display: block;
//   }
//   span {
//     display: block;
//     margin-top: 4px;
//     color: ${({ theme }) => theme.colors.muted};
//     font-size: 13px;
//   }
// `;

// const CTA = styled(Card)`
//   overflow: hidden;
//   border-radius: ${({ theme }) => theme.radii.xl};
// `;

// const CTAInner = styled.div`
//   padding: 18px;
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 14px;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     flex-direction: column;
//     align-items: stretch;
//   }
// `;

// const CtaText = styled.div`
//   max-width: 72ch;

//   h2 {
//     margin: 0 0 6px;
//   }
//   p {
//     margin: 0;
//     color: ${({ theme }) => theme.colors.muted};
//   }
// `;

// const CtaActions = styled.div`
//   display: flex;
//   gap: 10px;
//   flex-wrap: wrap;
// `;

// const CtaBanner = styled.div`
//   position: relative;
//   height: 220px;
//   border-top: 1px solid ${({ theme }) => theme.colors.line};

//   img {
//     position: absolute;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const BannerOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background:
//     radial-gradient(
//       900px 420px at 30% 10%,
//       rgba(167, 139, 250, 0.28),
//       transparent 55%
//     ),
//     linear-gradient(180deg, rgba(11, 18, 32, 0.2), rgba(11, 18, 32, 0.9));
// `;

// const BannerText = styled.div`
//   position: absolute;
//   left: 16px;
//   bottom: 16px;
//   padding: 12px 14px;
//   border-radius: ${({ theme }) => theme.radii.lg};
//   border: 1px solid rgba(255, 255, 255, 0.16);
//   background: rgba(255, 255, 255, 0.06);
//   backdrop-filter: blur(10px);

//   b {
//     display: block;
//   }
//   span {
//     display: block;
//     margin-top: 3px;
//     color: rgba(234, 240, 255, 0.75);
//     font-size: 13px;
//   }
// `;

import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiSearch,
  FiSettings,
  FiRepeat,
  FiLayers,
  FiShield,
  FiTool,
  FiArrowRight,
  FiServer,
} from "react-icons/fi";

import heroImg from "../assets/network-cubes.jpg"; // <-- add/rename your image
import imgA from "../assets/network-cubes.jpg"; // <-- add/rename your image
import imgB from "../assets/fiber.jpg"; // <-- add/rename your image
// import imgC from "../assets/isp.jpg"; // <-- add/rename your image

import equipmentImg from "../assets/telecom-solutions-lightera-4.jpg";

export default function Services() {
  return (
    <>
      <Hero>
        <Overlay />
        <Container>
          <HeroContent>
            <Kicker>SERVICES</Kicker>
            <Title>Structured Network Engineering Services</Title>
            <Subtitle>
              AlethraLink delivers structured and flexible network engineering
              services tailored to ISP and enterprise environments.
            </Subtitle>

            <HeroButtons>
              <PrimaryBtn to="/contact">
                Request a Quote <FiArrowRight />
              </PrimaryBtn>
              <SecondaryBtn to="/why">Why AlethraLink</SecondaryBtn>
            </HeroButtons>
          </HeroContent>
        </Container>
      </Hero>

      <Section>
        <Container>
          <SectionSurface>
            <Center>
              <SectionTitle>Core Services</SectionTitle>
              <Lead>
                Reliable delivery, disciplined execution, and practical problem
                solving — across operations, troubleshooting, optimization, and
                migrations.
              </Lead>
            </Center>

            <Grid>
              <Card>
                <IconWrap>
                  <FiActivity />
                </IconWrap>
                <CardTitle>Network Operations Support</CardTitle>
                <List>
                  <li>Monitoring and operational support</li>
                  <li>Incident investigation and fault isolation</li>
                  <li>Escalation handling and root cause analysis</li>
                  <li>Proactive issue detection and prevention</li>
                </List>
              </Card>

              <Card>
                <IconWrap>
                  <FiSearch />
                </IconWrap>
                <CardTitle>Layer 2 / Layer 3 Troubleshooting</CardTitle>
                <List>
                  <li>VLAN, STP, and switching issues</li>
                  <li>Routing protocols: OSPF, BGP, static routing</li>
                  <li>Traffic analysis and packet inspection</li>
                  <li>Performance degradation troubleshooting</li>
                </List>
              </Card>

              <Card>
                <IconWrap>
                  <FiSettings />
                </IconWrap>
                <CardTitle>Configuration & Optimization</CardTitle>
                <List>
                  <li>Device configuration and validation</li>
                  <li>Performance tuning and optimization</li>
                  <li>Security and access configuration support</li>
                  <li>Configuration audits and standardization</li>
                </List>
              </Card>

              <Card>
                <IconWrap>
                  <FiRepeat />
                </IconWrap>
                <CardTitle>Migration & Upgrade Support</CardTitle>
                <List>
                  <li>Ethernet aggregation and routing upgrades</li>
                  <li>Hardware and software migration planning</li>
                  <li>Change execution and validation</li>
                  <li>Post-migration testing and stabilization</li>
                </List>
              </Card>

              <Card>
                <IconWrap>
                  <FiLayers />
                </IconWrap>
                <CardTitle>Network Design & Architecture</CardTitle>
                <List>
                  <li>Network topology and architecture design</li>
                  <li>Capacity planning and scalability assessments</li>
                  <li>Redundancy and high-availability planning</li>
                  <li>Best-practice design recommendations</li>
                </List>
              </Card>

              <Card>
                <IconWrap>
                  <FiShield />
                </IconWrap>
                <CardTitle>Standardization & Audits</CardTitle>
                <List>
                  <li>Best-practice configuration baselines</li>
                  <li>Operational documentation standards</li>
                  <li>Risk reduction and drift prevention</li>
                  <li>Ongoing improvement and governance</li>
                </List>
              </Card>
            </Grid>
          </SectionSurface>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionSurface>
            <EquipSplit>
              <EquipText>
                <Eyebrow>
                  <FiServer />
                  Equipment Coverage
                </Eyebrow>

                <SectionTitle>
                  Comprehensive Expertise in Networking Equipment
                </SectionTitle>

                <Paragraph>
                  We provide professional solutions for high-performance
                  networking equipment, including Juniper MX, QFX, ACX, and EX
                  Series, Cisco ASR and 3400/3600/3750 switches, Alcatel 7210,
                  7750, and 7360 models, as well as RAD, ADVA, and CIENA
                  devices.
                </Paragraph>

                <Paragraph>
                  Trust us for seamless setup, maintenance, and optimization of
                  your network infrastructure.
                </Paragraph>

                <BadgeRow>
                  <Badge>Juniper (MX / QFX / ACX / EX)</Badge>
                  <Badge>Cisco (ASR / 3400 / 3600 / 3750)</Badge>
                  <Badge>Alcatel (7210 / 7750 / 7360)</Badge>
                  <Badge>RAD</Badge>
                  <Badge>ADVA</Badge>
                  <Badge>CIENA</Badge>
                </BadgeRow>

                <PrimaryBtn to="/contact">
                  Talk to an Engineer <FiArrowRight />
                </PrimaryBtn>
              </EquipText>

              <EquipMedia>
                <img src={equipmentImg} alt="Networking equipment" />
              </EquipMedia>
            </EquipSplit>
          </SectionSurface>
        </Container>
      </Section>

      <Section>
        <Container>
          <Split>
            <TextBlock>
              <SectionTitle>Connectivity Solutions</SectionTitle>
              <Paragraph>
                We support ISP and enterprise connectivity services with a focus
                on stability, security, and operational clarity.
              </Paragraph>

              <FeatureList>
                <li>
                  <strong>Internet Access</strong>
                  <span>
                    Continuous, protected connectivity between customer LAN and
                    the Internet.
                  </span>
                </li>
                <li>
                  <strong>Point-to-Point (EPL)</strong>
                  <span>
                    Secure, high-speed Ethernet Virtual Connection between
                    dedicated UNIs.
                  </span>
                </li>
                <li>
                  <strong>Point-to-Multipoint (EVPL)</strong>
                  <span>
                    High-speed connectivity between three or more customer
                    locations.
                  </span>
                </li>
                <li>
                  <strong>Multipoint-to-Multipoint (EPLAN)</strong>
                  <span>
                    Extended LAN to Metro/WAN with multipoint connectivity.
                  </span>
                </li>
                <li>
                  <strong>Network-to-Network Interface</strong>
                  <span>
                    Carrier Access Services for seamless network integration.
                  </span>
                </li>
                <li>
                  <strong>Custom Solutions</strong>
                  <span>
                    Tailored networking solutions for your specific business
                    needs.
                  </span>
                </li>
              </FeatureList>

              <PrimaryBtn to="/contact">
                Talk to an Engineer <FiArrowRight />
              </PrimaryBtn>
            </TextBlock>

            <ImageStack>
              <img src={imgA} alt="Network architecture" />
              <img src={imgB} alt="Fiber connectivity" />
              {/* <img src={imgC} alt="ISP operations" /> */}
            </ImageStack>
          </Split>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionSurface>
            <Center>
              <SectionTitle>Equipment Expertise</SectionTitle>
              <Lead>
                Multi-vendor engineering support across leading platforms and
                technologies.
              </Lead>
            </Center>

            <VendorGrid>
              <VendorCard>
                <VendorTitle>
                  <FiTool /> Juniper Networks
                </VendorTitle>
                <VendorList>
                  <li>MX Series (MX 240, 480, 960)</li>
                  <li>QFX Series (QFX 5100-96S)</li>
                  <li>ACX Series (ACX 5448)</li>
                  <li>EX Series (EX 4200-24F)</li>
                </VendorList>
              </VendorCard>

              <VendorCard>
                <VendorTitle>
                  <FiTool /> Cisco Systems
                </VendorTitle>
                <VendorList>
                  <li>ASR Series (ASR 9010–9K, 7000–7K, ASR-920)</li>
                  <li>3400 Series (ME3400)</li>
                  <li>3600 Series</li>
                  <li>3750 Series</li>
                </VendorList>
              </VendorCard>

              <VendorCard>
                <VendorTitle>
                  <FiTool /> Nokia / Alcatel-Lucent
                </VendorTitle>
                <VendorList>
                  <li>7210 SAS</li>
                  <li>7750 SR</li>
                  <li>7360 ISAM</li>
                </VendorList>
              </VendorCard>

              <VendorCard>
                <VendorTitle>
                  <FiTool /> RAD / ADVA / CIENA
                </VendorTitle>
                <VendorList>
                  <li>RAD ETX Series (ETX-203A, 220A, 2I)</li>
                  <li>ADVA FSP Series (FPS150 variants)</li>
                  <li>CIENA Series (3931, 5171, 8180)</li>
                </VendorList>
              </VendorCard>
            </VendorGrid>
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
  padding: 95px 0;
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
  max-width: 560px;
`;

const Kicker = styled.p`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.9rem;
  opacity: 0.85;
`;

const Title = styled.h1`
  font-size: clamp(2.3rem, 4vw, 3.3rem);
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

const Center = styled.div`
  text-align: center;
  margin-bottom: 34px;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin: 0;
`;

const Lead = styled.p`
  margin: 12px auto 0;
  max-width: 860px;
  line-height: 1.75;
  opacity: 0.9;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  padding: 26px 22px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    background: rgba(94, 234, 212, 0.07);
  }
`;

const IconWrap = styled.div`
  font-size: 28px;
  color: #5eead4;
  margin-bottom: 12px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1.12rem;
`;

const EquipSplit = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 44px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 26px;
  }
`;

const EquipText = styled.div`
  max-width: 720px;

  ${PrimaryBtn} {
    margin-top: 18px;
  }
`;

const Eyebrow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(94, 234, 212, 0.08);
  border: 1px solid rgba(94, 234, 212, 0.22);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.78rem;
  margin-bottom: 14px;

  svg {
    color: #5eead4;
    font-size: 16px;
  }
`;

const BadgeRow = styled.div`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 999px;
  font-weight: 800;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.86);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const EquipMedia = styled.div`
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.08);

  img {
    width: 100%;
    height: 100%;
    max-height: 420px;
    object-fit: cover;
    display: block;
    transform: scale(1.02);
  }

  @media (max-width: 900px) {
    img {
      max-height: 320px;
    }
  }
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  opacity: 0.92;
  line-height: 1.7;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 44px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TextBlock = styled.div`
  max-width: 680px;
`;

const Paragraph = styled.p`
  line-height: 1.75;
  opacity: 0.92;
`;

const FeatureList = styled.ul`
  margin: 18px 0 22px;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 14px;

  li {
    padding: 14px 14px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.07);
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

const ImageStack = styled.div`
  display: grid;
  gap: 14px;

  img {
    width: 100%;
    border-radius: 18px;
    box-shadow: 0 18px 50px rgba(0, 0, 0, 0.42);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
`;

const VendorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const VendorCard = styled.div`
  border-radius: 18px;
  padding: 18px 18px;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const VendorTitle = styled.h3`
  margin: 0 0 10px;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: #5eead4;
  }
`;

const VendorList = styled.ul`
  margin: 0;
  padding-left: 18px;
  line-height: 1.7;
  opacity: 0.92;
`;
