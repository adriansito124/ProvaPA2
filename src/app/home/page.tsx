"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface IData {
    name: string;
    id: number;
    image: string;
    race: string;
    ki: string;
    gender: string;
}

export default function Fetch() {

    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://dragonball-api.com/api/characters?limit=58")
            const data = await res.json()
            setCharacters(data.items)
        }
        load();
    }, [])

    const style =
    {
        main: "min-h-screen w-full bg-slate-900 flex-col flex justify-center items-center items-center text-white ",
        char: "flex flex-row text-center flex-wrap justify-center mt-10",
        ok: "flex justify-center flex-col items-center mt-12"
    }

    return(
        <>  
            <main className={style.main}>
                <div className={style.ok}>
                <h1 className="text-3xl font-medium text-yellow-500">Characters</h1>
                <div className={style.char}>
                {characters.map((item, index) => {
                    return(
                        <div key={item.id} className="flex  flex-col m-3 bg-slate-700 gap-5 p-5 justify-between rounded-lg hover:bg-slate-600">
                            <h2 className="text-2xl font-semibold">{item.name}</h2>
                            <Image className="object-scale-down h-80 hover:scale-110  hover:rotate-3 transition duration-150 ease-in-out"  src={item.image} width={250} height={50} alt="IMAGEM" priority={true}></Image>
                            <div>
                                <div className="flex gap-2">
                                    <p className="text-lg font-medium">Race: </p>
                                    <p className="text-lg text-yellow-500 font-medium"> {item.race}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-lg font-medium">Gender: </p>
                                    <p className="text-lg text-yellow-500 font-medium"> {item.gender}</p>
                                </div>
                                <div className="flex gap-2">
                                    <p className="text-lg font-medium">Base Ki: </p>
                                    <p className="text-lg text-yellow-500 font-medium"> {item.ki}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
                </div>
                </div>
            </main>
        </>
    )
}
