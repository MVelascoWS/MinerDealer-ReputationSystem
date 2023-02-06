const FooterD = () => {
    return ( 
        <div className="relative w-full p-5 bg-white bottom-0">
            <div className="flex flex-grow justify-center items-center text-center gap-6">
                <p className="cursor-pointer  text-sm font-bold text-black transition duration-300 hover:text-[#0090FF]">@minerdealer</p>
                <a href="https://github.com/MVelascoWS/MinerDealer-ReputationSystem" target="_blank">
                    <img src="/gitHubLogo.png" alt="" width={32} height={32} className="cursor-pointer object-contain"/>
                </a>
                <img src="/twitterLogo.png" alt="" width={32} height={32} className="cursor-pointer object-contain"/>
            </div>
        </div>
     );
}
 
export default FooterD;