import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

import logoImg from "../assets/logo.jpg";

export default function Footer() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <Wrap>
      <Container>
        <Content>
          <Top>
            <Brand>
              <Logo to="/" onClick={close}>
                <img src={logoImg} alt="logo" />
              </Logo>
              <Tagline>SMART. SCALABLE. STRATEGIC.</Tagline>

              <Desc>
                We deliver structured, dependable network engineering services
                built on technical accuracy, transparent communication, and
                real-world operational experience.
              </Desc>

              <ContactLine href="mailto:info@alethralink.com">
                <FiMail />
                info@alethralink.com
                <FiArrowUpRight />
              </ContactLine>

              <SmallNote>
                For technical inquiries, partnership discussions, or trial
                engagement opportunities, please reach out via email.
              </SmallNote>
            </Brand>

            <Cols>
              <Col>
                <ColTitle>Quick Links</ColTitle>
                <Nav>
                  <NavItem to="/">Home</NavItem>
                  <NavItem to="/services">Services</NavItem>
                  <NavItem to="/why">Why AlethraLink</NavItem>
                  <NavItem to="/about">About</NavItem>
                  <NavItem to="/contact">Contact</NavItem>
                </Nav>
              </Col>

              <Col>
                <ColTitle>Why Europe</ColTitle>
                <List>
                  <li>Top Talent, Top Results</li>
                  <li>Quality Meets Value</li>
                  <li>Tech-Ready Infrastructure</li>
                  <li>Time Zone Advantage</li>
                  <li>Stable & Reliable</li>
                  <li>Engineering Excellence</li>
                </List>
              </Col>

              <Col>
                <ColTitle>What to Expect</ColTitle>
                <List>
                  <li>Direct technical communication</li>
                  <li>Clear discussion of requirements</li>
                  <li>Structured trial engagement</li>
                  <li>Transparent timelines</li>
                </List>
              </Col>
            </Cols>
          </Top>

          <Bottom>
            <Copy>
              © {new Date().getFullYear()} AlethraLink. All rights reserved.
            </Copy>

            <BottomRight>
              Designed &amp; Developed by{" "}
              <DevLink
                href="https://florent-hajdari.com/"
                target="_blank"
                rel="noreferrer"
              >
                Florent Hajdari <FiArrowUpRight />
              </DevLink>
            </BottomRight>
          </Bottom>
        </Content>
      </Container>
    </Wrap>
  );
}

/* ========================= STYLES ========================= */

const Wrap = styled.footer`
  position: relative;
  padding: 80px 0 60px;
  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Content = styled.div`
  padding-top: 20px;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1.9fr;
  gap: 44px;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div``;

const Logo = styled(NavLink)`
  img {
    width: 150px !important;
  }
`;

const Tagline = styled.div`
  margin-top: 10px;
  font-weight: 800;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-size: 0.8rem;
  opacity: 0.75;
`;

const Desc = styled.p`
  margin-top: 14px;
  line-height: 1.7;
  opacity: 0.85;
  max-width: 520px;
`;

const ContactLine = styled.a`
  margin-top: 18px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: white;
  font-weight: 700;
  transition: 0.2s ease;

  svg {
    color: #5eead4;
  }

  &:hover {
    color: #5eead4;
  }
`;

const SmallNote = styled.p`
  margin-top: 10px;
  opacity: 0.65;
  font-size: 0.95rem;
`;

const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.div``;

const ColTitle = styled.h4`
  margin-bottom: 14px;
  font-weight: 800;
`;

const Nav = styled.nav`
  display: grid;
  gap: 10px;
`;

const NavItem = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: 0.2s ease;

  &:hover {
    color: #5eead4;
  }
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 10px;
  color: rgba(255, 255, 255, 0.8);
`;

const Bottom = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 14px;
`;

const Copy = styled.div`
  opacity: 0.6;
  font-size: 0.9rem;
`;

const BottomRight = styled.div`
  font-size: 0.95rem;
  opacity: 0.75;
`;

const DevLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: white;
  font-weight: 700;
  text-decoration: none;
  transition: 0.25s ease;

  svg {
    font-size: 0.95em;
    opacity: 0.85;
    transform: translateY(-0.5px);
    transition: 0.25s ease;
  }

  &:hover {
    color: #5eead4;
  }

  &:hover svg {
    opacity: 1;
    transform: translate(2px, -2px);
  }
`;
