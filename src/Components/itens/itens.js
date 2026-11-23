import styles from './Itens.module.css';

function Itens({ titulo, categoria, descricao, tecnologias, imagem, semestre}) {
  return (
    <div className={styles.card}>
        {imagem && <img src={imagem} alt={titulo} className={styles.imagem} />}
    <h3 className={styles.titulo}>{titulo}</h3>
      <span className={styles.categoria}><strong>Categoria:</strong> {categoria}</span>
      <p><strong>Descrição:</strong> {descricao}</p>
      <p><strong>Semestre:</strong> {semestre}</p>
      <ul className={styles.lista}><strong>Tecnologias envolvidas:</strong>
        {tecnologias.map((tecn) => (
          <li key={tecn}>{tecn}</li>
        ))}
      </ul>
    </div>
  );
}

export default Itens;