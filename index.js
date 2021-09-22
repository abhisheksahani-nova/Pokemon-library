const pokemon_container = document.querySelector("#pokemon_container");

const totalPokemon = 151;

/* function which gets all pokemon */
async function getAllPokemons() {
  for (let i = 1; i <= totalPokemon; i++) {
    await getPokemon(i);
  }
}

/* function which gets single pokemon based on id*/
async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon-form/${id}`;

  const response = await fetch(url);
  const pokemon = await response.json();
  createPokemonCard(pokemon);
}

/* function which renders pokemon card*/
function createPokemonCard(pokemon) {
  const pokemon_element = document.createElement("div");
  pokemon_element.classList.add("Pokemon");

  const innerhtml = `
  <div class="img-container">
    <img class="img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}"/>   
  </div>

  <div class="info-container">
    <h3 class="poke-id">${pokemon.id}</h3>
    <h2 class="poke-name">${pokemon.name}</h2>
    <p class="poke-type">type: ${pokemon.types[0].type.name}</p> 
  </div>
  `;

  pokemon_element.innerHTML = innerhtml;
  pokemon_container.appendChild(pokemon_element);
}

getAllPokemons();
