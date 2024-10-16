import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string;
    op2: string;
    op3: string;
}

export const Menu:React.FC<IMenu> = ({op1, op2, op3}) => {

    const style =
    {
        p: "bg-slate-700 px-2 py-1 min-w-20 w-1/12 text-branco text-lg cursor-pointer border rounded-2xl text-white font-medium hover:scale-105 transition duration-150 ease-in-out hover:text-yellow-500",
        nav: "text-preto bg-slate-800 gap-3 p-3 font-robFont text-large flex flex-row justify-around align-center  w-full flex-wrap text-center" 
    }

    return(
        <>
            <nav className={style.nav}>
                <Link href={ROUTES.fetch} className={style.p}>{op1}</Link>
                <Link href={ROUTES.axiosPage} className={style.p}>{op2}</Link>   
                <Link href={ROUTES.serverPage} className={style.p}>{op3}</Link>
            </nav>
        </>
    )
}