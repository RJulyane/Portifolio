import Itens from '../Components/itens/itens';
import imagemCinema from '../assets/GerenciarCinema.png';
import styles from './Projetos.module.css';
import ImagemJOGitto from '../assets/JOGitto.png';
import ImagemONarrador from '../assets/o_narrador.png';

function Projetos() {
  return (
    <main className={styles.projetos}>
      <Itens
        titulo="JOGitto"
        categoria="Jogo"
        descricao="Dungeon crawler acadêmico."
        tecnologias={['C', 'Lógica de jogo']}
        imagem={ImagemJOGitto}
        semestre="1"
      />
      <Itens
        titulo="o_narrador"
        categoria="Jogo"
        descricao="RPG de texto com narrador sarcástico."
        tecnologias={['C', 'Lógica de jogo']}
        imagem={ImagemONarrador}
        semestre="1"
      />
      <Itens
        titulo="TicketSale"
        categoria="Sistema"
        descricao="Venda de ingressos de cinema."
        tecnologias={['Java', 'Maven', 'Gson']}
        imagem={imagemCinema}
        semestre="2"
      />
    </main>
  );
}

export default Projetos;