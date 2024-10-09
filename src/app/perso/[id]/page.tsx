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

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.ki}</p>
            <p>{data.race}</p>
            <p>{data.gender}</p>
            <Image className="h-auto w-[500px]" src={data.image} alt="Photon" width={300} height={200} priority={true}></Image>
            <p>{data.description}</p>
        </div>
    )
}

export default Perso

export async function generateStaticParams(){
    const res = await fetch("https://dragonball-api.com/api/characters")
    const data:  IDataStaticIndex = await res.json();

    return data.items.map((item) => item.id.toString());
}