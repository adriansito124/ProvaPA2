"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api"

interface IData {
    name: string;
    ki: string;
    image: string;
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([])
    const [erro, setErro] = useState<Boolean>(false)
    const [errormessage, setErrorMessage] = useState<string>("Nao foi possivel buscar os dados")
    const [page, setPage] = useState<string>("")

    


    useEffect(() => {
        api.get(`/characters?page=${page}`).then((res) => {
            if (Number(page)<7) {
              setData(res.data.items)  
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
        main: "min-h-screen w-full bg-slate-900 flex-col flex justify-center items-center items-center text-white ",
        char: "flex flex-row text-center flex-wrap justify-center mt-10",
        ok: "flex justify-center flex-col items-center mt-12"
    }

    return(
        <>
            <main className={style.main}>
                <div className={style.ok}>
                    <h1>Pagina com use efect axios</h1>
                    <input className="text-black" type="text" value={page} onChange={(e) => setPage(e.target.value)}placeholder="1/6 - Insira a página"></input>
                    {erro && errormessage}
                    <div className={style.char}>
                        {data.map((item, index) => {
                            return(
                                <div className="flex justify-center flex-col m-3 bg-slate-700 gap-5 p-5">
                                    <h2 className="text-2xl">{item.name}</h2>
                                    <Image className=" h-96 w-full  md:w-flex" content="width=device-width, initial-scale=1.0" src={item.image} width={300} height={300} alt="IMAGEM" priority={true}></Image>
                                    <p className="text-lg">Ki: {item.ki}</p>
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