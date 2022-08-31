import Head from "next/head";
import { NextPage } from "next";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "Shin Code";

type LayoutProps = {
    message: string
    submessage: string
}

const Layout: NextPage<LayoutProps> = (props) => {
    const {message, submessage} = props;
    
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/climax.ico"></link>
            </Head>
            <header className={styles.header}>
                <img src="/run_gopher.ico" width={200} className={utilStyles.borderCircle}></img>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </header>
            <main>{message}</main>
            <h6>{submessage}</h6>
        </div>
    )
}

export default Layout;