import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Profile = () => {
    return ( 
        <div>
            <Navbar />
            <div className="flex flex-col gap-4 px-[160px] w-full h-[700px] mt-5">                
                <div className="flex flex-row grow gap-4 w-full h-1/2">
                    <div className="flex flex-row w-2/3 h-full bg-lwBlack">
                        <div className="w-2/5">
                            <img src="/FVMGraph.png" alt="" className="left-4 relative h-full object-cover"/>
                        </div>
                        <div className="w-3/5 grid grid-cols-2 gap-y-2 gap-x-0 place-content-center my-2 py-2 px-2">
                            <div className="dataRectE p-5" >
                                <div className="flex flex-col w-3/5 justify-center">
                                    <div className="text-left text-mainBlue text-[45px] font-bold">f01662887</div>
                                    <div className= "text-left text-white text-[20px]">Miner ID</div>
                                </div>
                            </div>
                            <div className="dataRectB p-2">
                                <img src="/score.png" alt="" className="relative object-contain w-2/5 px-5"/>
                                <div className="flex flex-col w-3/5 justify-center">
                                    <div className="text-white text-[45px] font-bold">100</div>
                                    <div className="text-white text-[20px]">Score</div>
                                </div>
                            </div>
                            <div className="dataRect p-2">
                                <img src="/rank.png" alt="" className="relative object-contain w-2/5 px-5"/>
                                <div className="flex flex-col w-3/5 justify-center">
                                    <div className="text-white text-[45px] font-bold">1</div>
                                    <div className="text-white text-[20px]">Rank</div>
                                </div>
                            </div>
                            <div className="dataRect p-2">
                                <img src="/capacity.png" alt="" className="relative object-contain w-2/5 px-5"/>
                                <div className="flex flex-col w-3/5 justify-center">
                                    <div className="text-white text-[45px] font-bold">1234</div>
                                    <div className="text-white text-[20px]">Capacity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 h-full bg-lwBlack flex flex-col">                    
                        <div className=" px-[150px] my-5 items-center">
                            <div className="rounded-[40px] bg-gradient-to-r from-mainBlue to-green text-center">
                                <div className=" text-nearBlack text-xl font-bold whitespace-nowrap py-2">Claim NFT</div>
                            </div>        
                        </div>    
                        <div className="flex flex-row h-3/4 place-content-stretch">
                            <img src="/bagdeEmpty.png" alt="" className="p-0 grow relative w-1/4 object-contain px-5"/>
                            <img src="/bagdeEmpty.png" alt="" className="pb-[80px] grow relative w-2/5 object-contain px-5"/>
                            <img src="/bagdeEmpty.png" alt="" className="p-0 grow relative w-1/4 object-contain px-5"/>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="flex flex-row grow gap-0 w-full h-1/2">
                    <div className="w-full h-full bg-lwBlack flex flex-row">
                        <div className="w-1/2 flex flex-row">
                            <div className="w-1/3 flex flex-col px-5">
                                <div className="grow">
                                    <div className="text-left text-white text-[30px] ">Total Deals</div>
                                    <div className="text-left text-white text-[30px] ">1000</div>
                                </div>
                                <div className="grow-0 bottom-0">
                                    <div className="flex flex-row mb-2">
                                        <div className="w-5 h-5 bg-mainBlue"></div>
                                        <div className="text-white text-sm ml-2">Succed</div>
                                    </div>
                                    <div className="flex flex-row mb-5">
                                        <div className="w-5 h-5 bg-green"></div>
                                        <div className="text-white text-sm ml-2">Fail</div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/3"></div>
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <div className="h-1/4 text-center text-white text-[30px] ">Linear</div>
                            <div className="h-2/4">

                            </div>
                            <div className="h-1/4">
                                <div className="h-8 flex flex-row w-full px-10">
                                    <div className="timeFilter">24h</div>
                                    <div className="timeFilter">7d</div>
                                    <div className="timeFilter">14d</div>
                                    <div className="timeFilter">30d</div>
                                    <div className="timeFilter">90d</div>
                                    <div className="timeFilter">180d</div>
                                    <div className="timeFilter">1y</div>
                                    <div className="timeFilter">Max</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
            <Footer />
        </div>
     );
}
 
export default Profile;