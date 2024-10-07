# Trilha JS Developer - Pokedex Project 🗂️


# Pokedex 🐾

Bem-vindo ao projeto Pokedex, uma aplicação para visualizar e interagir com uma lista de Pokémon. Este README documenta as melhorias e alterações feitas no código-fonte da aplicação.

## Alterações Realizadas 🛠️

### 1. Estrutura HTML 📄
- **Uso de Semântica:** 
  - Adicionada uma `<header>` para o título da Pokedex, separando a estrutura de navegação do conteúdo principal.
  - A seção principal foi envolvida em uma `<main>` para melhor estrutura semântica.

### 2. Estilos CSS 🎨
- **Uso de Variáveis CSS:**
  - Introduzidas variáveis CSS no `global.css` para facilitar a manutenção das cores.
  
- **Responsividade:**
  - Apliquei estilos responsivos para diferentes tamanhos de tela, garantindo que a visualização da Pokedex seja otimizada em dispositivos móveis e desktop.

- **Organização e Manutenção:**
  - Reorganização das classes para representar tipos de Pokémon no CSS, facilitando a manutenção e o entendimento do código.

### 3. JavaScript 🖥️
- **Melhoria na Manipulação do DOM:**
  - Alterei a função `convertPokemonToLi` para usar `document.createElement`, melhorando a manipulação do DOM e evitando injeção direta de HTML.
  
- **Tratamento de Erros:**
  - Adicionei tratamento de erros nas requisições `fetch` para que o usuário seja informado em caso de falhas na API.

- **Carregamento Lazy:**
  - Implementada a propriedade `loading="lazy"` nas imagens dos Pokémon para melhorar a performance ao carregar a página.

### 4. Documentação 📚
- **Comentarios no Código:**
  - Adicionei comentários no código para descrever a funcionalidade e a lógica de seções específicas, melhorando a legibilidade e a manutenção.

## Como Executar o Projeto 🚀

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/marconesdb/js-developer-pokedex
   ```

2. **Abra o arquivo `index.html` no seu navegador:**
   ```bash
   open index.html
   ```

3. **Interaja com a aplicação:** Aprecie a Pokedex e explore os Pokémon disponíveis!

## Contribuições 🤝

Se você deseja contribuir com melhorias ou correções, fique à vontade para abrir uma *issue* ou enviar um *pull request*. Sua colaboração é muito bem-vinda!

## Licença 📄

Este projeto é licenciado sob a [MIT License](LICENSE).

## Contato 📧

Para dúvidas ou sugestões, entre em contato:
- Marcone Silva de Brito: marconebritt@gmail.com
