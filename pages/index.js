import {
  Link,
  Container,
  Box,
  Heading,
  chakra,
useColorModeValue,
Button,
theme} from '@chakra-ui/react'


import NextLink from 'next/link'
import {
  extendTheme,
  withDefaultColorScheme,
  theme as baseTheme,
} from '@chakra-ui/react'
import Image from 'next/image'
import styled from '@emotion/styled'
import Section from '../components/section'
import Image1 from '../components/images/ass5.jpg'
const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
import ReactRoundedImage from "react-rounded-image";
import { ChevronDownIcon } from '@chakra-ui/icons'
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
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
          Work
        </Heading>
        <Paragraph>
        Currently enrolled in Artificial Intelligence at POLIMI.
Highly motivated Student looking for new opportunities.
My Hobbies vary from practicing every kind of sport to Literature and Cinema.
I plan on getting a Degree in Philosophy, in the mean time I study it on my own.
<br></br>
My area of interest is Artifical Intelligence and more generally the understanding of concepts such as intelligence, conciousness and awareness.
Currently working on {''}
        <NextLink href="/works">
        <Link>drug-repurposing</Link>
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
          1999
        </BioYear>
          I was born in Monza in 1999
        </BioSection>

      </Section>
    </Container>
  )
}


export default Home


