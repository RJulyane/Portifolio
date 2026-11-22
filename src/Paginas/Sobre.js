import { Link } from 'react-router-dom';
import styles from './Sobre.module.css';

function Sobre() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre</h1>
      <p>Descubra mais sobre mim e meu trabalho!</p>
    </div>
  );
}

export default Sobre;