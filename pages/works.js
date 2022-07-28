import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbnailS from '../components/images/maestri.png'
import thumbnailZ from '../components/images/brainss.png'
import n01 from '../components/images/01.png'
import n02 from '../components/images/02.png'
import n03 from '../components/images/03.png'
import n04 from '../components/images/04.png'
import n05 from '../components/images/05.png'
import n06 from '../components/images/06.png'

const Works = () => {
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={30}>
      <Section>
      <WorkGridItem id="https://github.com/root-kawaii/Software-Engineering2021" title="Maestri del rinascimento" thumbnail={thumbnailS}>
            Developed a computer playable implementation of the board game Maestri del rinascimento as a project for my Thesis.
            Online-play features and Model-Controller-View approach.
            Valued 30/30
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem id="https://github.com/root-kawaii/Neurograph" title="Neurograph" thumbnail={thumbnailZ}>
          This paper presents a thorough introduction to the state of the art of Neurographs explaining the basic concepts and highlighting the most important features.
          </WorkGridItem>
        </Section>
        <Section>
        <WorkGridItem id="https://github.com/root-kawaii/drug_repurposing" title="Semi-automatic KG" thumbnail={n01}>
            Semi-automatic KG construction library developed by me for NECSTLab at Polimi.<br></br>
            Followed by Guido Walter Di Donato
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://github.com/root-kawaii/learNN" title="Xilinx Open Hardware" thumbnail={n02}>
            Deep learning Bi-LSTM model for Fake News Detection, to be deployed on FPGA
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://github.com/root-kawaii/VHDL-Image-Processing" title="VHDL Image Equalize" thumbnail={n03}>
            Image Equalizer code for VHDL<br></br>
            Project for Thesis valued 30/30
          </WorkGridItem>
          </Section>
          <Section>
          <WorkGridItem id="https://github.com/root-kawaii/funny_site" title="Funny_Site" thumbnail={n04}>
            GitHub repo for this very site
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://github.com/root-kawaii/discordBots" title="Discord Bots" thumbnail={n05}>
            Me trying to write funny bots for my discord communities<br></br>
            Work in progress...
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://github.com/root-kawaii/api_project2021" title="API_Project" thumbnail={n06}>
            Optimal code for the ranking of given Homogeneous Graphs<br></br>
            Project for my Thesis<br></br>
            Valued 30/30
          </WorkGridItem>
        </Section>
        </SimpleGrid>
        </Container>
        </Layout>
)
}

export default Works