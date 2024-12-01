

import React, { useRef } from 'react'
import Fetchdata from './Fetchdata'
import HightWidth from '../hightwidth/HightWidth';
import './Page.css'
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import Scroll from '../scrollTosec/Scroll';

function FetchdataText() {
  const {data ,error , loding} = Fetchdata("https://dummyjson.com/products?limit=60",{});
  const {hight , width} = HightWidth();

  function handelTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const bottomRef = useRef();
  function handelBottom(){
    bottomRef.current.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div>
      <div className='page' >

      <h1>UseFetch Hook(test)</h1>

      <span onClick={handelBottom}><FaArrowDown /></span>


      <div className="page_container">
        
        {error && <h2>{error}</h2>}
      {loding && <h2>Loding...</h2>}
      {
        data && data.products.length && data.products.map((item , idx)=>{
          return <h3 key={idx}>{item.title}</h3>
        })
      }
      </div>

      <div className='hw'>
        <h1>Use window resize</h1>
        <h3>
          the hight is {hight}
        </h3>
        <h3>
          page width is {width};
        </h3>
      </div>

      <Scroll />
      <span onClick={handelTop} ref={bottomRef}><FaArrowUpLong /></span>

    </div>
    </div>
  )
}


export default FetchdataText
