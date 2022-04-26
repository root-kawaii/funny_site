import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail='../images/bruh.jpeg'>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        </SimpleGrid>
        </Container>
        </Layout>
)

export default Works