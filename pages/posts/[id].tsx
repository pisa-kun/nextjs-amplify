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
export const getStaticProps = async(props: any) =>{
    const {params} = props;
    const postData = await getPostData(params.id);
    console.log(postData);
    return {
        props: {
            postData,
        },
    };
}

type PostData = {
    id: string;
    blogContentHTML: string;
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
            {postData.title}
            <br />
            {postData.date}
            {postData.blogContentHTML}
        </Layout>
    );
}