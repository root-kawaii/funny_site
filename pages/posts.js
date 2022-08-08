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
        Posts
      </Heading>
      <SimpleGrid columns={[1]} gap={12}>
        <Section>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            08.08.22
          </Heading>
        <Paragraph>
Written a small telegram bot to learn a bit about telegram-python APIs <br></br>
You can use it too ! The username is botter_s_bot, try the /news command followed <br></br>
by the keyword you want to look up.<br></br>
You can find it on my repo as well.
Cheers @_@ !
        </Paragraph>
        <ParagraphE>
root-kawaii, telegram-bot
        </ParagraphE>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            06.28.22
          </Heading>
        <Paragraph>
I have indeed started using Arch Linux.<br></br>
Now I am comparing Gnome to Sway tile manager.<br></br>
While Sway is obviously way less taxing in terms of memory<br></br>
while also being faster in terms of shortcuts and everything<br></br>
Gnome is much more functional and gives way less problems in terms of compatibility.<br></br>
        </Paragraph>
        <ParagraphE>
root-kawaii, Arch
        </ParagraphE>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            5.2.22
          </Heading>
        <Paragraph>
        When sorrow lays us low<br></br>
for a second we are saved<br></br>
by humble windfalls<br></br>
of the mindfulness or memory:<br></br>
the taste of a fruit, the taste of water,<br></br>
that face given back to us by a dream,<br></br>
the first jasmine of November,<br></br>
the endless yearning of the compass,<br></br>
a book we thought was lost,<br></br>
the throb of a hexameter,<br></br>
the slight key that opens a house to us,<br></br>
the smell of a library, or of sandalwood,<br></br>
the former name of a street,<br></br>
the colors of a map,<br></br>
an unforeseen etymology,<br></br>
the smoothness of a filed fingernail,<br></br>
the date we were looking for,<br></br>
the twelve dark bell-strokes, tolling as we count,<br></br>
a sudden physical pain.<br></br><br></br>

Eight million Shinto deities<br></br>
travel secretly throughout the earth.<br></br>
Those modest gods touch us--<br></br>
touch us and move on.<br></br>
        </Paragraph>
        <ParagraphE>
Jorge Luis Borges, Shinto
        </ParagraphE>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            4.25.22
          </Heading>
        <Paragraph>
        Then the snow started falling<br></br>
We were stuck out in your car<br></br>
You were rubbing both my hands<br></br>
Chewing on a candy bar<br></br>

You said ain&apos;t this just like the present<br></br>
To be showing up like this<br></br>
As a moon waned to crescent<br></br>
        </Paragraph>
        <ParagraphE>
Bon Iver, Blood Bank
        </ParagraphE>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            4.11.22
          </Heading>
        <Paragraph>
        The temple bell stops<br></br>
But the sound keeps coming<br></br>
out of the flowers
        </Paragraph>
        <ParagraphE>
        Matsuo Bashō 
        </ParagraphE>
        </Section>
        </SimpleGrid>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'

