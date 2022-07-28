import {
  Link,
  Container,
  Box,
  Heading,
  chakra,
Button} from '@chakra-ui/react'


import {IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { List,ListItem } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'
import Section from '../components/section'
import Image1 from '../components/images/ass5.jpg'



const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})


import { ChevronRightIcon } from '@chakra-ui/icons'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
`
const BioSection = styled(Box)`
padding-left: 3.4em;
text-indent: -3.4em;
`
const BioYear = styled.span`
font-weight: bold;
margin-right: 1em;
`

const Home = () => {
  return(
    <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title"  marginTop={3}>
            Matteo Regge
          </Heading>
          <p>I write stuff</p>
        </Box>
        <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src={Image1}
              alt="Profile"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
      </Box>
        <Container align='center'>
      </Container>
      <Section delay={0.1}>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
          Work
        </Heading>
        <Paragraph>
        Currently enrolled in Artificial Intelligence at POLIMI.
Highly motivated student looking for new opportunities.
My Hobbies vary from practicing every kind of sport to Literature and Cinema.
I plan on getting a Degree in Philosophy, in the mean time I study it on my own.
<br></br>
My area of interest is Artifical Intelligence and more generally the understanding of concepts such as intelligence, conciousness and awareness.
Currently working on {''}
        <NextLink href="https://github.com/root-kawaii/funny_site">
        <Link href="https://github.com/root-kawaii/funny_site">funny_site</Link>
        </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
        <NextLink href="/works">
        <Button rightIcon={<ChevronRightIcon></ChevronRightIcon>} color={"#000000"}variant='outline'>
          My portfolio
        </Button>
        </NextLink>
        </Box>
        <Box align="center" my={4}>
        </Box>
      </Section>
      <Section delay={0.2}>
      <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
          Bio
        </Heading>
        <BioSection>
        <BioYear>
          2021
        </BioYear>
          On my way to a Master Degree in Artifical Intelligence 
        </BioSection>
        <BioSection>
        <BioYear>
          2021
        </BioYear>
          Bachelor in Computer Science Engineering
        </BioSection>
        <BioSection>
        <BioYear>
          2018
        </BioYear>
          Italian Graduation
        </BioSection>
        <BioSection>
        <BioYear>
          2017
        </BioYear>
          Canadian Graduation with Honors: AP Scholar
        </BioSection>
        <BioSection>
        <BioYear>
          1999
        </BioYear>
          I was born in Monza, Italy
        </BioSection>
        <Section>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
          Interests
        </Heading>
        <BioSection>
        <BioYear>
          Reading Book:
        </BioYear>
        <Link href="https://en.wikipedia.org/wiki/Kafka_on_the_Shore">Kafka on the shore </Link>
          by Haruki Murakami
        </BioSection>
        <BioSection>
        <BioYear>
        Reading Manga:
        </BioYear>
        <Link href="https://en.wikipedia.org/wiki/Vagabond_(manga)">Vagabond </Link>
          by Takehiko Inoue
        </BioSection>
        <BioSection>
        <BioYear>
        Current favorite movie:
        </BioYear>
        <Link href="https://www.youtube.com/watch?v=RmIC9pQ80Fk">8 1/2 </Link>
          by Federico Fellini
        </BioSection>
        <BioSection>
        <BioYear>
        Listening to:
        </BioYear>
        <Link href="https://open.spotify.com/album/5vkqYmiPBYLaalcmjujWxK">In Rainbows </Link>
          by Radiohead
        </BioSection>
        <BioSection>
        <BioYear>
        Working on:
        </BioYear>
          JavaScript and Python
        </BioSection>
        </Section>

      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/root-kawaii" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @root-kawaii
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/matteo-regge-091a11220/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Matteo Regge
              </Button>
            </Link>
          </ListItem>
        </List>

        
        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} color={"#000000"}variant='outline'>
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
    </Layout>
  )
}


export default Home


