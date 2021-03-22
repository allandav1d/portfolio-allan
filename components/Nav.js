import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  const [isActive, setActive] = useState(false);

const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header className={[styles.navDesktop,"container"].join(" ")}>
      
      <Image src="/Logo.svg" alt="Logo" width={60} height={60}/>

      <div className={[styles.menuIcon, isActive ? styles.change: null].join(" ")} onClick={toggleClass} > 
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </div>

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
