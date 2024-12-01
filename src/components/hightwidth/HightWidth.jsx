

import React, { useLayoutEffect, useState, useSyncExternalStore } from 'react'

const HightWidth = () => {
  const [windowSize , setWindowsize] = useState({
    hight: 0,
    width: 0,
  });
  
  useLayoutEffect(()=>{

    function HightWidth(){
      setWindowsize({
        hight: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize" , HightWidth);
    return ()=>{
      window.removeEventListener("resize" , HightWidth)
    }
  },[])

  return windowSize;
}

export default HightWidth