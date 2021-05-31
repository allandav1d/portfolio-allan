import styles from "./Main.module.css";
import SocialHive from "../SocialHive";

import SocialHiveMobile from "../SocialHiveMobile";
import dynamic from 'next/dynamic'

const Model = dynamic(
  () => import('../Model'),
  { ssr: false }
)

export default function main() {
  return (
    <>
      <main id="banner" className={styles.banner + " fullWidth "}>
        <SocialHive />
        <div className={styles.bannerContent}>
          <div className={styles.column}>
            <h4 className={styles.salut}>Olá, eu sou</h4>
            <h2 className={styles.name}>ALLANDAV1D</h2>
            <h3 className={styles.job}>DESENVOLVEDOR WEB E GAME DESIGNER</h3>
            <div className={styles.row}>
              <a className={[styles.btn, styles.btnCV].join(' ')} >Download CV</a>
              <a className={[styles.btn, styles.btnContact].join(' ')} >Contato</a>
            </div>
            {/** <SocialHiveMobile /> */}
          </div>

          <div className={styles.my3dContainer}>
            <Model />
          </div>

        </div>
      </main>
    </>
  );
}
