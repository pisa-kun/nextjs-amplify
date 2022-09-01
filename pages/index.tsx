import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from 'next/link'
import utilStyle from "../styles/utils.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>
          駆け出し中のエンジニアです/データ設計してます/AWS勉強中です
        </p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>エンジニアのブログ</h2>
      
      <div className={styles.grid}>
        <article>
          <Link href="/">
            <img src="/article/making_keyboard.jpg"
            className={styles.thumbnailImage}></img>
          </Link>
          <Link href="/">
            <a className={utilStyle.boldText}>
              初の自作キーボードを作成しました
            </a>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2022/7/27</small>
        </article>

        <article>
          <Link href="/">
            <img src="/article/image_adnet.png"
            className={styles.thumbnailImage}></img>
          </Link>
          <Link href="/">
          <a className={utilStyle.boldText}>
            Advanced Networking - Specialty に合格しました
          </a>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2022/7/10</small>
        </article>

        <article>
          <Link href="/">
            <img src="/article/image_sec.png"
            className={styles.thumbnailImage}></img>
          </Link>
          <Link href="/">
          <a className={utilStyle.boldText}>
            Security - Specialty に合格しました
          </a>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2022/6/18</small>
        </article>

        <article>
          <Link href="/">
            <img src="/article/image_sap.png"
            className={styles.thumbnailImage}></img>
          </Link>
          <Link href="/">
          <a className={utilStyle.boldText}>
            Solutions Architect Professional に合格しました
          </a>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>2022/5/28</small>
        </article>
      </div>


      </section>

    </Layout>
    
  )
}

export default Home
