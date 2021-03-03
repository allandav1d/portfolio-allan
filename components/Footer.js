import styles from '../styles/Footer.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
    <footer className={"fullWidth "+ styles.bgDarkBlue}>
      <div className={"container "+ styles.footer}>
      <Image src="/LogoLight.svg" alt="Logo" width={60} height={60}/>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ex enim, sollicitudin quis eros a.</p>
      
      <ul className={styles.socialList}>
        <li><a href="https://github.com/allandav1d"><Image src="/img/social/Github.svg" alt="Github" width={20} height={20}/></a></li>
        <li><a href="https://twitter.com/AllanDav1d"><Image src="/img/social/Twitter.svg" alt="Twitter" width={20} height={20}/></a></li>
        <li><a href="https://br.linkedin.com/in/allandav1d"><Image src="/img/social/LinkedIN.svg" alt="LinkedIN" width={20} height={20}/></a></li>
        <li><a href="https://www.behance.net/allandav1d"><Image src="/img/social/Behance.svg" alt="Behance" width={20} height={20}/></a></li>
        <li><a href="https://api.whatsapp.com/send?phone=5511962107330"><Image src="/img/social/WhatsApp.svg" alt="WhatsApp" width={20} height={20}/></a></li>
        <li><a href="https://www.instagram.com/allandav1d_/"><Image src="/img/social/Instagram.svg" alt="Instagram" width={20} height={20}/></a></li>
      </ul>

      <p>©2020 - AllanDav1d - Todos os direitos reservados.</p>
      </div>
    </footer>
    )
  }