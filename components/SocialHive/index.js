import styles from "./SocialHive.module.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBehance, FaTwitter, FaWhatsapp} from 'react-icons/fa';

export default function SocialContainer() {
  return (
    <>
        <div className={styles.socialContainer}>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}/>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}><FaTwitter/></div>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}/>
          <div className={styles.polygon}><FaWhatsapp/></div>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}><FaLinkedinIn/></div>
          <div className={styles.polygon}><FaBehance/></div> 
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}/>
          <div className={styles.polygon}><FaGithub/></div>
          <div className={styles.polygon}><FaInstagram/></div>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}/>
          <div className={styles.polygon}/>
          <div className={styles.polygon}/>
        </div>
      </div>
    
    </>
  );
}