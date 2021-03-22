import styles from "./SocialHiveMobile.module.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBehance, FaTwitter, FaWhatsapp} from 'react-icons/fa';

export default function SocialContainerMobile() {
  return (
    <>
        <div className={styles.socialContainerMobile}>
          <div className={styles.polygonLine}>
            <div className={styles.polygon}><FaTwitter/></div>
            <div className={styles.polygon}><FaWhatsapp/></div>
            <div className={styles.polygon}><FaGithub/></div>
            <div className={styles.polygon}><FaInstagram/></div>
          </div>
          <div className={styles.polygonLine}>
            <div className={styles.polygon}><FaLinkedinIn/></div>
            <div className={styles.polygon}/>
            <div className={styles.polygon}><FaBehance/></div> 
          </div>
        </div>
    </>
  );
}