import Link from "next/link"
import Head from 'next/head'

export default function FirstPost(){
    return(        
        <div>
            <Head>
                <title>最初の投稿</title>                
                <link rel="icon" href="/climax.ico" />
            </Head>
            
            <h1>最初の投稿</h1>
            <Link href="/">ホームへ戻る</Link>
        </div>
    )
}