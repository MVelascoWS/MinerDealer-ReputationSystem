import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="w-full p-5 bg-white">               
                <div className="flex items-center space-x-3">
                    <Link href="/"><img src="/mdLogo.png" alt="" width={43} height={45} className="cursor-pointer object-contain"/></Link>
                    <p className="text-2xl font-bold text-black">Miner Dealer</p>
                    <ul className="flex flex-grow justify-end items-end text-center gap-6 space-x-[100px] pr-[150px]">
                        <li className="headerLink"><Link href="/"><p>Ranking</p></Link></li>
                        <li className="headerLink"><Link href="/profile"><p>Profile</p></Link></li>
                        <li className="headerLink"><Link href="/faq"><p>Info</p></Link></li>
                    </ul>
                </div>     
        </nav>
      );
}
// @refresh reset
 
export default Navbar;
