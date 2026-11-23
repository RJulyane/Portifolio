import styles from './Sobre.module.css';

function Sobre() {
  return (
    <div className={styles.sobre}>
      <div className={styles.card}>
        <h1 className={styles.titulo}>Sobre mim</h1>
        <p>
          Oi, eu sou a Julyane (ju), estudante de Ciência da Computação no CESUPA, em Belém do Pará. Comecei na programação com C e C++ e hoje estou me aprofundando em Java (POO). Também trabalho com HTML, CSS e JavaScript, e tenho experiência em programação competitiva.<br></br><br></br>

          Antes da faculdade, participei de competições de robótica usando OpenCV e Arduino.<br></br><br></br> Também gosto de design narrativo de jogos: já construí um RPG de texto em C com narrador sarcástico e um dungeon crawler em grupo, o JOGitto. Em equipe, trabalhei em projetos como o TicketSale, um sistema de venda de ingressos de cinema em Java com Maven.

          Além de projetos por fora, como o Ceasa Connect, um conceito de app para aproximar vendedores e compradores da Ceasa-PA. Além dos meus estudos em cibersegurança e aprimorando meu inglês.
        </p>
      </div>
    </div>
  );
}

export default Sobre;