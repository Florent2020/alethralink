import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Section = styled.section`
  padding: ${({ $tight }) => ($tight ? "64px 0" : "92px 0")};
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    padding: ${({ $tight }) => ($tight ? "56px 0" : "76px 0")};
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.xl};
  box-shadow: ${({ theme }) => theme.shadow.soft};
  backdrop-filter: blur(10px);
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  font-weight: 650;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.white};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.brand},
    ${({ theme }) => theme.colors.accent}
  );
  box-shadow: ${({ theme }) => theme.shadow.glow};
  transition:
    transform 160ms ease,
    filter 160ms ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.04);
  }
  &:active {
    transform: translateY(0px);
  }
`;

export const GhostButton = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radii.pill};
  border: 1px solid ${({ theme }) => theme.colors.line};
  background: rgba(255, 255, 255, 0.04);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 650;
  transition:
    transform 160ms ease,
    background 160ms ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.07);
  }
`;
