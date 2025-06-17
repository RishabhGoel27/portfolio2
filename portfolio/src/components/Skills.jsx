import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaCloud, FaLaptopCode } from 'react-icons/fa'

const SkillsContainer = styled.div`
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
  margin-bottom: 3rem;
  color: #64ffda;
  text-align: center;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 1rem;
`

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`

const SkillList = styled.p`
  color: #8892b0;
  line-height: 1.6;
`

const skills = [
  {
    icon: <FaCode />,
    title: 'Programming Languages',
    list: 'C/C++, Java, Python, SQL, YAML'
  },
  {
    icon: <FaDatabase />,
    title: 'Databases',
    list: 'MySQL, MongoDB, PostgreSQL'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud & DevOps',
    list: 'AWS, Docker, Kubernetes, CI/CD, Ansible, Jenkins'
  },
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    list: 'Springboot, HTML, CSS, Javascript'
  }
]

const Skills = () => {
  return (
    <SkillsContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <IconWrapper>{skill.icon}</IconWrapper>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>{skill.list}</SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Content>
    </SkillsContainer>
  )
}

export default Skills 