import React from 'react'

import Link from 'next/link'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Link href="create">Go create new Readme.md</Link>
    </Layout>
  )
}
