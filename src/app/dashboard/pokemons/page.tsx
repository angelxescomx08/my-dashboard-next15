import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import { PokemonGrid } from "@/app/pokemons/components";

const getPokemons = async (
  limit: number = 20,
  offset: number = 0
): Promise<SimplePokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);
  const data: PokemonsResponse = await response.json();
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const data = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Listado de pokemons <small>statico</small></span>
      <PokemonGrid pokemons={data} />
    </div>
  );
}
