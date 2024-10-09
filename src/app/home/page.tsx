"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

interface IData {
    name: string;
    id: number;
    image: string;
}

export default function Fetch() {

    const [characters, setCharacters] = useState<IData[]>([])

    useEffect(() => {
        const load = async () => {
            const res = await fetch("https://dragonball-api.com/api/characters?page=1&limit=58")
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
                <h1 className="text-3xl font-medium">Characters</h1>
                <div className={style.char}>
                {characters.map((item, index) => {
                    return(
                        <div key={item.id} className="flex justify-center flex-col m-3 bg-slate-700 gap-5 p-5">
                            <h2 className="text-2xl">{item.name}</h2>
                            <Image className=" h-96 w-full  md:w-flex" content="width=device-width, initial-scale=1.0" src={item.image} width={300} height={300} alt="IMAGEM" priority={true}></Image>
                        </div>
                    )
                })}
                </div>
                </div>
            </main>
        </>
    )
}
