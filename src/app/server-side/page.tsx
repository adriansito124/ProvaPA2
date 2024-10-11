import Link from "next/link";
import { Suspense } from "react";
import  Image  from "next/image";

type IData = {
    items : {
        name: string;
        image: string;
        id: string;
    }[]
}

const Serverside = async () => {

    const res = await fetch("https://dragonball-api.com/api/characters?limit=58")
    const data: IData = await res.json()
    console.log(data)

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
                        <Suspense fallback={<div>Loading...</div>}>
                            {data.items.map((item, index) => {
                                return(
                                        <div key={item.id} className="bg-slate-700 m-3 gap-5 max-w-lg rounded-lg flex items-center flex-col p-5 hover:bg-slate-600">
                                            <div className="flex items-center flex-col  gap-5   transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
                                                <h2 className="text-2xl font-semibold">{item.name}</h2>
                                                <Image className="object-scale-down h-80 hover:rotate-6 hover:scale-110 transition duration-150 ease-in-out" src={item.image} width={300} height={300} alt="IMAGEM" priority={true}></Image>
                                                
                                            </div>
                                            <Link className="bg-slate-600 px-2 py-1 w-20 text-branco text-lg cursor-pointer border rounded-2xl hover:text-yellow-500 text-white font-medium hover:scale-105 hover:bg-slate-700 transition duration-150 ease-in-out" href={`/perso/${item.id}`}>ABRIR</Link>
                                        </div>
                                )
                            })}
                        </Suspense>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Serverside