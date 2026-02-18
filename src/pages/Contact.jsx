// import { useState } from "react";
// import styled from "styled-components";
// import { Container, Section, Card, Button } from "../components/UI";

// // Swap with your preferred image:
// import dcImg from "../assets/data-center.jpg";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const [status, setStatus] = useState({ type: "", msg: "" });

//   function onChange(e) {
//     setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
//   }

//   function onSubmit(e) {
//     e.preventDefault();

//     // Demo behavior (no backend yet)
//     if (!form.name || !form.email || !form.message) {
//       setStatus({
//         type: "error",
//         msg: "Please fill name, email, and message.",
//       });
//       return;
//     }
//     setStatus({ type: "success", msg: "Message sent! We’ll reply shortly." });
//     setForm({ name: "", email: "", company: "", message: "" });
//   }

//   return (
//     <>
//       <Hero>
//         <Container>
//           <HeroGrid>
//             <HeroText>
//               <Kicker>Contact</Kicker>
//               <H1>
//                 Let’s talk about your <span>connectivity</span>.
//               </H1>
//               <Lead>
//                 Send us your needs and we’ll recommend the best plan and setup.
//                 Reliable, scalable, and clear.
//               </Lead>

//               <Info>
//                 <InfoRow>
//                   <Label>Sales</Label>
//                   <Value>sales@alethralink.com</Value>
//                 </InfoRow>
//                 <InfoRow>
//                   <Label>Support</Label>
//                   <Value>support@alethralink.com</Value>
//                 </InfoRow>
//                 <InfoRow>
//                   <Label>Hours</Label>
//                   <Value>Mon–Fri • 09:00–17:00</Value>
//                 </InfoRow>
//               </Info>
//             </HeroText>

//             <HeroMedia>
//               <MediaCard>
//                 <img src={dcImg} alt="Data center" />
//                 <Overlay />
//                 <MediaText>
//                   <b>Fast response</b>
//                   <span>Clear steps • Transparent delivery</span>
//                 </MediaText>
//               </MediaCard>
//             </HeroMedia>
//           </HeroGrid>
//         </Container>
//       </Hero>

//       <Section $tight>
//         <Container>
//           <FormGrid>
//             <FormCard as="form" onSubmit={onSubmit}>
//               <FormTitle>Send a message</FormTitle>
//               <FormSub>
//                 Tell us what you need. We’ll get back with a plan and pricing.
//               </FormSub>

//               <Row>
//                 <Field>
//                   <span>Name *</span>
//                   <input
//                     name="name"
//                     value={form.name}
//                     onChange={onChange}
//                     placeholder="Your name"
//                   />
//                 </Field>

//                 <Field>
//                   <span>Email *</span>
//                   <input
//                     name="email"
//                     value={form.email}
//                     onChange={onChange}
//                     placeholder="you@company.com"
//                     type="email"
//                   />
//                 </Field>
//               </Row>

//               <Row>
//                 <Field>
//                   <span>Company</span>
//                   <input
//                     name="company"
//                     value={form.company}
//                     onChange={onChange}
//                     placeholder="Company name"
//                   />
//                 </Field>

//                 <Field>
//                   <span>Topic</span>
//                   <select name="topic" disabled>
//                     <option>General inquiry (demo)</option>
//                   </select>
//                 </Field>
//               </Row>

//               <Field>
//                 <span>Message *</span>
//                 <textarea
//                   name="message"
//                   value={form.message}
//                   onChange={onChange}
//                   placeholder="Tell us about your location, number of users, and the service you need..."
//                   rows={6}
//                 />
//               </Field>

//               {status.msg ? (
//                 <Status $type={status.type}>{status.msg}</Status>
//               ) : null}

//               <Actions>
//                 <Button type="submit">Send</Button>
//               </Actions>
//             </FormCard>

//             <Side>
//               <SideCard>
//                 <h3>What to include</h3>
//                 <ul>
//                   <li>City / location</li>
//                   <li>Business type</li>
//                   <li>Users / devices</li>
//                   <li>Required uptime</li>
//                   <li>Current provider (optional)</li>
//                 </ul>
//               </SideCard>

//               <SideCard>
//                 <h3>Typical next steps</h3>
//                 <Steps>
//                   <li>
//                     <b>1)</b> Quick assessment call
//                   </li>
//                   <li>
//                     <b>2)</b> Proposal + pricing
//                   </li>
//                   <li>
//                     <b>3)</b> Installation & activation
//                   </li>
//                   <li>
//                     <b>4)</b> Monitoring & support
//                   </li>
//                 </Steps>
//               </SideCard>
//             </Side>
//           </FormGrid>
//         </Container>
//       </Section>
//     </>
//   );
// }

// /* =========================
//    STYLED COMPONENTS
// ========================= */

// const Hero = styled.section`
//   padding: 82px 0 30px;
//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     padding: 64px 0 22px;
//   }
// `;

// const HeroGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.05fr 0.95fr;
//   gap: 20px;
//   align-items: center;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const HeroText = styled.div``;

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

// const Info = styled.div`
//   margin-top: 18px;
//   display: grid;
//   gap: 10px;
//   max-width: 420px;
// `;

// const InfoRow = styled.div`
//   padding: 12px 14px;
//   border-radius: ${({ theme }) => theme.radii.lg};
//   border: 1px solid ${({ theme }) => theme.colors.line};
//   background: rgba(255, 255, 255, 0.04);
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   gap: 12px;
// `;

// const Label = styled.span`
//   color: ${({ theme }) => theme.colors.muted};
//   font-weight: 650;
// `;

// const Value = styled.span`
//   color: ${({ theme }) => theme.colors.text};
//   font-weight: 750;
// `;

// const HeroMedia = styled.div``;

// const MediaCard = styled(Card)`
//   position: relative;
//   overflow: hidden;
//   border-radius: ${({ theme }) => theme.radii.xl};
//   min-height: 360px;

//   img {
//     position: absolute;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     filter: saturate(1.1) contrast(1.05);
//   }

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     min-height: 300px;
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background:
//     radial-gradient(
//       900px 420px at 30% 10%,
//       rgba(96, 165, 250, 0.26),
//       transparent 55%
//     ),
//     linear-gradient(180deg, rgba(11, 18, 32, 0.18), rgba(11, 18, 32, 0.92));
// `;

// const MediaText = styled.div`
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

// const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1.15fr 0.85fr;
//   gap: 14px;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FormCard = styled(Card)`
//   padding: 18px;
// `;

// const FormTitle = styled.h2`
//   margin: 0 0 6px;
// `;

// const FormSub = styled.p`
//   margin: 0 0 14px;
//   color: ${({ theme }) => theme.colors.muted};
// `;

// const Row = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 12px;

//   @media (max-width: ${({ theme }) => theme.bp.sm}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const Field = styled.label`
//   display: grid;
//   gap: 8px;
//   margin-top: 12px;

//   span {
//     color: ${({ theme }) => theme.colors.muted};
//     font-weight: 650;
//     font-size: 13px;
//   }

//   input,
//   textarea,
//   select {
//     border-radius: 14px;
//     border: 1px solid ${({ theme }) => theme.colors.line};
//     background: rgba(255, 255, 255, 0.04);
//     color: ${({ theme }) => theme.colors.text};
//     padding: 12px 12px;
//     outline: none;
//   }

//   textarea {
//     resize: vertical;
//     min-height: 140px;
//   }

//   input:focus,
//   textarea:focus {
//     border-color: rgba(96, 165, 250, 0.45);
//     box-shadow: 0 0 0 4px rgba(96, 165, 250, 0.12);
//   }
// `;

// const Actions = styled.div`
//   margin-top: 14px;
//   display: flex;
//   justify-content: flex-end;

//   @media (max-width: ${({ theme }) => theme.bp.md}) {
//     justify-content: flex-start;
//   }
// `;

// const Status = styled.div`
//   margin-top: 12px;
//   padding: 12px 14px;
//   border-radius: ${({ theme }) => theme.radii.lg};
//   border: 1px solid
//     ${({ theme, $type }) =>
//       $type === "success" ? "rgba(34,197,94,0.35)" : "rgba(239,68,68,0.35)"};
//   background: ${({ $type }) =>
//     $type === "success" ? "rgba(34,197,94,0.10)" : "rgba(239,68,68,0.10)"};
// `;

// const Side = styled.div`
//   display: grid;
//   gap: 14px;
// `;

// const SideCard = styled(Card)`
//   padding: 18px;

//   h3 {
//     margin: 0 0 10px;
//   }
//   ul {
//     margin: 0;
//     padding-left: 18px;
//     color: ${({ theme }) => theme.colors.muted};
//   }
//   li {
//     margin: 10px 0;
//   }
// `;

// const Steps = styled.ul`
//   margin: 0;
//   padding-left: 0;
//   list-style: none;

//   li {
//     display: flex;
//     gap: 10px;
//     align-items: baseline;
//     padding: 10px 12px;
//     border: 1px solid ${({ theme }) => theme.colors.line};
//     border-radius: ${({ theme }) => theme.radii.lg};
//     background: rgba(255, 255, 255, 0.04);
//     margin: 10px 0;
//     color: ${({ theme }) => theme.colors.muted};
//   }
//   b {
//     color: ${({ theme }) => theme.colors.text};
//   }
// `;

import styled from "styled-components";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";

import heroImg from "../assets/data-center.jpg"; // <-- add/rename your image
import sideImg from "../assets/data-center.jpg"; // <-- you already have this

export default function Contact() {
  return (
    <>
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
  max-width: 860px;
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
