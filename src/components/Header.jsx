import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logoImg from "../assets/logo.jpg";
import logoMobImg from "../assets/logo-mobile.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <Wrap>
      <Inner>
        {/* <Logo to="/" onClick={close}>
          <img src={logoImg} alt="AlethraLink logo" />
        </Logo> */}

        <Logo to="/" onClick={close}>
          <DesktopLogo src={logoImg} alt="Alethralink logo" />
          <MobileLogo src={logoMobImg} alt="Alethralink icon" />
        </Logo>

        <Right>
          <DesktopNav>
            <Item to="/" end>
              Home
            </Item>
            <Item to="/services">Services</Item>
            <Item to="/why">Why AlethraLink</Item>
            <Item to="/about">About</Item>
            <Item to="/contact">Contact</Item>
          </DesktopNav>

          <Toggle
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XIcon /> : <BurgerIcon />}
          </Toggle>
        </Right>
      </Inner>

      <MobilePanel $open={open}>
        <MobileNav>
          <MobileItem to="/" end onClick={close}>
            Home
          </MobileItem>
          <MobileItem to="/services" onClick={close}>
            Services
          </MobileItem>
          <MobileItem to="/why" onClick={close}>
            Why AlethraLink
          </MobileItem>
          <MobileItem to="/about" onClick={close}>
            About
          </MobileItem>
          <MobileItem to="/contact" onClick={close}>
            Contact
          </MobileItem>
        </MobileNav>
      </MobilePanel>
    </Wrap>
  );
}

/* =======================
   STYLES (same file)
======================= */

const Wrap = styled.header`
  position: sticky;
  top: 0;
  z-index: 200;
  background: rgba(10, 14, 22, 0.75);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

// const Logo = styled(NavLink)`
//   width: 150px;
// `;

const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const DesktopLogo = styled.img`
  height: 38px;

  @media (max-width: 920px) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  height: 34px;
  display: none;

  @media (max-width: 920px) {
    display: block;
    transition: transform 0.2s ease;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 920px) {
    display: none;
  }
`;

const Item = styled(NavLink)`
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  font-weight: 650;
  font-size: 0.95rem;
  position: relative;
  padding: 8px 6px;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #fff;
  }

  &.active::after {
    content: "";
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 2px;
    height: 2px;
    border-radius: 999px;
    background: rgba(94, 234, 212, 0.9);
  }
`;

const Toggle = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
  align-items: center;
  justify-content: center;

  @media (max-width: 920px) {
    display: inline-flex;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }
`;

const MobilePanel = styled.div`
  display: none;

  @media (max-width: 920px) {
    display: block;
    overflow: hidden;

    /* top -> bottom open/close animation */
    max-height: ${({ $open }) => ($open ? "420px" : "0px")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-10px)"};

    transition:
      max-height 420ms cubic-bezier(0.2, 0.8, 0.2, 1),
      opacity 240ms ease,
      transform 240ms ease;

    border-top: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(10, 14, 22, 0.92);
    backdrop-filter: blur(14px);
  }
`;

const MobileNav = styled.nav`
  padding: 12px 20px 18px;
  display: grid;
  gap: 10px;
`;

const MobileItem = styled(NavLink)`
  color: rgba(255, 255, 255, 0.92);
  text-decoration: none;
  font-weight: 700;
  padding: 12px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  &.active {
    border-color: rgba(94, 234, 212, 0.5);
    background: rgba(94, 234, 212, 0.08);
  }
`;

/* =======================
   ICONS (no extra libs)
======================= */

function BurgerIcon() {
  return (
    <IconBox aria-hidden="true">
      <Bar style={{ top: 2 }} />
      <Bar style={{ top: 8 }} />
      <Bar style={{ top: 14 }} />
    </IconBox>
  );
}

function XIcon() {
  return (
    <IconBox aria-hidden="true">
      <XBar style={{ transform: "rotate(45deg)" }} />
      <XBar style={{ transform: "rotate(-45deg)" }} />
    </IconBox>
  );
}

const IconBox = styled.span`
  position: relative;
  width: 18px;
  height: 18px;
  display: inline-block;
`;

const Bar = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
`;

const XBar = styled.span`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.92);
`;
