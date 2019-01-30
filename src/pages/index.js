import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <p dangerouslySetInnerHTML={{ __html: `

      <p>This is an attempt to reproduce an error</p>
      <p>There should be a list under here</p>
      <ul>
      <li><p><strong>Item 1</strong>: Hello there</p></li>
      <li><p><strong>Item 2</strong>: Hello there</p></li>
      <li><p><strong>Item 3</strong>: Hello there</p></li>
      </ul>

    ` }} />
  </Layout>
)

export default IndexPage
