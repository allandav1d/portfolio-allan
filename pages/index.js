import styles from "../styles/Home.module.css";

import Main from "../components/Main"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaTwitter, FaWhatsapp} from 'react-icons/fa';

export default function Home() {


  
  return (
    <>
    <Main/>
     <section id="eu" className="container">
        <div className={styles.col}>Photo</div>
        <div className={styles.col}>
          <h3 className={styles.subTitle}>Eu</h3>
          <h2 className={styles.Title}>Sobre Mim</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            est ac nulla pretium facilisis. Proin cursus ac magna euismod
            malesuada. Maecenas egestas risus non tincidunt lobortis. Aenean id
            massa turpis.{" "}
          </p>

          <div>
            <span>Nome</span>
            <span>:</span>
            <span>Allan David de Oliveria</span>
          </div>
          <div>
            <span>Tel</span>
            <span>:</span>
            <span>(011) 96210-7330</span>
          </div>
          <div>
            <span>Email</span>
            <span>:</span>
            <span>contato@allandavid.com.br</span>
          </div>

          <h2 className={styles.Title}>Meus Interesses</h2>
          <ul className={styles.list}>
            <li>Musica</li>
            <li>Fotografia</li>
            <li>Filmes</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
      <section className={styles.bgGray + " fullWidth "}>
        <div className={"container " + styles.col}>
          <h3 className={styles.textCenter + " " + styles.subTitle}>
            Porque Me Escolher
          </h3>
          <h2 className={styles.textCenter + " " + styles.Title}>
            Minhas Especializações
          </h2>
          <div className={styles.row}>
            <div className={styles.col5}>
              
            <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
                </div>
              </div>

              
            </div>
            <div className={styles.col5}>
            <div className={styles.Status}>
              
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
                </div>
              </div>
              <div className={styles.Status}>
                <div className={styles.barDescription}>
                  <span>Design</span> <span>80%</span>
                </div>
                <div className={styles.fullBar}>
                  <div className={styles.percentage}></div>
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
          Uma Jornada Incrível
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
        <div className={"container " + styles.col}>
          <h2>TEM UM PROJETO QUE QUER TIRAR DO PAPEL?</h2>
          <p>
            Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem ipsum,Lorem
            ipsum,Lorem ipsum.
          </p>
          <span>Entrar em contato</span>
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
