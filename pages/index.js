import { Flex } from '@chakra-ui/react';
import Head from 'next/head'
import React, { useState } from 'react';
import { data, exampleTitle, description } from '.././helper/data'
import APISpec from '../helper/apiSpec';
import CodeExample from '../helper/codeExample';
import CTA from '../helper/cta';
import Hero from '../helper/hero';
import Navbar from '../helper/navbar';
import useToggleColor from '../helper/useToggleColor';

export default function Home() {
  const [currentExample, setCurrentExample] = useState(0)
  let { toggleColorMode, bgColor } = useToggleColor()

  const test = async () => {
    //2323r23r
    //3rr43434r
    let tess = 'beda header cb/gajadi ah'
    let url = 'http://localhost:3000/api/select/username'
    let insert = await fetch(url, { headers: { userid: '3rr43434r' } })
    console.log(await insert.json())
  }

  return (
    <Flex w='100%' minH='100vh' direction='column' alignItems='center' fontFamily='Nunito' bg={bgColor}>
      <Head>
        <title>SimpleDB</title>
        <meta name="description" content="Create database as simple as generate a link" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar test={test} toggleColorMode={toggleColorMode} />

      <Flex w='100%' minH='80vh' alignItems='center' direction='column' >

        <Hero />

        <Flex h='100%' w='100%' justify={['center', 'center', 'space-evenly']} alignItems={['center', 'center', 'baseline']} direction={['column', 'column', 'row']}>
          <APISpec currentExample={currentExample} description={description} />

          <CodeExample exampleTitle={exampleTitle} currentExample={currentExample} data={data} setCurrentExample={setCurrentExample} />
        </Flex>
      </Flex>

      <CTA />

    </Flex >
  )
}
