"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api"

interface IData {
    name: string;
    ki: string;
    image: string;
    maxKi: string;
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([])
    const [erro, setErro] = useState<Boolean>(false)
    const [raca, setRaca] = useState<Boolean>(false)
    const [errormessage, setErrorMessage] = useState<string>("Pagina nao encontrada")
    const [page, setPage] = useState<string>("")

    


    useEffect(() => {
        api.get(`/characters?page=${page}`).then((res) => {
            if (Number(page)<7) {
              setData(res.data.items)  
              setErro(false)
            }
            else{
                setErro(true)
            }
        }).catch((error) => {
            setErrorMessage("Pagina nao encontrada")
        })
    }, [page])

    const style =
    {
        main: "min-h-screen w-full bg-slate-900 flex-col flex justify-center items-center items-center text-white",
        char: "flex flex-row text-center flex-wrap justify-center mt-10",
        ok: "flex justify-center flex-col items-center mt-12"
    }

    return(
        <>
            <main className={style.main}>
                <div className={style.ok}>
                    {raca == false ? 
                    <div className="flex items-center flex-col gap-2">
                        <h1 className="text-xl ">Paginas</h1>
                        <input className="rounded-lg p-1 text-black focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " type="text" value={page} onChange={(e) => setPage(e.target.value)}placeholder="1/6 - Insira a página"></input>
                        <h1 className="text-yellow-500">{erro && errormessage}</h1>
                    </div> : 
                    <div className="flex items-center flex-col gap-2">
                        <h1 className="text-xl">Racas</h1>
                        <input className="rounded-lg p-1 text-black focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 " type="text" value={page} onChange={(e) => setPage(e.target.value)}placeholder="1/6 - Insira a página"></input>
                        {erro && errormessage}
                    </div>}
                    
                    <div className={style.char}>
                        {data.map((item, index) => {
                            return(
                                <div className="flex justify-center flex-col m-3 bg-slate-700 gap-5 p-5 rounded-lg hover:bg-slate-600">
                                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                                    <Image className="object-scale-down h-80 hover:-rotate-3 transition-all duration-300 cursor-pointer filter  hover:scale-110 ease-in-out" src={item.image} width={250} height={50} alt="IMAGEM" priority={true}></Image>
                                    <div>
                                        <div className="flex gap-2">
                                            <p className="text-lg font-medium">Ki: </p>
                                            <p className="text-lg text-yellow-500 font-medium"> {item.ki}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="text-lg font-medium">Max Ki: </p>
                                            <p className="text-lg text-yellow-500 font-medium"> {item.maxKi}</p>
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

export default AxiosPage;