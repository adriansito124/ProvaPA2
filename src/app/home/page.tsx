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
        main: "min-h-screen w-full bg-black flex-col flex justify-center items-center text-white",
        char: "flex flex row text-center flex-wrap"
    }

    return(
        <>  
            <main className={style.main}>
                <h1>Characters</h1>
                <div className={style.char}>
                {characters.map((item, index) => {
                    return(
                        <div key={item.id} className="flex justify-center flex-col">
                            <h2>{item.name}</h2>
                            <Image className="h-auto w-[200px]" src={item.image} width={300} height={300} alt="IMAGEM" priority={true}></Image>
                        </div>
                    )
                })}
                </div>
            </main>
        </>
    )
}
