# Trilha JS Developer - Pokedex Project 🗂️


# Descrição 📝
Este projeto é uma aplicação web chamada Pokedex, que utiliza a PokeAPI para exibir uma lista de Pokémon. A interface permite que os usuários visualizem informações sobre os Pokémon, como nome, número e tipos, além de carregar mais Pokémon ao clicar no botão "Load More" 🔽.


# Tecnologias Utilizadas 💻
HTML: Estrutura da página.
CSS: Estilo da aplicação, utilizando o Normalize.css para uma base consistente e a fonte Roboto para a tipografia.
JavaScript: Manipulação da lógica da aplicação, incluindo chamadas à API e manipulação do DOM.
PokeAPI: API externa utilizada para obter dados sobre os Pokémon.
Estrutura do Projeto 📁
Arquivos
index.html: Arquivo principal que contém a estrutura da aplicação.
/assets/css/: Pasta que contém os arquivos de estilo:
global.css: Estilos globais da aplicação.
pokedex.css: Estilos específicos para a Pokedex.
/assets/js/: Pasta que contém os scripts da aplicação:
pokemon-model.js: Definição do modelo de dados Pokemon.
poke-api.js: Interação com a PokeAPI para obter os dados dos Pokémon.
main.js: Lógica principal da aplicação, incluindo a manipulação do DOM e a implementação da funcionalidade de carregamento.

# index.html 🌐
A estrutura básica do HTML é a seguinte:

### Exemplo de Código HTML 📝

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pokedex</title>
    <!-- Links para CSS e fontes -->
</head>
<body>
    <section class="content">
        <h1>Pokedex</h1>
        <ol id="pokemonList" class="pokemons">
            <!-- ..... Pokemons here ..... -->
        </ol>
        <div class="pagination">
            <button id="loadMoreButton" type="button">
                Load More
            </button>
        </div>
    </section>
    <!-- Links para JS -->
</body>
</html>

```


# CSS 🎨
O CSS define o estilo e layout dos elementos. Os estilos são aplicados a diferentes tipos de Pokémon, que possuem cores de fundo distintas.

```css
.normal {
    background-color: #a6a877;
}

.grass {
    background-color: #77c850;
}

/* Outros estilos para tipos de Pokémon */

```

# JavaScript 📜
O JavaScript gerencia a lógica da aplicação, incluindo a obtenção de dados da PokeAPI e a atualização do DOM.

Principais Funcionalidades ⚙️
1.Conversão de Pokémon para Elemento de Lista: A função convertPokemonToLi cria elementos de lista para cada 2.Pokémon com suas informações.
2.Carregamento de Pokémon: A função loadPokemonItens busca os Pokémon da API e atualiza a lista na página.
3.Carregamento de mais Pokémon: Um botão "Load More" permite carregar mais Pokémon conforme o usuário clica.
Estrutura do Modelo 🧬

A classe Pokemon é definida para representar cada Pokémon:
```javascript
class Pokemon {
    number;
    name;
    type;
    types = [];
    photo;
}
```

# Instalação ⚙️
Para executar a aplicação localmente, siga os seguintes passos:

1. Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd pokedex

2. Abra o arquivo index.html em um navegador de sua escolha.

# Uso 🚀
Visualizar Pokémon: A aplicação exibirá uma lista de Pokémon na página inicial.
Carregar Mais Pokémon: Clique no botão "Load More" para carregar mais Pokémon.
Contribuição 🤝
Sinta-se à vontade para contribuir para este projeto. Você pode abrir um pull request ou relatar problemas.

Licença 📄
Este projeto é licenciado sob a Licença MIT.

Contato 📫
Para dúvidas ou sugestões, entre em contato através do e-mail: marconebritt@gmail.com.

