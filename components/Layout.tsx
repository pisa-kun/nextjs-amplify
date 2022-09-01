import Head from "next/head";
import { NextPage } from "next";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Simple Blog";
export const siteTitle = "Next.js blog";

// type LayoutProps = {
//     children?: React.ReactElement;
// }

const Layout = (props: any) => {
    const {children} = props;
    
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/climax.ico"></link>
            </Head>
            <header className={styles.header}>
                <img src="/run_gopher.ico" width={200} className={utilStyles.borderCircle}></img>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout;