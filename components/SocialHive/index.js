import styles from "./SocialHive.module.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaBehance, FaTwitter, FaWhatsapp} from 'react-icons/fa';

export default function SocialContainer() {

    const goToLink = (link) => {
        window.open(link, '_blank');
    }

  return (
    <>
        <div className={styles.socialContainer}>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}/>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon} onClick={() => goToLink('https://twitter.com/AllanDav1d')}><FaTwitter /></div>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}/>
          <div className={styles.polygon}onClick={() => goToLink('https://api.whatsapp.com/send?phone=5511962107330')}><FaWhatsapp /></div>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon} onClick={()=> goToLink('https://br.linkedin.com/in/allandav1d')}><FaLinkedinIn /></div>
          <div className={styles.polygon} onClick={()=> goToLink('https://www.behance.net/allandav1d')}><FaBehance /></div>
        </div>
        <div className={styles.polygonLine}>
          <div className={styles.polygon}/>
          <div className={styles.polygon} onClick={()=> goToLink('https://github.com/allandav1d')}><FaGithub /></div>
          <div className={styles.polygon} onClick={()=> goToLink('https://www.instagram.com/allandav1d_/')}><FaInstagram /></div>
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