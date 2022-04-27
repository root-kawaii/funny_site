import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailS from '../components/images/maestri.png'
import thumbnailZ from '../components/images/brainss.png'
import nesss from '../components/images/logo.png'

const Works = () => {
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={12}>
        <Section>
          <WorkGridItem id="java_game" title="Maestri del rinascimento" thumbnail={thumbnailS}>
            Developed a computer playable implementation of the board game "Maestri del rinascimento" as a project for my Thesis.
            Online-play features and Model-Controller-View approach.
            Valued 30/30
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="java_game" title="Neurograph" thumbnail={thumbnailZ}>
          This paper presents a thorough introduction to the state of the art of Neurographs explaining the basic concepts and highlighting the most important features and techniques available today.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ness" title="Ness" thumbnail={nesss}>
            Literally me
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ness" title="Ness" thumbnail={nesss}>
            Literally me
          </WorkGridItem>
        </Section>
        </SimpleGrid>
        </Container>
        </Layout>
)
}

export default Works