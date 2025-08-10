import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between bg-[url(./image.jpg)] h-[5em] p-[2em]'>
      <div className=''>
        <ul className='flex items-center justify-between gap-5'>
          <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>HOME</li>
          <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>ABOUT US</li>
          <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>CATRING</li>
          <li className='text-white hover:text-[#F5652F] active:text-[#F5652F]'>LOACTION</li>
        </ul>
      </div>
      <div className='flex items-center justify-center '>
        <img src='./jclogo.png' className='h-[50px]'/>
      </div>
      <div className='flex items-center justify-between gap-5'>
       <button className='bg-[#F5652F] text-white rounded-[12px] py-[12px] px-[20px] text-[.8em]'>BOOK A TABLE</button>
       <button className='bg-[] text-[#F5652F] border border-[#F5652F] rounded-[12px] py-[12px] px-[20px] text-[.8em] hover:text-white hover:bg-[#F5652F]'>ORDER NOW</button>
      </div>
    </div>
  )
}

export default Header