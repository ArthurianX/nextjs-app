import Link from 'next/link';
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../components/alert.module.css";
import cn from "classnames";

export default function FirstPost() {
    return (
       <Layout>
           <Head>
               <title>First Post</title>
               <link rel="icon" href="/favicon.ico" />
           </Head>
           <h1>First Post</h1>
           <h2>
               <Link href="/">
                   <a>Back to home</a>
               </Link>
           </h2>
           <div
               className={cn({
                   [styles.success]: type === 'success',
                   [styles.error]: type === 'error',
               })}
           >
               {children}
           </div>
       </Layout>

    );
}