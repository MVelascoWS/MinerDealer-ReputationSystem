import { GetServerSideProps } from "next";

interface SPs{
    data:{
        miner: string
        score: number
    }[]
}

export default function TableSPs({data}:SPs)
{
    return(
        <div>
            <div className="text-white">Data</div>
            <ul>
                {data.map(({miner, score}) =>(
                    <li key={miner}>
                        {score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async() =>{
    const res = await fetch("https://api.euro-salud.com/api/deals/getDeals");
    const data = await res.json();

    return {
        props:{
            data
        }
    }
}