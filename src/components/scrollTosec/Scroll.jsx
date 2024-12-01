import React from 'react'

const Scroll = () => {
  const data = [
    {
      label: "1st cart",
      style: {
        window:"50%",
        hight: "5rem",
        background: "#CDC1FF"
      }
    },
    {
      label: "2nd cart",
      style: {
        window:"50%",
        hight: "5rem",
        background: "#F95454"
      }
    },
    {
      label: "3rd cart",
      style: {
        window:"50%",
        hight: "5rem",
        background: "#86D293"
      }
    },
    {
      label: "4th cart",
      style: {
        window:"50%",
        hight: "5rem",
        background: "#D76C82"
      }
    },
    {
      label: "5th cart",
      style: {
        window:"50%",
        hight: "5rem",
        background: "#E4B1F0"
      }
    }
  ]
  console.log(data)

  return (
    <div className='scroll_to_sec'>
      <h1>scrol to a particular section</h1>
      <button>click to scroll</button>
      {
        data.map((item , idx)=>{
          <div style={item.style}>
        <h3>{item.label}</h3>
      </div>
        })
      }
    </div>
  )
}

export default Scroll
