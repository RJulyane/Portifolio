# Meu Portfólio

Projeto final da disciplina de Laboratório de Desenvolvimento Web, feito em formato de portifólio pessoal. O projeto é uma SPA (Single Page Application) feita com React e React Router.

## Tecnologias

- React 19
- React Router DOM 7
- CSS Modules
- html
- JavaScript

## Funcionalidades

- Navegação entre páginas sem recarregar o navegador
- Página inicial (Home) com apresentação
- Página Sobre, com detalhes da minha vida na tecnologia
- Página Projetos, com cards reutilizáveis que recebem os dados por props
- Página Contato, com links para redes sociais (git hub e linkedin)
- Navbar e Rodapé presentes em todas as páginas

## Estrutura de pastas

```
src/
  components/
    Navbar/        Menu de navegação
    Rodape/        Rodapé
    Itens/         Card reutilizável de projetos
  pages/
    Home/
    Sobre/
    Projetos/
    Contato/
  assets/          Imagens importadas nos componentes
  App.js           Configuração das rotas
  index.js         Ponto de entrada
  index.css        Estilos globais
```

## Como executar

Pré-requisito: Node.js (versão LTS).

```bash
# 1. Entrar na pasta do projeto
cd proj_final

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm start
```

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm start` | Inicia o projeto em modo de desenvolvimento |
| `npm run build` | Gera a versão de produção na pasta `build/` |
| `npm test` | Executa os testes |

## Rotas

| Caminho | Página |
|---|---|
| `/` | Home |
| `/sobre` | Sobre |
| `/projetos` | Projetos |
| `/contato` | Contato |

## Estilização

- `index.css` contém apenas regras globais: variáveis de cor, reset de margens e fundo do `body`.
- Cada componente ou página tem seu próprio arquivo `.module.css`, importado como `styles` e aplicado com `className={styles.nome}`. Isso evita conflito de nomes de classe entre componentes.
