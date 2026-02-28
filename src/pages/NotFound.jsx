import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FiArrowLeft, FiHome, FiSearch } from "react-icons/fi";

export default function NotFound() {
  return (
    <Wrap>
      <BgGlow />

      <Container>
        <Card>
          <Top>
            <Code>404</Code>
            <Tag>
              <Dot />
              Page not found
            </Tag>
          </Top>

          <Title>Oops… this route doesn’t exist.</Title>
          <Subtitle>
            The page you’re looking for might have been moved, renamed, or never
            existed. No worries — let’s get you back on track.
          </Subtitle>

          <Actions>
            <Primary to="/">
              <FiHome />
              Go Home
            </Primary>

            <Secondary to="/contact">
              <FiSearch />
              Contact Us
            </Secondary>

            <Ghost to={-1}>
              <FiArrowLeft />
              Go Back
            </Ghost>
          </Actions>

          <Divider />

          <Hint>
            Tip: Check the URL for typos, or use the menu to navigate.
          </Hint>
        </Card>

        <Orbits aria-hidden="true">
          <Orbit />
          <Orbit2 />
          <Orbit3 />
        </Orbits>
      </Container>
    </Wrap>
  );
}

/* =========================
   ANIMATIONS
========================= */

const float = keyframes`
  0%   { transform: translateY(0px); }
  50%  { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const glowPulse = keyframes`
  0%   { opacity: .45; transform: scale(1); }
  50%  { opacity: .7; transform: scale(1.08); }
  100% { opacity: .45; transform: scale(1); }
`;

/* =========================
   STYLES
========================= */

const Wrap = styled.main`
  min-height: calc(100vh - 80px);
  position: relative;
  overflow: hidden;
  display: grid;
  place-items: center;
  padding: 70px 20px;

  background: radial-gradient(circle at top left, #111b2e, #0b1220 60%);
  color: white;
`;

const BgGlow = styled.div`
  position: absolute;
  inset: -200px;
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(94, 234, 212, 0.18),
      transparent 55%
    ),
    radial-gradient(
      circle at 80% 30%,
      rgba(59, 130, 246, 0.16),
      transparent 55%
    ),
    radial-gradient(
      circle at 55% 85%,
      rgba(168, 85, 247, 0.12),
      transparent 55%
    );
  filter: blur(20px);
  animation: ${glowPulse} 6s ease-in-out infinite;
  pointer-events: none;
`;

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  position: relative;
`;

const Card = styled.section`
  position: relative;
  border-radius: 26px;
  padding: 56px 46px;

  background: rgba(15, 20, 32, 0.74);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 22px 70px rgba(0, 0, 0, 0.55),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);

  animation: ${float} 4.5s ease-in-out infinite;

  @media (max-width: 700px) {
    padding: 34px 18px;
  }
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`;

const Code = styled.div`
  font-size: clamp(3.4rem, 6vw, 5.2rem);
  font-weight: 950;
  letter-spacing: -1px;
  line-height: 1;
  background: linear-gradient(90deg, #5eead4, #60a5fa, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: 0.3px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #5eead4;
  box-shadow: 0 0 0 6px rgba(94, 234, 212, 0.14);
`;

const Title = styled.h1`
  margin: 18px 0 10px;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  line-height: 1.12;
`;

const Subtitle = styled.p`
  margin: 0;
  max-width: 720px;
  line-height: 1.75;
  opacity: 0.92;
`;

const Actions = styled.div`
  margin-top: 22px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const ButtonBase = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 14px 18px;
  border-radius: 14px;
  font-weight: 900;
  text-decoration: none;
  transition: 0.25s ease;

  svg {
    font-size: 18px;
  }
`;

const Primary = styled(ButtonBase)`
  background: #5eead4;
  color: #0b1220;

  &:hover {
    transform: translateY(-2px);
    background: #2dd4bf;
  }
`;

const Secondary = styled(ButtonBase)`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: white;

  &:hover {
    transform: translateY(-2px);
    background: rgba(94, 234, 212, 0.08);
    border-color: rgba(94, 234, 212, 0.2);
  }
`;

const Ghost = styled(ButtonBase)`
  background: transparent;
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.14);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(94, 234, 212, 0.22);
    background: rgba(255, 255, 255, 0.03);
  }
`;

const Divider = styled.div`
  margin: 26px 0 12px;
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
`;

const Hint = styled.p`
  margin: 0;
  opacity: 0.82;
  line-height: 1.6;
`;

/* Decorative orbits */

const Orbits = styled.div`
  position: absolute;
  inset: -40px;
  pointer-events: none;
`;

const Orbit = styled.div`
  position: absolute;
  top: 10%;
  right: -140px;
  width: 360px;
  height: 360px;
  border-radius: 999px;
  border: 1px solid rgba(94, 234, 212, 0.14);
  animation: ${spin} 22s linear infinite;
`;

const Orbit2 = styled.div`
  position: absolute;
  bottom: 8%;
  left: -180px;
  width: 420px;
  height: 420px;
  border-radius: 999px;
  border: 1px solid rgba(96, 165, 250, 0.14);
  animation: ${spin} 32s linear infinite reverse;
`;

const Orbit3 = styled.div`
  position: absolute;
  top: 35%;
  left: 40%;
  width: 260px;
  height: 260px;
  border-radius: 999px;
  border: 1px solid rgba(167, 139, 250, 0.12);
  animation: ${spin} 26s linear infinite;
  opacity: 0.85;
`;
