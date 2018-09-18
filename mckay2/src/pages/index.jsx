import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p>Hello, my name is Michael McKay and this is my website.</p>
    <p>
      I'm a PhD student at the University of Glasgow, interested in the field of
      algorithms and stable matching.
    </p>
    <p>You can email me</p>
    <ul>
      <li>
        professionally at{' '}
        <code>michael.mckay (at) glasgow (dot) ac (dot) uk</code>
      </li>
      <li>
        personally at <code>michael_mac_i (at) me (dot) com</code>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
