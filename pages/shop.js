import Layout from "../components/layouts/article"
import { Heading } from "@chakra-ui/react"
import { SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-item"
import Section from "../components/section"
import tshirt from '../components/images/copy.jpg'



const shop = () => (
    <Layout title="Merch">
        <Heading as="h3" fontSize={20} mb={4}>
          Merch  
        </Heading>
        <SimpleGrid columns={[1]} gap={12}>
        <Section>
          <WorkGridItem id="java_game" title="T-shirt" thumbnail={tshirt}>
            Comfort t-shirt<br></br>For everyday use<br></br>
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="java_game" title="T-shirt" thumbnail={tshirt}>
            Comfort t-shirt<br></br>For everyday use<br></br>
          </WorkGridItem>
        </Section>
        </SimpleGrid>
        </Layout>
)

export default shop