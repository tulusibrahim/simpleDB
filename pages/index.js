import { Flex } from '@chakra-ui/react';
import Head from 'next/head'
import React, { useState } from 'react';
import { data, exampleTitle, description } from '.././helper/data'
import APISpec from '../components/apiSpec';
import CodeExample from '../components/codeExample';
import CTA from '../components/cta';
import Feedback from '../components/feedback';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import useToggleColor from '../helper/useToggleColor';

export default function Home() {
  const [currentExample, setCurrentExample] = useState(0)
  let { toggleColorMode, bgColor } = useToggleColor()

  return (
    <Flex w='100%' minH='100vh' direction='column' alignItems='center' fontFamily='Nunito' bg={bgColor}>
      <Head>
        <title>SimpleDB</title>
        <meta name="description" content="Create database as simple as generate a link" />
        <meta property="og:image" content="/logo.png" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/icon.png" />
        {/* Global site tag (gtag.js) - Google Analytics  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-62X2XF38HD"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-62X2XF38HD', { page_path: window.location.pathname });
`}}>
        </script>
      </Head>

      <Navbar toggleColorMode={toggleColorMode} />

      <Flex w='100%' minH='80vh' alignItems='center' direction='column' >

        <Hero />

        <Flex h='100%' w='100%' justify={['center', 'center', 'space-evenly']} alignItems={['center', 'center', 'baseline']} direction={['column', 'column', 'row']}>
          <APISpec currentExample={currentExample} description={description} />

          <CodeExample exampleTitle={exampleTitle} currentExample={currentExample} data={data} setCurrentExample={setCurrentExample} />
        </Flex>
      </Flex>

      <CTA />

      <Feedback />

    </Flex >
  )
}
