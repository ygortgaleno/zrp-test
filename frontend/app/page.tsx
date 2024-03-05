'use client';
import { zrpBackendApi } from "./lib/zrp-backend-api";
import { KeyboardEvent, useState } from "react";
import { Pokemon } from "./lib/pokemon-backend.entity";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import PokemonCard from "./components/pokemon-card";

export default function Home() {
  const [searchTextInput, setSearchTextInput] = useState('');
  const [poke, setPoke] = useState<Pokemon | undefined>(undefined);

  const onChangeInput = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchTextInput === '') {
        setPoke(undefined)
        return
      }

      try {
        const { data } = await zrpBackendApi.findPokemon(searchTextInput)
        setPoke(data)
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.response?.status === 404) {
            toast.error(`Pokemon "${searchTextInput}" not found`)
            return
          }
        }
        console.error(error)
        toast.error('Internal server error')
      }
    }
  }

  return (
    <main className="grid grid-cols-12 grid-rows-4 h-screen w-full bg-gray-100 text-black">
      <label className="row-span-1 col-span-12 place-self-center">
        <input name="myInput" className="rounded-2xl p-2" onChange={(e) => setSearchTextInput(e.target.value)} onKeyDown={onChangeInput} placeholder="Search Pokemon" />
      </label>
      {poke && <PokemonCard data={poke} />
      }
    </main>
  );
}
