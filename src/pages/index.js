import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="mdegraw.github.io" />
    <h1>Projects</h1>
    <p>Stuff I'm tinkering around with.</p>
    <a href="/page-2/">RxJS Drum Machine/Sequencer</a> <br />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
