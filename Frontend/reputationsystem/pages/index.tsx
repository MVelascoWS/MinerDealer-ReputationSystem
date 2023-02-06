import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import MEntry from '../components/MEntry'
import Navbar from '../components/Navbar'
import Ranking from './ranking'

export default function Home(){  
  return (
    
      <div>
        <Navbar/>
        <img src="mdLogo.png" className="w-[300px] ml-auto mr-auto mt-[100px]"/>
        <div className="text-white text-[60px] text-center font-bold mt-[50px]">Miner Dealer</div>
        <div className="text-white text-[40px] text-center ">Reputation System</div>
         <Footer/>         
      </div>
      
  )
}



