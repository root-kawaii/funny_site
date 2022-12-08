
import {Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import boba from '../components/images/1.png'
import Image from 'next/image'



//var data = new Date();
//var NiceRandomNumber = data.getDate() + data.getMonth() + data.getFullYear()
//var index = NiceRandomNumber%item.length





const cv = () => {
    return(
    <Layout title="CV">
        <Heading as="h3" fontSize={20} mb={4}>
          Curriculum Vitae
        </Heading>
    <Image src={boba}/>
    </Layout>
    )
    
}

export default cv