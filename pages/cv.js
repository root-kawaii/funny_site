
import {Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailS from '../components/images/Regge_Matteo-1.jpg'


//var data = new Date();
//var NiceRandomNumber = data.getDate() + data.getMonth() + data.getFullYear()
//var index = NiceRandomNumber%item.length





const cv = () => {
    return(
    <Layout title="CV">
        <Heading as="h3" fontSize={20} mb={4}>
          Curriculum Vitae
        </Heading>
        <SimpleGrid columns={[1]} gap={12}>
        <Section>
          <WorkGridItem id="works" title="Last update October 2021" thumbnail={thumbnailS}>
          </WorkGridItem>
        </Section>
        </SimpleGrid>
        </Layout>
    

    )
    
}

export default cv