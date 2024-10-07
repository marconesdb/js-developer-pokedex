// main.js

const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    const li = document.createElement('li');
    li.className = `pokemon ${pokemon.type}`;

    li.innerHTML = `
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}</ol>
            <img src="${pokemon.photo}" alt="${pokemon.name}" loading="lazy">
        </div>
    `;

    return li;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit)
        .then((pokemons = []) => {
            const newHtml = pokemons.map(convertPokemonToLi);
            newHtml.forEach(li => pokemonList.appendChild(li));  // Appending each li to the pokemonList
        })
        .catch(error => console.error('Error loading Pokémon:', error));
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNexPage = offset + limit;

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});
