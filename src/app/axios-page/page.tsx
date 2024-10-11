"use client"

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api"

interface IData {
    name: string;
    gender: string;
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
        main: "min-h-screen w-full bg-black flex-col flex justify-center items-center text-white"
    }

    return(
        <>
            <main className={style.main}>
                <h1>Pagina com use efect axios</h1>
                <input className="text-black" type="text" value={page} onChange={(e) => setPage(e.target.value)}placeholder="1/6 - Insira a página"></input>
                {erro && errormessage}
                <div className="min-h-screen w-full flex-row flex justify-center items-center flex-wrap m-36">
                    {data.map((item, index) => {
                        return(
                            <div>
                                <h2>{item.name}</h2>
                                <Image className="h-auto w-[200px]" src={item.image} alt="IMAGEM" width={300} height={300} priority={true}></Image>
                                <p>{item.gender}</p>
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default AxiosPage;