import Head from "next/head";
import { NextPage } from "next";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from 'next/link'

const name = "ぴさくんのソフト開発ぶろぐ(仮)";
export const siteTitle = "pisa's developing software(仮)";

// type LayoutProps = {
//     children?: React.ReactElement;
// }

const Layout = (props: any) => {
    const {children, home} = props;
    
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/climax.ico"></link>
                <title>{siteTitle}</title>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                    <img src="/run_gopher.ico" width={200} 
                    className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`} alt=''></img>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                    <img src="/run_gopher.ico" width={200} 
                    className={`${utilStyles.borderCircle}`} alt=''></img>
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">ホームへ戻る</Link>
                </div>
            )}
        </div>
    )
}

export default Layout;