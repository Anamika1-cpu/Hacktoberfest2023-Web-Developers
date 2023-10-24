import React from 'react'
import logo from "../assets/astronout.png"
import logo1 from "../assets/astronout1.png"
import bg from "../assets/bg.jpg"
import Navbar from './Navbar'
import "../styles.css"

function Header() {
  return (
   <>
   <div id='home' style={{backgroundImage: `url(${bg})`}} className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome to my Portfolio</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Hi! I'm Arsal Uddin</h1>
        <p className='text-white py-4 max-w-lg '>👋 Hello, I'm Arsal Uddin, a passionate Full Stack MERN Developer with a flair for creating dynamic and engaging web experiences. With a strong foundation in MongoDB, Express.js, React, and Node.js, I have the skills to bring your ideas to life from concept to deployment. My journey in the world of development has been a quest for innovative solutions and seamless user interactions. Whether I'm crafting intricate back-end logic or designing captivating front-end interfaces, I approach each challenge with dedication and creativity.</p>
        {/* <button className='  text-white text-2xl'>Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button> */}
      </div>
      <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
      <img className='w-96 ast-img' src={logo1} alt="" />
    
      </div>
      <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
     
      <img className='w-96 ast-img' src={logo} alt="" />
      </div>
   
    </div>
   </div>
   </>
  )
}

export default Header