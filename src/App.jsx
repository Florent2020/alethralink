import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Why from "./pages/Why";
import About from "./pages/About";
import Contact from "./pages/Contact";

const theme = {
  colors: {
    bg: "#0B1220",
    surface: "rgba(255,255,255,0.06)",
    surface2: "rgba(255,255,255,0.10)",
    text: "#EAF0FF",
    muted: "rgba(234,240,255,0.72)",
    line: "rgba(234,240,255,0.12)",
    brand: "#60A5FA",
    brand2: "#22C55E",
    accent: "#A78BFA",
    white: "#ffffff",
  },
  radii: { lg: "18px", xl: "24px", pill: "999px" },
  shadow: {
    soft: "0 20px 60px rgba(0,0,0,0.35)",
    glow: "0 0 0 1px rgba(96,165,250,0.25), 0 18px 60px rgba(96,165,250,0.12)",
  },
  layout: { container: "1160px" },
  bp: { sm: "640px", md: "900px", lg: "1200px" },
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html, body { height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial;
    background:
      radial-gradient(1200px 600px at 10% 0%, rgba(96,165,250,0.18), transparent 60%),
      radial-gradient(900px 500px at 90% 10%, rgba(167,139,250,0.16), transparent 55%),
      ${theme.colors.bg};
    color: ${theme.colors.text};
    line-height: 1.5;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }
  img { max-width: 100%; display: block; }
  button, input, textarea { font: inherit; }
  ::selection { background: rgba(96,165,250,0.35); }
`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppShell>
        <Header />
        <Main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why" element={<Why />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
      </AppShell>
    </ThemeProvider>
  );
}

const AppShell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;
