import Image from "next/image";

interface IPerso {
    params: {
        id: string;
    }
}

interface IData {

    id: string;
    name: string;
    ki: string;
    race: string;
    gender: string;
    image: string;
    description: string;

}

interface IDataStaticIndex {
    items: IData[]
}


const Perso = async ({params: {id}} : IPerso) => {
    const res = await fetch(`https://dragonball-api.com/api/characters/${id}`)
    const data: IData = await res.json()

    const style =
    {
        main: "min-h-screen w-full bg-slate-900 flex-col flex justify-center items-center items-center text-white text-2xl",
        char: "flex flex-row text-center flex-wrap justify-center mt-10 gap-10 m-5",
        ok: "flex justify-center flex-col items-center mt-12"
    }

    return(
        <main className={style.main}>
            <div className={style.ok}>
                <div className={style.char}>
                    <div className="flex flex-row justify-around w-full gap-2">
                        <h1 className="bg-slate-600 border rounded-2xl px-3 py-1">ID: {data.id}</h1>
                        <p className="bg-slate-600 border rounded-2xl px-3 py-1">Ki: {data.ki}</p>
                        <p className="bg-slate-600 border rounded-2xl px-3 py-1">Race: {data.race}</p>
                        <p className="bg-slate-600 border rounded-2xl px-3 py-1">Gender: {data.gender}</p>
                    </div>    
                
                    <div className="flex items-center flex-col m-3 gap-5 p-5">
                        <p className="text-4xl font-semibold">{data.name}</p>
                        <div className="flex items-center flex-col m-3 p-5">
                            <Image className=" h-96 w-full md:w-flex" content="width=device-width, initial-scale=1.0" src={data.image} alt="Photon" width={300} height={200} priority={true}></Image>
                        </div>
                        <p>{data.description}</p>
                    </div>
                    
                </div>
            </div>
        </main>
    )
}

export default Perso

export async function generateStaticParams(){
    const res = await fetch("https://dragonball-api.com/api/characters")
    const data:  IDataStaticIndex = await res.json();

    return data.items.map((item) => item.id.toString());
}