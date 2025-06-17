import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { FaAward, FaCertificate } from 'react-icons/fa'

const AwardsContainer = styled.div`
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

const AwardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`

const AwardCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`

const IconWrapper = styled.div`
  font-size: 2rem;
  color: #64ffda;
  flex-shrink: 0;
`

const AwardContent = styled.div`
  flex-grow: 1;
`

const AwardTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 0.5rem;
`

const awards = [
  {
    icon: <FaCertificate />,
    title: 'Oracle Cloud Infrastructure 2024 Generative AI Certified Professional'
  },
  {
    icon: <FaCertificate />,
    title: 'AWS Certified Solutions Architect - Associate'
  },
  {
    icon: <FaCertificate />,
    title: 'AWS Certified Cloud Practitioner'
  },
  {
    icon: <FaAward />,
    title: 'Published a paper "Precision Monitoring of Healthcare using Big Data and Java from Social Networking and Wearable Devices" in IEEE Xplore'
  },
  {
    icon: <FaAward />,
    title: 'All India Rank 2 in The Python Challenge Organized by INTERNSHALA'
  },
  {
    icon: <FaAward />,
    title: 'Appeared in an interactive session on German Language on 94.3 MY FM Radio Division'
  }
]

const Awards = () => {
  return (
    <AwardsContainer>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Awards and Certificates
        </Title>
        <AwardsGrid>
          {awards.map((award, index) => (
            <AwardCard
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <IconWrapper>{award.icon}</IconWrapper>
              <AwardContent>
                <AwardTitle>{award.title}</AwardTitle>
              </AwardContent>
            </AwardCard>
          ))}
        </AwardsGrid>
      </Content>
    </AwardsContainer>
  )
}

export default Awards 