import styles from "../styles/Home.module.css";

import Main from "../components/Main"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Home() {



  return (
    <>
      <Main />
      <section id="eu" className="container">
        <div className={styles.col4}>Photo</div>
        <div className={styles.col6}>
          <h3 className={styles.subTitle}>Eu</h3>
          <h2 className={styles.Title}>{'<Sobre Mim/>'}</h2>
          <p>Meu nome é Allan David, especialista em web com formação em game design. Minha atuação é no desenvolvimento de sites com enfoque na experiência do usuário (UX/UI) tendo como ferramentas as tecnologias atuais aplicadas de forma personalizada a cara do seu negócio.</p>
          <p>A minha carreira e portfólio abrange projetos em Frameworks como React.JS, Next, até o bom e velho Javascript Vanilla, trabalhando também com os CMS Wordpress e Webflow.</p>
          <div>
            <p><span className={styles.icon} /> (011) 96210-7330</p>
          </div>
          <div>
            <p><span className={styles.icon} /> contato@allandavid.com.br</p>
          </div>

          <h2 className={styles.Title}>{'<Meus Interesses/>'}</h2>
          <ul className={styles.list}>
            <li><span className={styles.icon} /> Design</li>
            <li><span className={styles.icon} /> Aprendizado contínuo</li>
            <li><span className={styles.icon} /> Liderança</li>
            <li><span className={styles.icon} /> Música</li>
            <li><span className={styles.icon} /> Jogos</li>
            <li><span className={styles.icon} /> Gatos</li>
          </ul>
        </div>
      </section>
      <section className={styles.bgGray + " fullWidth "}>
        <div className={"container " + styles.col}>
          <h3 className={styles.textCenter + " " + styles.subTitle}>
            Porque Me Escolher
          </h3>
          <h2 className={styles.textCenter + " " + styles.Title}>
            {'<Minhas Especializações/>'}
          </h2>
          <div className={styles.row}>
            <div className={styles.col5}>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Gestão para resultados</span> <span>96%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '96%' }}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Trabalho em equipe</span> <span>99%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '99%' }}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Resiliência</span> <span>99%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '99%' }}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Criatividade & Inovação</span> <span>96%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '96%' }} ></div>
                </div>
              </div>


            </div>
            <div className={styles.col5}>
              <div className={styles.Status}>

                <div className={styles.barDescription}>
                  <span>HTML & CSS</span> <span>85%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '85%' }}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Javascript</span> <span>79%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '79%' }}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design Responsivo</span> <span>100%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '100%' }}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>AWS & Azure</span> <span>55%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage} style={{ 'width': '55%' }}></div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className={"container " + styles.col}>
        <h3 className={styles.textCenter + " " + styles.subTitle}>
          Minhas Qualificações
        </h3>
        <h2 className={styles.textCenter + " " + styles.Title}>
          {'<Uma Jornada Incrível/>'}
        </h2>
        <div className={styles.row}>
          <div className={styles.col5}>
            <h2 className={styles.Title}>Educação</h2>

            <div className={styles.timelineItem}>
              <div className={styles.timeline}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.timelineInfo}>
                <span className={styles.timelineTitle}>Curso 1</span>
                <span className={styles.timelineSubtitle}>
                  Universidade nove de Julho
                </span>
                <span className={styles.timelineDate}>2018 - 2020</span>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeline}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.timelineInfo}>
                <span className={styles.timelineTitle}>Curso 2</span>
                <span className={styles.timelineSubtitle}>
                  Universidade nove de Julho
                </span>
                <span className={styles.timelineDate}>2018 - 2020</span>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeline}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.timelineInfo}>
                <span className={styles.timelineTitle}>Curso 3</span>
                <span className={styles.timelineSubtitle}>
                  Universidade nove de Julho
                </span>
                <span className={styles.timelineDate}>2018 - 2020</span>
              </div>
            </div>
          </div>
          <div className={styles.col5}>
            <h2 className={styles.Title}>Experiência</h2>
            <div className={styles.timelineItem}>
              <div className={styles.timeline}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.timelineInfo}>
                <span className={styles.timelineTitle}>Trabalho 1</span>
                <span className={styles.timelineSubtitle}>
                  Universidade nove de Julho
                </span>
                <span className={styles.timelineDate}>2018 - 2020</span>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeline}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.timelineInfo}>
                <span className={styles.timelineTitle}>Trabalho 2</span>
                <span className={styles.timelineSubtitle}>
                  Universidade nove de Julho
                </span>
                <span className={styles.timelineDate}>2018 - 2020</span>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timeline}>
                <div className={styles.circle}></div>
                <div className={styles.line}></div>
              </div>
              <div className={styles.timelineInfo}>
                <span className={styles.timelineTitle}>Trabalho 3</span>
                <span className={styles.timelineSubtitle}>
                  Universidade nove de Julho
                </span>
                <span className={styles.timelineDate}>2018 - 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={"container " + styles.col}>
        <h3 className={styles.textCenter + " " + styles.subTitle}>
          Especializado em
        </h3>
        <h2 className={styles.textCenter + " " + styles.Title}>
          Em Que Posso Ajudar
        </h2>
      </section>
      <section className={styles.bgGray + " fullWidth "}>
        <div className={"container " + styles.col}>
          <h3 className={styles.textCenter + " " + styles.subTitle}>
            Meu Portifolio
          </h3>
          <h2 className={styles.textCenter + " " + styles.Title}>
            Trabalhos Recentes
          </h2>
          <div className={styles.gallery}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>
          <span className={styles.btnOrange}>Ver todos</span>
        </div>
      </section>
      <section className={styles.bgOrange + " fullWidth "}>
        <div className={["container", styles.col, styles.paperProject].join(" ")}>
          <h2>TEM UM PROJETO QUE QUER TIRAR DO PAPEL?</h2>
          <p>Juntos podemos levar a identidade e a experiência do seu negócio para a Web, seja um site, blog, aplicativo, jogo ou rede social.</p>
          <span className={styles.btnWhite}>Entrar em contato</span>
        </div>
      </section>
      <section className={"container " + styles.col}>
        <h3 className={styles.textCenter + " " + styles.subTitle}>
          Depoimentos
        </h3>
        <h2 className={styles.textCenter + " " + styles.Title}>
          Clientes Satisfeitos
        </h2>
      </section>
      <section className={styles.bgGray + " fullWidth "}>
        <div className={"container " + styles.col}>
          <h3 className={styles.textCenter + " " + styles.subTitle}>Blog</h3>
          <h2 className={styles.textCenter + " " + styles.Title}>
            Últimos Posts
          </h2>
        </div>
      </section>
      <section className={"container " + styles.col}>
        <h3 className={styles.textCenter + " " + styles.subTitle}>
          Contate-me
        </h3>
        <h2 className={[styles.textCenter + " " + styles.Title]}>
          Entrar Em Contato
        </h2>
      </section>
    </>
  );
}
