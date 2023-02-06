import Footer from '../components/Footer'
import FooterD from '../components/FooterD';
import Navbar from '../components/Navbar'

const Faq = () => {
    return (  
        <div>
            <Navbar />
            <div className="flex flex-row px-[160px]">
                <div className="w-1/4">
                <div className="paragraphIndex">
                    <ul className="list-disc px-5">
                        <li>Methodology</li>
                        <br/>
                        <li>Reputation Formulas</li>
                        <ol className="list-decimal px-5">
                            <li className="text-base">Deals</li>
                            <li className="text-base" >RPB and QAP  sector tests</li>
                        </ol>
                    </ul>
                    <div className="bgwhite"></div>
                </div>

                </div>
                <div className="w-3/4 flex flex-col">
                    <div className="headerInfo">Methodology</div>
                    <div className="paragraphInfo">
                    Reputation systems allow customers to identify which miners choose for storage or recovery business. Let platforms know the performance, commitment and behavior of miners before giving loans. Also, miners can use it as a guide to improve their own service.
                    <br/>
                    <br/>
                    The reputation system considers all players in the Filecoin ecosystem calculating the scores and showing the results to averages of different areas evaluated, as well, considering they receive their feedback from new proposal improvements.
                    <br/>
                    <br/>
                    Our principal goal is to provide a useful system for miners, customers and protocols, and will be the best reference when they want to require this information. Also take the existing data as a main point for proposing improvements and new metrics to be evaluated from contributors.
                    <br/>
                    <br/>
                    The reputation system information will provide this data through a public API and a web dashboard.
                    </div>
                    <div className="headerInfo">Reputation Formulas</div>
                    <div className="paragraphInfo">
                    The score is divided into several components to cover all aspects that influence the successful execution of the storage agreement.
                    <br/>
                    <br/>
                    <div>
                    <ul className="list-disc px-5">
                        <li>Maximum score of each miner: 100 points</li>
                        <li>Score is based on 2 sets</li>
                        <ul className="list-disc px-5">
                            <li>Deal metrics 40%</li>
                            <li>Sectorial test metrics 60%</li>
                        </ul>
                    </ul>
                    </div>
                    </div>
                    <div className="headerInfo">1.- Deals</div>
                    <div className="paragraphInfo">
                    Deals are the fundamental base for the storage business. These can succeed or fail due to certain issues between customers and miners.
                    <br/>
                    <br/>
                    At this point, we only focus on the total number of deals that the miner has performed, this result could be positive or negative, as shown:
                    <br/>
                    <br/>
                    Successful Deal = 1
                    <br/>
                    Failed Deal = 0        
                    <br/>
                    <br/>
                    Next, we describe the following variables:
                    <br/>
                    <br/>
                    t = number of deals
                    <br/>
                    g= logarithmic equation of the curve that fits the distribution
                    <br/>
                    Formula:
                    <br/>
                    <br/>
                    Formula:
                    <br/>
                    <img src="/formula.png" alt="" className=""/>
                    The result obtained from the formula will be multiplied by 40%
                    <br/>
                    <br/>
                    Note: Some deals listed as zeros may be private deals.
                    </div>
                    <div className="headerInfo">2.- RPB and QAP sector tests</div>
                    <div className="paragraphInfo">
                    Obtaining statistics on failed sectors is essential. Fewer failures let the miner be rewarded with an excellent score and provide storage demand.
                    The approach is similar to the deal’s formula.
                    <br/>
                    <br/>
                    For evaluate these tests, we will divide them into 4 formulas, with these following variables:
                    <br/>
                    <br/>
                    <p className=" underline">Formula 1. RBP new daily fail</p>
                    <br/>
                    t = Number of RBP Size failures (in bytes) of sectors terminated by the storage provider in the last 24 hours.
                    g= Logarithmic equation of the curve that fits the distribution.
                    <br/>
                    <br/>
                    <p className=" underline">Formula 2. QAP new daily fail</p>
                    <br/>
                    t = Number of QAP Quality Adjusted Power failures (in bytes) of sectors terminated by the storage provider in the last 24 hours.
                    g= Logarithmic equation of the curve that fits the distribution.
                    <br/>
                    <br/>
                    <p className=" underline">Formula 3. RBP active failure</p>
                    <br/>
                    t = Number of New RBP failures Size (in bytes) of sectors actively terminated by the storage provider in the last 24 hours (active termination is when sectors are actively terminated by storage providers).
                    g= Logarithmic equation of the curve that fits the distribution.
                    <br/>
                    <br/>
                    <p className=" underline">Formula 4. QAP active fail</p>                    
                    <br/>
                    t = Number of New QAP Power Quality-adjusted failures (in bytes) of sectors actively terminated by the storage provider in the last 24 hours (active termination is when sectors are actively terminated by storage providers).
                    g= Logarithmic equation of the curve that fits the distribution.
                    <br/>
                    <br/>
                    The result obtained from each formula will be multiplied by 15%, giving a total of 60%.
                    <br/>
                    <br/>
                    </div>
                </div>
            </div>
            <FooterD />
        </div>
    );
}
 
export default Faq;