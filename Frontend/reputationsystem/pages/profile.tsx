import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
const Profile = () => {
    return ( 
        <div>
            <Navbar />
            <div className="flex flex-row gap-4 justify-start items-start px-[160px] w-full h-1/2 mt-5">
                <div className="w-2/3 h-full relative flex flex-col gap-4 justify-end items-start px-[400px] py-[35px] bg-lwBlack">
                    <div className="">

                    </div>
                    <img src="" alt=""/>
                    <div className="text-white">Miner ID</div>
                    <div className="">
                    </div>
                </div>
                <div className="w-1/3 h-full">
                    <div className="text-mainBlue text-2xl px-[400px] py-[35px] bg-lwBlack">Badges</div>
                </div>
            </div>     
            <div className="flex flex-row gap-0 justify-start items-start px-[160px] w-full h-1/2 mt-5">
            <div className="w-1/2 h-full relative flex flex-col gap-0 justify-end items-start px-[400px] py-[35px] bg-lwBlack">
                    <div className="">

                    </div>
                    <img src="" alt=""/>
                    <div className="text-white">Miner ID</div>
                    <div className="">
                    </div>
                </div>
                <div className="w-1/2 h-full">
                    <div className="text-mainBlue text-2xl px-[400px] py-[35px] bg-lwBlack">Badges</div>
                </div>
            </div>       
            <Footer />
        </div>
     );
}
 
export default Profile;