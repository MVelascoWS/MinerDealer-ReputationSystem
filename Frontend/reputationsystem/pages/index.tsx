import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import MEntry from '../components/MEntry'
import Navbar from '../components/Navbar'
import Ranking from './ranking'

const Home: NextPage = () => {
  return (
    
      <div>
        <Navbar/>
        <div className="w-full flex flex-row justify-between self-end items-start px-[160px]">
          <div className=" gap-2 flex flex-col justify-start self-end items-start">
            <div className="pt-10 text-2xl font-bold text-mainBlue">Hi Miner!</div>
            <div className="text-base font-regular py-5 text-white">
            See the complete Filecoin miner ranking, know metrics<br/>details of
            performance and get NFT badges for your score.
            </div>
            <div className="flex w-[420px] flex-row justify-between items-start px-[30px] py-[10px] rounded-[40px] bg-white">
              <div className="text-nearBlack text-[18px] whitespace-nowrap">Search your ID</div>
              <div className="w-[25px] relative gap-[14px] flex flex-col justify-end items-start">
                <img className="w-16px h-16px min-w-0 min-h-0 left-0 top-0 absolute" src="/search.png" alt=""></img>
              </div>
            </div>
          </div>
          <div className="w-[360px] relative gap-[5px] flex flex-col justify-end items-end pr-[782px] top-[174px]">
            <img src="/decoHead.png" alt="" className="absolute w-[960px] top-[-174px] right-[-160px]"></img>
            <Link href="/profile">
            <div className="relative bottom-0 flex flex-col justify-end items-end py-[10px] px-[140px] rounded-[40px] bg-gradient-to-r from-mainBlue to-green">
              <div className="w-[75px] text-nearBlack text-xl font-bold whitespace-nowrap text-center">Profile</div>
            </div>
            </Link>
          </div>
        </div>        
        <div className="tableContainer">
          <table className="table-fixed border-separate border-spacing-y-[10px]">
            <thead>
              <th className="tableMetric">
                <div className="comboContent">                
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>                  
                  <span className="metricText">Rank</span>
                </div>
              </th>
              <th className="tableIsoMetric">Miner ID</th>
              <th className="tableIsoMetric">Country</th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Total Raw<br />Power</span>
                </div>
              </th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Total Quality<br />Adjusted<br />Power</span>
                </div>
              </th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Last Price<br />For Verified<br />Deals</span>
                </div>
              </th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Last Price<br />For Non<br />Verified Deals</span>
                </div>
              </th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Committed<br />Capacity</span>
                </div>
              </th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Average<br />Storage Deal<br />Price</span>
                </div>
              </th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Deal<br />Success<br />Predictors</span>
                </div>
              </th>
              <th className="tableMetric">
                <div className="comboContent">
                  <div className="arrowFilter">
                    <img className="arrowImg" src="https://file.rendit.io/n/zwbE1LxastIYetnIzuAq.svg" alt=""/>
                    <img className="arrowImg" src="https://file.rendit.io/n/oY2L2RwcNoISw5Xuhkvz.svg" alt=""/>
                  </div>
                  <span className="metricText">Score</span>
                </div>
              </th>
              <th className="tableIsoMetric">Badge</th>
            </thead>
            <tbody >
              <MEntry/>
              <MEntry/>
              <MEntry/>
              <MEntry/>
            </tbody>
          </table>
        </div>

        <Footer/>
      </div>
  )
}

export default Home
