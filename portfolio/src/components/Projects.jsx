import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const ProjectsContainer = styled.div`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #64ffda;
`

const TechStack = styled.p`
  color: #8892b0;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`

const ProjectDescription = styled.p`
  color: #8892b0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const ProjectLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #64ffda;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`

const projects = [
  {
    title: 'Fantasy Cricket Game',
    techStack: 'Python, MongoDB, SQLite3',
    description: 'Fantasy Cricket is an online game where you create a virtual team of real Cricket players and score points depending on how your chosen players perform in real life matches. To win a tournament, you must try and get the maximum Points and the No. 1 rank amongst other participants. Fantasy cricket project gives virtual team visualization of database for real cricket players and their score points in various matches throughout their career.',
    link: 'https://github.com/RishabhGoel27/Fantasy-Cricket-Game/tree/Fantasy-Cricket'
  },
  {
    title: 'Movie Recommendation Engine',
    techStack: 'Python, Pandas, Scikit-learn, TensorFlow, SQL',
    description: 'This engine takes the name of a movie and recommend more movies on the basis of same genre, overview, crew, cast etc parameters which are collectively called as tags. This model was built using visualisation tools such as matplotlib and data science tools. This type of engine is known as Content based or Demographic engine.',
    link: 'https://github.com/RishabhGoel27/Movie-Recommendation-Engine'
  }
]

const Projects = () => {
  return (
    <ProjectsContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </Title>
        <ProjectGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectTitle>{project.title}</ProjectTitle>
              <TechStack><strong>Tech Stack:</strong> {project.techStack}</TechStack>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub /> View Project
              </ProjectLink>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </Content>
    </ProjectsContainer>
  )
}

export default Projects 