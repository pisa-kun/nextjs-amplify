import Layout from "../../components/Layout";
import { getAllPostsIds, getPostData } from '../../lib/post';

export async function getStaticPaths(){
    const paths = getAllPostsIds();

    return {
        paths,
        fallback: false,
    }
}

// 外部から描画前にデータを取得する
export const getStaticProps = async({params}) =>{
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({postData}) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.blogContentHTML}
        </Layout>
    );
}