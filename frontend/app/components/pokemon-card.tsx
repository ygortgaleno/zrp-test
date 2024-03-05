/* eslint-disable @next/next/no-img-element */
'use client';

import { Pokemon } from "../lib/pokemon-backend.entity";

export default function PokemonCard(props: Record<'data', Pokemon>) {
    const {data} = props;

    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="col-start-5 row-span-2 col-span-4 bg-slate-300 rounded-lg  overflow-hidden shadow-lg">
            <img src={data.imageUrl} alt='Pokemon' className="w-full h-2/4 place-self-center bg-gray-200" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{capitalize(data.name)}</div>
                <hr className="my-2 h-0.5 border-t-2" />
                Abilities: {data.abilities.map(ability => (
                    <p key={ability.name} className="text-gray-700 text-base">
                        {capitalize(ability.name)}
                    </p>
                ))}
            </div>
        </div>
    );
}
