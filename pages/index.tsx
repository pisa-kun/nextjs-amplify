import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Link from 'next/link'
import utilStyle from "../styles/utils.module.css";
// export defaultの場合は{}いらず、export時は{a, b}で選択する
import {getPostsData, getAllPostsIds} from '../lib/post';

// SSG(プリレンダリング)の場合
// 一度だけ外部からデータを取得する
export async function getStaticProps(){
  const allPostsData = getPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
}

type Props = {
  id: string,
  title: string,
  date: string,
  thumbnail: string,
};

// type Props = {
//   id: string;
// }[];

type AllPostsData = {
  allPostsData: Props[]
};


const Home: NextPage<AllPostsData> = (props: AllPostsData) => {
  const {allPostsData} = props;

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
        {allPostsData.map(({id, title, date, thumbnail}) =>(
          <article key={id}>
          <Link href={`/posts/${id}`}>
            <img src={`${thumbnail}`} alt=''
            className={styles.thumbnailImage}></img>
          </Link>
          <Link href={`/posts/${id}`}>
            <a className={utilStyle.boldText}>
              {title}
            </a>
          </Link>
          <br/>
          <small className={utilStyle.lightText}>{date}</small>
        </article>
        ))}
      </div>


      </section>

    </Layout>
    
  )
}

export default Home
