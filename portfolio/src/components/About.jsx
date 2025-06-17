import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  color: #fff;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #64ffda;
`

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #8892b0;
  max-width: 800px;
  margin-bottom: 2rem;
`

const aboutText = `Hello and welcome to my portfolio!
I'm Rishabh Goel, a passionate Computer Science student at VIT Vellore, driven by an insatiable curiosity for technology and real-world problem solving.

Over the past year, I've gained substantial hands-on experience across both software development and DevOps:

As a Spring Boot Java Developer, I spent 1 year building and deploying scalable microservices, gaining deep exposure to RESTful APIs, application architecture, and backend design.

At DBS Bank, I worked as a DevOps Engineer Intern, where I contributed to system optimization and CI/CD automation, leveraging tools like Docker, Jenkins, and Git to improve deployment efficiency.

My earlier internship at Planetcast involved data analytics using Python, where I transformed data into actionable insights—solidifying my analytical and coding foundation.

With a unique combination of backend development and DevOps proficiency, I'm prepared to contribute across the software lifecycle—from building robust applications to automating their deployment and monitoring.

I'm always open to learning, growing, and collaborating with forward-thinking professionals. Let's connect and create something impactful!`;

const About = () => {
  return (
    <AboutContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </Title>
        <AboutText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {aboutText}
        </AboutText>
      </Content>
    </AboutContainer>
  )
}

export default About 