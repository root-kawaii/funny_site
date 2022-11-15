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
            10.24.22
          </Heading>
        <Paragraph>
        L&apos;'altro giorno ho visto mio nonno.
Prima lui.
Poi la sua ombra.
Poi l&apos;'aria dietro di lui.
Poi è sparito nella calca e non l&apos;'ho più visto.
Il frastuono della chiesa la domenica mi ha riportato al presente.
Ci sono tutte le famiglie del mondo.
Qui ci venivo da bambino e forse allora anche la mia famiglia era qui.
Tutti i bambini del mondo si assomigliano e questi sono uguali a quelli che conoscevo.
Le loro madri li abbracciano allo stesso modo.
Lo sguardo misto di preoccupazione e amore infinito.
Ogni bambino sono io.
Ogni famiglia è la mia.

Ora si torna a casa.
In quella casa ci sono tutti quanti.
Lo zio argentino che non ho mai visto ha bussato alla nostra porta.
Mi ha detto che anche da lui c&apos;'è sempre spazio. Che Buenos Aires è a un soffio di vento. Che a Plaza de la Constitucion non si è mai soli.
Ci sono piani infiniti.
Al tredicesimo ci sono tutti gli zii.
E poi sale e sale fino all&apos;'ultimo uomo del mondo.
Siamo entrambi uomini e questo ci basta per mangiare insieme ogni tanto.
Succede che qualcuno si aggiunga e la casa sale e cresce.
E tutti allungano i tavoli.

Fuori dalla chiesa uno strano gatto miagola e continua a fissarmi.
Fila via dritto come un fuso nella nebbia mattutina.
Lo seguo.
Nel mentre quel gatto diventa un altro gatto.
Poi altri 10 e altri 100.
Siamo in uno spiazzo in mattoni rossi nel mezzo di una cittadina di campagna.
Il paese dorme e sento delle campane lontane.
Un piccola porta si schiude dal muro amaranto.
Si allarga e restringe pulsante.
Ora è grande quanto un gatto.
Allora mi rimpicciolisco anche io e divento uno dei mille gatti di questa piazza.
Entro in un piccolo santuario in legno.
C&apos;'è solo una piccolo rialzo con migliaia di cuccioli che dormono.
Sopra di loro un busto in legno intarsiato della Madonna che veglia sul loro sonno.
Gira lentamente lo sguardo su di me.

Bisogna essere disposti a lasciar entrare tutti i pericoli del mondo.
Pregare che il mondo sia clemente con ciò che gli lasciamo.
Più clemente che con noi.
Che la riva sia lieve a chiunque vi cammina sotto la madre Luna.
Che l&apos;'acqua sottile levighi e smussi i tuoi piedi.
Che i massi facciano lo stesso mentre cammini dolcemente.
Che il maremoto e l&apos;'acquazzone ti colpiscano quando sarai saldo e con l&apos;'occhio fisso verso il filo d&apos;'orizzonte del mare.

Ora questi gatti sono pronti per uscire dalle loro piccole porte di legno.
Torneranno per piangere ridere e rendere grazie.
Il gatto dai mille gatti mi riporta nella nebbia.
Un sottile spiraglio di luce sbuca da dietro la chiesa del paese.

Puoi aiutare tutti quanti ma salvare uno solo.
Sparisce nelle foglie portate dal vento.

Ho portato il pane su e giù da Montesacro.
Tornavo la domenica mattina in un sole simile a quello che si intravede qui ora.
Nel torpore del mattino con poche ore di sonno celebravo l&apos;'aiuto e la felicità del mondo.
Poi tornavo sotto le lenzuola leggere e dormivo fino a sera.
Mi svegliavo silenzioso e credevo di essere l&apos;'unico sulla terra.
Si increspava la fronte e pensavo alle fronde degli alberi fuori dalla finestra, al vento caldo e al futuro di qualcuno.
Di qualche faccia con un nome e un cognome come tanti altri che sorrideva ai figli la sera tornando un po&apos;' più tardi del solito.
Poi mi liberavo anche di quello, anche degli alberi leggeri e dal vento serale.

Per pochi secondi vedevo la mia faccia e sentivo il mio nome e cognome.
Facevo esattamente quello che sognavo.
E non dovevo salvare più nessuno.
        </Paragraph>
        <ParagraphE>
Matteo Regge, 23
        </ParagraphE>
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

