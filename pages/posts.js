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
        L&apos;altro giorno ho visto mio nonno.<br></br>
Prima lui.<br></br>
Poi la sua ombra.<br></br>
Poi l&apos;aria dietro di lui.<br></br>
Poi è sparito nella calca e non l&apos;ho più visto.<br></br>
Il frastuono della chiesa la domenica mi ha riportato al presente.<br></br>
Ci sono tutte le famiglie del mondo.<br></br>
Qui ci venivo da bambino e forse allora anche la mia famiglia era qui.<br></br>
Tutti i bambini del mondo si assomigliano e questi sono uguali a quelli che conoscevo.<br></br>
Le loro madri li abbracciano allo stesso modo.<br></br>
Lo sguardo misto di preoccupazione e amore infinito.<br></br>
Ogni bambino sono io.<br></br>
Ogni famiglia è la mia.<br></br>
<br></br>
Ora si torna a casa.<br></br>
In quella casa ci sono tutti quanti.<br></br>
Lo zio argentino che non ho mai visto ha bussato alla nostra porta.<br></br>
Mi ha detto che anche da lui c&apos;è sempre spazio. Che Buenos Aires è a un soffio di vento. Che a Plaza de la Constitucion non si è mai soli.<br></br>
Ci sono piani infiniti.<br></br>
Al tredicesimo ci sono tutti gli zii.<br></br>
E poi sale e sale fino all&apos;ultimo uomo del mondo.<br></br>
Siamo entrambi uomini e questo ci basta per mangiare insieme ogni tanto.<br></br>
Succede che qualcuno si aggiunga e la casa sale e cresce.<br></br>
E tutti allungano i tavoli.<br></br>
<br></br>
Fuori dalla chiesa uno strano gatto miagola e continua a fissarmi.<br></br>
Fila via dritto come un fuso nella nebbia mattutina.<br></br>
Lo seguo.<br></br>
Nel mentre quel gatto diventa un altro gatto.<br></br>
Poi altri 10 e altri 100.<br></br>
Siamo in uno spiazzo in mattoni rossi nel mezzo di una cittadina di campagna.<br></br>
Il paese dorme e sento delle campane lontane.<br></br>
Un piccola porta si schiude dal muro amaranto.<br></br>
Si allarga e restringe pulsante.<br></br>
Ora è grande quanto un gatto.<br></br>
Allora mi rimpicciolisco anche io e divento uno dei mille gatti di questa piazza.<br></br>
Entro in un piccolo santuario in legno.<br></br>
C&apos;è solo una piccolo rialzo con migliaia di cuccioli che dormono.<br></br>
Sopra di loro un busto in legno intarsiato della Madonna che veglia sul loro sonno.<br></br>
Gira lentamente lo sguardo su di me.<br></br>
<br></br>
Bisogna essere disposti a lasciar entrare tutti i pericoli del mondo.<br></br>
Pregare che il mondo sia clemente con ciò che gli lasciamo.<br></br>
Più clemente che con noi.<br></br>
Che la riva sia lieve a chiunque vi cammina sotto la madre Luna.<br></br>
Che l&apos;acqua sottile levighi e smussi i tuoi piedi.<br></br>
Che i massi facciano lo stesso mentre cammini dolcemente.<br></br>
Che il maremoto e l&apos;acquazzone ti colpiscano quando sarai saldo e con l&apos;occhio fisso verso il filo d&apos;orizzonte del mare.<br></br>
<br></br>
Ora questi gatti sono pronti per uscire dalle loro piccole porte di legno.<br></br>
Torneranno per piangere ridere e rendere grazie.<br></br>
Il gatto dai mille gatti mi riporta nella nebbia.<br></br>
Un sottile spiraglio di luce sbuca da dietro la chiesa del paese.<br></br>
<br></br>
Puoi aiutare tutti quanti ma salvare uno solo.<br></br>
Sparisce nelle foglie portate dal vento.<br></br>
<br></br>
Ho portato il pane su e giù da Montesacro.<br></br>
Tornavo la domenica mattina in un sole simile a quello che si intravede qui ora.<br></br>
Nel torpore del mattino con poche ore di sonno celebravo l&apos;aiuto e la felicità del mondo.<br></br>
Poi tornavo sotto le lenzuola leggere e dormivo fino a sera.<br></br>
Mi svegliavo silenzioso e credevo di essere l&apos;unico sulla terra.<br></br>
Si increspava la fronte e pensavo alle fronde degli alberi fuori dalla finestra, al vento caldo e al futuro di qualcuno.<br></br>
Di qualche faccia con un nome e un cognome come tanti altri che sorrideva ai figli la sera tornando un po&apos; più tardi del solito.<br></br>
Poi mi liberavo anche di quello, anche degli alberi leggeri e dal vento serale.<br></br>
<br></br>
Per pochi secondi vedevo la mia faccia e sentivo il mio nome e cognome.<br></br>
Facevo esattamente quello che sognavo.<br></br>
E non dovevo salvare più nessuno.<br></br>
        </Paragraph>
        <ParagraphE>
Matteo Regge, 23
        </ParagraphE>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            Summer 2022
          </Heading>
        <Paragraph>
        Ascoltami, tu e me e noi e gli altri<br></br>
non lasceremo mai le fronde del salice<br></br>
che sguscia via dal Leviatano<br></br>
e dal suo piccolo specchio<br></br>
d&apos;acqua placida e mutevole<br></br>
<br></br>
A predicarci il wu wei<br></br>
e raccontarci di sere di brezza<br></br>
le tranqullita lontane <br></br>
che non sono piu nulla<br></br>
se non il racconto di vecchie storpie<br></br>
<br></br>
Quanto fosse rarefatto il tempo<br></br>
delle nostre estati<br></br>
e dei giochi di luce cangianti<br></br>
che solleticavano la palpebra <br></br>
che cercava l&apos;ombra e la siesta<br></br>
<br></br>
Ergersi contro le mura di queste<br></br>
solitudini pomeridiane<br></br>
era un gesto titanico allora<br></br>
<br></br>
Eppure nessuno mai <br></br>
il coraggio di battere il sentiero<br></br>
via dal rudere nelle campagne aride<br></br>
<br></br>
Come la rugiada che appare e scompare <br></br>
svegli e sofferti nel mattino<br></br>
manchevoli e indolenti<br></br>
nelle sere d&apos;estate e ciliege<br></br>
<br></br>
Poi nel bosco e nel ruscello<br></br>
un fragore di lampo <br></br>
il cielo sereno e fermo<br></br>
<br></br>
Tu, nemmeno il saluto <br></br>
per saltare<br></br>
oltre le piccole pozze d&apos;acqua<br></br>
<br></br>
Si dice dalle nostre parti<br></br>
che le dighe naturali resistano per sempre<br></br>
lo sanno bene i piccoli animali<br></br>
che ivi abitano<br></br>
<br></br>
L&apos;acqua invece<br></br>
innaturale com&apos;e<br></br>
ogni tanto quando si accumula<br></br>
sceglie di rompere e fuggire<br></br>
verso il vento e il mare<br></br>
        </Paragraph>
        <ParagraphE>
Matteo Regge, Ryu
        </ParagraphE>
        <Heading as="h3" textDecoration={'underline'} fontSize={20} marginTop={5} marginBottom={2} textUnderlineOffset={6}>
            Spring 2022
          </Heading>
        <Paragraph>
        La polvere della terra<br></br>
è diventata il primo uomo<br></br>
il primo uomo<br></br>
nella polvere <br></br>
ha generato ogni altro uomo<br></br>
<br></br>
Uno degli uomini<br></br>
nello spazio infinito e uguale <br></br>
fu Jorge Bruno Ramirez<br></br>
che fu padre di una donna <br></br>
che divenne mia madre <br></br>
e questo lo rese mio nonno<br></br>
<br></br>
Chi nasce nella terra<br></br>
cresce nella terra<br></br>
e vive per la terra <br></br>
ha, forse, come unico sogno<br></br>
quello di vedere la sua progenie<br></br>
impugnare la terra <br></br>
e fuggire nei palazzi <br></br>
di sabbia e fuoco<br></br>
<br></br>
Ho passato tutta la vita a fuggire la terra<br></br>
Ora che sto per impugnare una pergamena <br></br>
La terra è tornata a prendersi mio nonno<br></br>
e il suo sogno<br></br>
<br></br>
Saremo polvere anche io <br></br>
e il mio pezzetto di carta<br></br>
Torneremo allo spazio infinito e uguale<br></br>
Dove giacciono tutti i pezzi di carta <br></br>
Io<br></br>
mio nonno <br></br>
e ogni altro uomo<br></br>
        </Paragraph>
        <ParagraphE>
Matteo Regge, Laurea
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

