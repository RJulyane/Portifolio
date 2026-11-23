import styles from './Contato.module.css';
import ImgGithub from '../assets/PerfilGithub.png';
import ImgLinkedin from '../assets/PerfilLinkedin.png';

function Contato() {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <p>Entre em contato comigo!</p>
      <ul className={styles.lista}>
        <li>
          <img src={ImgLinkedin} alt="Perfil do LinkedIn" className={styles.iconePerfil} />
          <a href="https://www.linkedin.com/in/julyane-ribeiro-6387053b9/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </li>
        <li>
          <img src={ImgGithub} alt="Perfil do GitHub" className={styles.iconePerfil} />
          <a href="https://github.com/RJulyane" target="_blank" rel="noopener noreferrer">Github</a>
        </li>
        <li>
          <p>E-mail: rjulyane633@gmail.com</p>
        </li>
      </ul>
    </div>
  );
}

export default Contato;