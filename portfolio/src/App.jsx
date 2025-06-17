import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import styled from '@emotion/styled'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Contact from './components/Contact'

const CanvasContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
`

const Section = styled.section`
  min-height: 100vh;
  scroll-margin-top: 80px;
  padding: 0.7rem 0 0.7rem 0;
  @media (max-width: 600px) {
    padding: 0.5rem 0 0.5rem 0;
  }
`

const HomeSection = styled(Section)`
  padding-bottom: 0.5rem;
`

const LastSection = styled(Section)`
  min-height: unset;
  padding-bottom: 0;
  margin-bottom: 1.2rem;
`

const AboutSection = styled(Section)`
  padding-top: 0;
  margin-top: -0.5rem;
`

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls enableZoom={false} />
    </>
  )
}

function App() {
  return (
    <>
      <CanvasContainer>
        <Canvas>
          <Scene />
        </Canvas>
      </CanvasContainer>
      <ContentContainer>
        <Navbar />
        <HomeSection id="home">
          <Home />
        </HomeSection>
        <AboutSection id="about">
          <About />
        </AboutSection>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="projects">
          <Projects />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="awards">
          <Awards />
        </Section>
        <LastSection id="contact">
          <Contact />
        </LastSection>
      </ContentContainer>
    </>
  )
}

export default App 