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
        main: "min-h-screen w-full bg-gradient-to-b from-slate-700 to-slate-900 flex-col flex justify-center items-center items-center text-white text-2xl",
        char: "flex flex-row text-center flex-wrap justify-center gap-10 m-5 ",
        ok: "flex justify-center flex-col items-center"
    }

    return(
        <main className={style.main}>
            <div className={style.ok}>
                <div className={style.char}>
                    <div className="flex flex-row justify-around w-full gap-2 flex-wrap">
                        <div className="bg-slate-600  border rounded-2xl px-3 py-1 m-1 flex flex-row gap-2">
                            <h1>ID: </h1>
                            <h1 className="text-yellow-500">{data.id}</h1>
                        </div>
                        <div className="bg-slate-600  border rounded-2xl px-3 py-1 m-1 flex flex-row gap-2">
                            <h1>Ki: </h1>
                            <p className="text-yellow-500">{data.ki}</p>
                        </div>
                        <div className="bg-slate-600  border rounded-2xl px-3 py-1 m-1 flex flex-row gap-2">
                            <h1>Race: </h1>
                            <p className="text-yellow-500">{data.race}</p>
                        </div>
                        <div className="bg-slate-600  border rounded-2xl px-3 py-1 m-1 flex flex-row gap-2">
                            <h1>Gender: </h1>
                            <p className="text-yellow-500">{data.gender}</p>
                        </div>
    
                    </div>    
                
                    <div className="flex items-center flex-col m-3 gap-5 p-5">
                        <p className="text-4xl font-semibold">{data.name}</p>
                        <div className="flex items-center flex-col m-3 p-5">
                            <Image className="object-scale-down hover:rotate-2 h-96 hover:scale-125 transition duration-500 ease-in-out" src={data.image} alt="Photon" width={300} height={200} priority={true}></Image>
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