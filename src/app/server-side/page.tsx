import Link from "next/link";
import { Suspense } from "react";

type IData = {
    items : {
        name: string;
        id: string;
    }[]
}

const Serverside = async () => {

    const res = await fetch("https://dragonball-api.com/api/characters")
    const data: IData = await res.json()
    console.log(data)

    const style =
    {
        main: "min-h-screen w-full bg-black flex-col flex justify-center items-center text-white"
    }

    return(
        <>
            <main className={style.main}>
                <h1>Personagens</h1>
                <Suspense fallback={<div>Loading...</div>}>
                    {data.items.map((item, index) => {
                        return(
                            <div key={item.id}>
                                <h2>{item.name}</h2>
                                <Link href={`/perso/${item.id}`}>ABRIR</Link>
                            </div>
                        )
                    })}
                </Suspense>
            </main>
        </>
    )
}

export default Serverside