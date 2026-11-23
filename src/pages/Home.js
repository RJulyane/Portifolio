import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>Bem-vindo ao meu portfólio!</h1>
        <p>Olá, eu sou Julyane Ribeiro, estudante de Ciência da Computação.Aqui é meu espaço de projetos detaques, os melhores de cada semestre da minha faculdade, como um diário de projetos.<br></br>
        Este site ja é mais um projeto destaque, mas pretendo aprimorar-lo.<br></br>
        Além de disponilizar meu contato. <ion-icon name="heart-outline"></ion-icon>
        </p>
      </div>
    </div>
  );
}

export default Home;