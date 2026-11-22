import styles from './Rodape.module.css';

function Rodape() {
  return (
    <footer className={styles.rodape}>
      <p>Siga a desenvolvedora <a href="https://github.com/RJulyane" target="_blank" rel="noopener noreferrer">Julyane Ribeiro</a>.</p> /*esse noopener noreferrer é para link externo, atualmente boa prática*/
    </footer>
  );
}

export default Rodape;