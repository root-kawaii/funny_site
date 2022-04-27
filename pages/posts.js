import {Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailS from '../components/images/maestri.png'
import thumbnailZ from '../components/images/brainss.png'





const Posts = () => (
  <Layout title="Posts">
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={12}>
        <Section>
          <WorkGridItem id="java_game" title="Porrate" thumbnail={thumbnailS}>
            Sesso e sessualita sono troppo fraintese<br></br>la fisica prende per estremo perche dice per assurdo<br></br>
            Giappone culturalmente arretrato<br></br>
            Lasagne overrated<br></br>
            Le malattie mentali sono la schizofrenia
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="java_game" title="Porrate" thumbnail={thumbnailZ}>
            Sesso e sessualita sono troppo fraintese<br></br>La fisica prende per estremo perche dice per assurdo<br></br>
            Giappone culturalmente arretrato<br></br>
            Lasagne overrated<br></br>
            Le malattie mentali sono la schizofrenia
          </WorkGridItem>
        </Section>
        </SimpleGrid>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'