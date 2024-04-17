import React from 'react'
import { Header } from '../../components/Header'
import { Main } from './styles'
import Bigmac from '../../assets/bigmac.png'
import Prettymac from '../../assets/bigmac(1).png'
import Sorvete from '../../assets/sorvete.png'
import Batata from '../../assets/batata.png'


export const Home = () => {
  return (
    <>
    <Header/>

    <Main>

      
<section className='principal'>


<div className='fastfoodtext'>

<img src={Bigmac} alt='bigmac'/>

   <h1>BATEU AQUELA #FOME DE MÉQUI?</h1>
   </div>



   <div className='fastfoodimg'>
    <img src={Prettymac} alt='bigmac'/>
    <img src={Sorvete} alt='bigmac'/>
    <img src={Batata} alt='bigmac'/>
   </div>
   </section>







   <section className='segundaria'>
   <h1>ola eu sou a main</h1>
</section>
    </Main>
    
    </>
  )
}
