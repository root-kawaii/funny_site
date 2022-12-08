import {Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import styled from '@emotion/styled'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
`
const ParagraphE = styled.p`
  text-align: right;
  text-indent: 1em;
`


const Posts = () => (
  <Layout title="Posts">
      <Heading as="h3" fontSize={20} mb={4}>
        
      </Heading>
      <SimpleGrid columns={[1]} gap={12}>
        <Section>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            The way of the Torii
          </Heading>
        <Paragraph>
This is my safe-space
        </Paragraph>
        <ParagraphE>
root-kawaii
        </ParagraphE>
        </Section>
        </SimpleGrid>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

