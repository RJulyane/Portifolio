import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <h1>Bem-vindo ao meu portfólio!</h1>
      <p>Este é o meu espaço para mostrar os meus projetos e habilidades.</p>
    </div>
  );
}

export default Home;