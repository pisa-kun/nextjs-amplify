import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Layout message='hoge' submessage='huge'></Layout>
  )
}

export default Home
