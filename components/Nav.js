import Head from "next/head";
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <header className="container">
      <Head>
        <title>AllanDav1d - Portfólio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image src="/Logo.svg" alt="Logo" width={60} height={60}/>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/#eu">
            <a>Eu</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/#servicos">
            <a>Serviços</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/#portifolio">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/#depoimentos">
            <a>Depoimentos</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/#blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/#contato">
            <a>Contrate-me</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
