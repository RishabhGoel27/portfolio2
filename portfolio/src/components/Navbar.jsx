import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(motion.h1)`
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
`

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
`

const NavLink = styled(motion.li)`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
    
    &:hover {
      color: #64ffda;
    }
  }
`

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Nav>
      <NavContainer>
        <Logo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          Rishabh Goel
        </Logo>
        <NavLinks>
          {['About', 'Skills', 'Projects', 'Experience', 'Awards', 'Contact'].map((item) => (
            <NavLink
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * ['About', 'Skills', 'Projects', 'Experience', 'Awards', 'Contact'].indexOf(item) }}
            >
              <a href={`#${item.toLowerCase()}`} onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}>
                {item}
              </a>
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  )
}

export default Navbar 