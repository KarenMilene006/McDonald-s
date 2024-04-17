import React from 'react'
import { Header } from '../../components/Header'
import { Main } from './styles'


export const Home = () => {
  return (
    <>
      <Header/>
      <Main>
  <section className='principal'>
    <h1>ola eu sou a main</h1>
    </section>

    <section className='segundaria'>
    <h1>ola eu sou a main</h1>
  </section>
      </Main>
      
      </>
    )
  }
