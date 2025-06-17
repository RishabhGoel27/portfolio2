import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa'

// Use the same background and accent color as the rest of the site
const BACKGROUND = '#22304a' // Modern deep blue
const ACCENT = '#64ffda'    // Example: main accent color
const ICON_BG = '#181c1f'   // Slightly darker for icon circles
const CARD_BG = '#232b38'

const ContactWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContactHeading = styled.h2`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2.2rem;
`

const ContactCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const ContactCard = styled.div`
  background: ${CARD_BG};
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  border-left: 4px solid ${ACCENT};
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 0;
  min-height: 220px;
  height: 220px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 6px 24px rgba(100,255,218,0.13);
  }
`

const CardIcon = styled.div`
  background: #181c1f;
  color: ${ACCENT};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  margin-bottom: 1.1rem;
`

const CardLabel = styled.div`
  color: #fff;
  font-size: 1.13rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
`

const CardValue = styled.div`
  color: #b2bec3;
  font-size: 1.05rem;
  word-break: break-all;
  margin-bottom: 0.2rem;
`

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactHeading>Contact Me</ContactHeading>
      <ContactCardsGrid>
        <ContactCard tabIndex={0} title="Email">
          <CardIcon><FaEnvelope /></CardIcon>
          <CardLabel>Email</CardLabel>
          <CardValue>rishabh27goel@gmail.com</CardValue>
        </ContactCard>
        <ContactCard tabIndex={0} title="Phone">
          <CardIcon><FaPhone /></CardIcon>
          <CardLabel>Phone</CardLabel>
          <CardValue>+91 7404640271</CardValue>
        </ContactCard>
        <CardLink href="https://www.linkedin.com/in/rishabhgoel27/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <ContactCard as="div">
            <CardIcon><FaLinkedin /></CardIcon>
            <CardLabel>LinkedIn</CardLabel>
            <CardValue>linkedin.com/in/rishabhgoel27</CardValue>
          </ContactCard>
        </CardLink>
        <CardLink href="https://github.com/RishabhGoel27" target="_blank" rel="noopener noreferrer" title="GitHub">
          <ContactCard as="div">
            <CardIcon><FaGithub /></CardIcon>
            <CardLabel>GitHub</CardLabel>
            <CardValue>github.com/RishabhGoel27</CardValue>
          </ContactCard>
        </CardLink>
      </ContactCardsGrid>
    </ContactWrapper>
  )
}

export default Contact