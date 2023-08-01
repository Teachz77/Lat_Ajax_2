const fetchPokemons = async (ListPoke)=>{
    for(let i=1; i<=ListPoke; i++){
        await getPoke(i);
    }
};

const getPoke = async (id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    createPokeCard(data);
};

const colors ={
    grass: "#8dd694",
    water: "#8dc6e6",
    fire: "#e69d8d",
    bug: "#bddd7a",
    normal: "#b1b1b1",
    flying: "#c9adec",
    rock: "#b99d72",
    ground: "#efbe85",
    psychic: "#d053bc",
    ghost: "#835e94",
    dark: "#686868",
    steel: "#598fa3",
    poison: "#a55db1",
    electric: "#e7c859",
    fairy: "#eea1e2",
    fighting: "#e07f60",
    dragon: "#8859d5",
    ice: "#71d8de",
};

const colorTypes = Object.keys(colors);

const createPokeCard = (poke) =>{
    const card = document.createElement("div");
    card.classList.add("poks");

    const name = poke.name[0].toUpperCase()+ poke.name.slice(1);
    const id = poke.id.toString().padStart(1);

    const pokeTypes = poke.types.map((type)=>type.type.name);
    const typ = colorTypes.find((type) => pokeTypes.indexOf(type) > -1);
    const color = colors[typ];

    card.style.backgroundColor = color;

    const pokeInnerHTML =
    `
    <div class="poke-detail">
        <p class="number-name">${id}: <span>${name}</span></p>

        <img src="https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="${name}">

        <p class="type">Type: <span>${typ}</span></p>
    </div>
    `;

    card.innerHTML = pokeInnerHTML;
    cardPoke.appendChild(card);
};

fetchPokemons();

