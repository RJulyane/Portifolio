import { Link } from 'react-router-dom';
import styles from './Contato.module.css';

function Contato() {
  return (
    <div className={styles.contato}>
      <h1>Contato</h1>
      <p>Entre em contato comigo!</p>
    </div>
  );
}

export default Contato;