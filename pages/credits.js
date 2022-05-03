import {Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import styled from '@emotion/styled'
import { Link } from '@chakra-ui/react'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
`


const Posts = () => (
  <Layout title="Credits">
      <Heading as="h3" fontSize={20} mb={4}>
        Credits
      </Heading>
      <Section>
      <Container>
      <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
          Artists
      </Heading>    
          <Paragraph>
          The Artists that helped me with designs and suggestions<br></br>
          I link their contacts<br></br>
      </Paragraph>
      <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
          Code
      </Heading>    
          <Paragraph>
          This Site was made following the code of Takuya Matsuyama.<br></br>
          Here are Takuya&apos;s repo and site.<br></br>
      </Paragraph>
      <Link href="https://github.com/craftzdog">Repo<br></br></Link>
      <Link href="https://www.craftz.dog/">Site</Link>
      <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
          Resources
      </Heading>    
          <Paragraph>
          Every resource I used to style my site:<br></br>
      </Paragraph>
      <Link href="https://www.flaticon.com/free-icons/board-game">Board game icons created by Freepik - Flaticon<br></br></Link>
      <Link href="https://www.flaticon.com/free-icons/chip" >Chip icons created by Smashicons - Flaticon<br></br></Link>
      <Link href="https://www.flaticon.com/free-icons/brain">Brain game icons created by Freepik - Flaticon<br></br></Link>
      <Link href="https://www.flaticon.com/free-icons/drug">Drug game icons created by Freepik - Flaticon<br></br></Link>
      <Link href="https://www.flaticon.com/free-icons/equalizer">Equalizer game icons created by Freepik - Flaticon<br></br></Link>
      <Link href="https://www.flaticon.com/free-icons/algorithm">Algorithm game icons created by Freepik - Flaticon<br></br></Link>
      <Link href="https://www.flaticon.com/free-icons/design">Design game icons created by Freepik - Flaticon<br></br></Link>
      <Link href="https://www.flaticon.com/free-icons/dojo">Dojo game icons created by Freepik - Flaticon<br></br></Link>


      </Container>
      </Section>


  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

