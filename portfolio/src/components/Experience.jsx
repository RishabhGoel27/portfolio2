import styled from '@emotion/styled'
import { motion } from 'framer-motion'

const ExperienceContainer = styled.div`
  min-height: 100vh;
  padding: 4rem 2rem;
  color: #fff;
  display: flex;
  align-items: center;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #64ffda;
  text-align: center;
`

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #8892b0;
  text-align: center;
  margin-bottom: 3rem;
`

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

const ExperienceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  border-left: 3px solid #64ffda;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Role = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
`

const Company = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`

const Duration = styled.p`
  font-size: 1rem;
  color: #8892b0;
  margin-bottom: 1rem;
`

const Responsibilities = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  flex-grow: 1;
`

const Responsibility = styled.li`
  color: #8892b0;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    color: #64ffda;
    position: absolute;
    left: 0;
  }
`

const experiences = [
  {
    role: "SDE(Intern)",
    company: "DBS Bank Tech",
    duration: "June 2024 - June 2025",
    responsibilities: [
      "Infrastructure Enhancement: Assisting in maintaining and optimizing the company's cloud and on-premises infrastructure to improve reliability and scalability.",
      "CI/CD & Automation: Working on streamlining workflows by implementing and improving Continuous Integration/Continuous Deployment (CI/CD) pipelines to enhance software delivery efficiency.",
      "Collaboration & Monitoring: Collaborating with development and operations teams to improve system monitoring, logging, and performance tuning for seamless operations."
    ]
  },
  {
    role: "Data Scientist(Intern)",
    company: "Planetcast Media Services Limited",
    duration: "Aug 2023 - Oct 2023 · 3 months",
    responsibilities: [
      "Movie Recommendation Engine: Developed a recommendation system using machine learning techniques like collaborative filtering and content-based filtering.",
      "Data Science Expertise: Applied data preprocessing, feature engineering, and model evaluation to improve recommendation accuracy.",
      "Tech Stack & Deployment: Used Python (Pandas, Scikit-learn, TensorFlow), SQL, and used jupyter notebook."
    ]
  }
]

const Experience = () => {
  return (
    <ExperienceContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My professional journey and achievements
        </Subtitle>
        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Role>{exp.role}</Role>
              <Company>{exp.company}</Company>
              <Duration>{exp.duration}</Duration>
              <Responsibilities>
                {exp.responsibilities.map((resp, i) => (
                  <Responsibility key={i}>{resp}</Responsibility>
                ))}
              </Responsibilities>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Content>
    </ExperienceContainer>
  )
}

export default Experience