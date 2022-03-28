
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {            
            pokeImage("./img/pokemon.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {  
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
            let pokeNombre = data.name;
            MostrarNombre(pokeNombre);
            console.log(pokeNombre);
            let pokeId = data.id;
            MostrarId(pokeId);
            console.log(pokeId);
            let tipos = data.types.map(typ => typ.type.name);
            console.log(tipos);
            MostrarTipos(tipos);
            let pokeEstadisticas =
            data.stats[0].stat.name + ": " + data.stats[0].base_stat + "\n" +
            data.stats[1].stat.name + ": " + data.stats[1].base_stat + "\n" +
            data.stats[2].stat.name + ": " + data.stats[2].base_stat + "\n" +
            data.stats[3].stat.name + ": " + data.stats[3].base_stat + "\n" +
            data.stats[4].stat.name + ": " + data.stats[4].base_stat + "\n" +
            data.stats[5].stat.name + ": " + data.stats[5].base_stat;
            MostrarEstadisticas(pokeEstadisticas);
            console.log(pokeEstadisticas);
            let pokeMovs = "";
            let cantMovs = Object.keys(data.moves).length;
            for(let i = 0; i < cantMovs ; i++)
            {
                pokeMovs += data.moves[i].move.name + "\n";
            }            
            MostrarMovimientos(pokeMovs);
            console.log(pokeMovs);
        }
    });
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;}

const MostrarNombre = (pokeNombre) => {
    const salidaNombre = document.getElementById("nombre");
    salidaNombre.value =("Nombre: " + pokeNombre);
}
const MostrarId = (pokeId) => {
    const salidaId = document.getElementById("id");
    salidaId.value = ("# " + pokeId);    
}
const MostrarTipos = (tipos) =>{
    const salidaTipos = document.getElementById("tipos");    
    salidaTipos.value =("Tipo: " + tipos);
}
const MostrarEstadisticas = (pokeEstadisticas) => {
    const salidaEstadisticas = document.getElementById("estadisticas");
    salidaEstadisticas.innerHTML = pokeEstadisticas;
}
const MostrarMovimientos = (pokeMovs) => {
    const salidaMovimientos = document.getElementById("movimientos")
    salidaMovimientos.innerHTML =("movimientos: " + "\n" + pokeMovs);
}




/*work in progress...

const pokemonContainer = document.querySelector('.pokemon-container');

function fetchPokeid(id) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => {
        createPokemon(data);
    });    
}
function fetchPokeids(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokeid(i);
    }
}
function createPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('sprite-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p')
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p')
    name.classList.add('name')
    name.textContent = pokemon.name

    const types = document.createElement('p')
    types.src = pokemon.types

    const stats = document.createElement('p')
    stats.src = pokemon.stats[0].base_stats

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(types);
    card.appendChild(stats);

    

    pokemonContainer.appendChild(card);
}
fetchPokeids(9)


const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const setCardColor = types => {
    const colorOne = typeColors[types[0].type.name];
    const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
    pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
    pokeImg.style.backgroundSize = ' 5px 5px';
} */
