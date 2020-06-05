import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title='michael degraw projects' />
    <h2>Stuff I'm tinkering around with:</h2>
    <a style={{ color: '#663399'}} href='http://mdegraw.github.io/rxjs-drum-machine'>RxJS Drum Machine</a>&nbsp;<a style={{ color: '#663399'}} href='http://github.com/mdegraw/rxjs-drum-machine'>(github)</a>
    <p>A simple drum machine using RxJS as an event pipeline/clock</p>
    <br />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
