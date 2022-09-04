import Layout from "../../components/Layout";
import { getAllPostsIds, getPostData } from '../../lib/post';
import utilStyles from "../../styles/utils.module.css";
import Head from 'next/head'

export async function getStaticPaths(){
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    }
}

// 外部から描画前にデータを取得する
export const getStaticProps = async(props: any) =>{
    const {params} = props;
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

type AppProps = {
        postData: {
            id: string;
            blogContentHTML: string;
            title: string;
            thumbnail:string;
            date:string;
        };
}

export default function Post(props: AppProps): JSX.Element{
    const {postData} = props;

    return (
        <Layout>
            <Head>
                <title>
                {postData.title}
                </title>
            </Head>
            <article>
                <h1 className={utilStyles.headingX1}>
                {postData.title}
                </h1>
                <div className={utilStyles.lightText}>
                {postData.date}
                </div>
                <div dangerouslySetInnerHTML={{__html: postData.blogContentHTML}} />
            </article>
        </Layout>
    );
}