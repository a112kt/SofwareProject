import React from 'react'
import img1 from "./.././../assets/headerChair.png"
import { NavLink } from 'react-router-dom'
import Products from '../Products/Products'
import productImg1 from './../../assets/homeChair.png'
import productImg2 from './../../assets/lamp.png'
import productImg3 from './../../assets/pot.png'
import productImg4 from './../../assets/bed.png'
import { CiTimer } from "react-icons/ci";
import { FiDollarSign } from "react-icons/fi";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlinePolicy } from "react-icons/md";
import light from './../../assets/light-bulb_8534606.png'
import InteriorDesign from './../../assets/interior-design_2400622.png'
import OutdoorDesign from './../../assets/painting_2821314.png'

export default function Home() {
  return (
   <>
   {/* Home Content */}
   <div className="Home main_color min-h-100">
  <div className="lg:flex">
  <div className="w-full md:w-1/2 lg:mt-10 p-10 lg:ms-10">
    <h1 className='mt-10'>Modern Interior Design Studio</h1>
    <p className='mt-5'>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
    <div className="flex mt-10">
      <NavLink to="/product"  className="HomeShop">Shop Now</NavLink>
    </div>
    </div>
    <div className="Home_chair  md:w-1/2 lg:me-40 w-full ">
    <img src={img1} alt="Home chair"/>

    </div>
  </div>
   </div>


   {/* Product Content  */}
   <div className="main_color2">
    <h1 className='text-center text-2xl fa-font-awesome-flag font-bold pt-10'>Best Sellers This Week</h1>
  <div className="flex flex-wrap">
  <div class="product-card  w-1/2 lg:w-1/4 text-center">
        <div class="image-container p-4 ">
            <img src={productImg1} className='h-[250px] ms-4'  alt="Kruzo Aero Chair" />
        </div>
        <div class="product-info mb-2">
            <h3>Kruzo Aero Chair</h3>
            <p><strong>$78.00</strong></p>
            <button class="add-btn bottom-btn"><p className=' text-3xl'>+</p></button>
        </div>
    </div>

    <div class="product-card  w-1/2 lg:w-1/4 text-center">
        <div class="image-container p-3">
            <img src={productImg2} className='h-[250px]' alt="Kruzo Aero Chair" />
        </div>
        <div class="product-info mb-2">
            <h3>Lamp</h3>
            <p><strong>$60.00</strong></p>
            <button class="add-btn bottom-btn"><p className=' text-3xl'>+</p></button>
        </div>
    </div>


    <div class="product-card h-[200px] w-1/2 lg:w-1/4 text-center">
        <div class="image-container p-3">
            <img src={productImg3}className='h-[250px]'   alt="Kruzo Aero Chair"/>
        </div>
        <div class="product-info mb-2">
            <h3>Classic Pot</h3>
            <p><strong>$78.00</strong></p>
            <button class="add-btn bottom-btn"><p className=' text-3xl'>+</p></button>
        </div>
    </div>



    <div class="product-card  w-1/2 lg:w-1/4 text-center">
        <div class="image-container p-3">
            <img src={productImg4}  className='h-[250px]' alt="Kruzo Aero Chair"/>
        </div>
        <div class="product-info mb-2">
            <h3>Woody Cozy Bed</h3>
            <p><strong>$78.00</strong></p>
            <button class="add-btn bottom-btn"><p className=' text-3xl'>+</p></button>
        </div>
    </div>

  </div>
  <div className="p-4">
  <NavLink to='/product' className='btn_product block ms-auto'>All Product 🔜</NavLink>
    
  </div>
    </div>

 
  {/* About Au */}
  <div className="main_color2">
   <h1 className='text-center text-2xl fa-font-awesome-flag font-bold pt-10'>Why You Choose Us</h1>
   <div className="flex flex-wrap  mt-10">
    <div className="w-1/2 lg:w-1/4 text-center">
    <div className="about m-2">
    <div className="flex ">
      <p className='text-xl text-gray-800 p-2 ms-auto'><CiTimer /></p>
      <p className='text-xl font-bold mt-1 me-auto'>Shop online</p>
    </div>
    <p className='text-xl p-1'>Get Your favorite Pieces delivered to your door without extra cost</p>
    </div>
    </div>

    <div className="w-1/2 lg:w-1/4 text-center">
    <div className="about m-2">
    <div className="flex ">
      <p className='text-xl text-gray-800 p-2 ms-auto'><MdOutlinePolicy /></p>
      <p className='text-xl font-bold mt-1 me-auto'>Shop online</p>
    </div>
    <p className='text-xl p-1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, minus.</p>
    </div>
    </div>


    <div className="w-1/2 lg:w-1/4 text-center">
    <div className="about m-2">
    <div className="flex ">
      <p className='text-xl text-gray-800 p-2 ms-auto'><CiShoppingBasket /></p>
      <p className='text-xl font-bold mt-1 me-auto'>Easy to shop</p>
    </div>
    <p className='text-xl p-1'>Get Your favorite Pieces delivered to your door without extra cost</p>
    </div>
    </div>


    <div className="w-1/2 lg:w-1/4 text-center">
    <div className="about m-2">
    <div className="flex ">
      <p className='text-xl text-gray-800 p-2 ms-auto'><FiDollarSign /></p>
      <p className='text-xl font-bold mt-1 me-auto'>Patment</p>
    </div>
    <p className='text-xl p-1'>Payment Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, rem.</p>
    </div>
    </div>
   </div>
  </div>
   


   {/* Our Servies */}
   <div className="main_color2 ">
    <div className="px-10 pb-5">
    <h1 className='text-center text-4xl fa-font-awesome-flag font-bold p-10 '>Our Servies</h1>

    <div className="Servies flex">
      <div className="w-1/4 lg:ps-20"><img src={light} alt="light" className='w-[100px] mt-10 lg:mt-3' /></div>
      <div className="w-3/4 ">
      <h2 className='text-2xl fa-font-awesome-flag font-bold  text-center'>Lighting Design</h2>
      <p className='text-gray-800 mt-2 ms-2 lg:ms-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa eius delectus sit est soluta a explicabo hic natus! Modi.</p>
      </div>
    </div>



    <div className="Servies flex mt-2">
      <div className="w-1/4 lg:ps-20"><img src={InteriorDesign} alt="light" className='w-[100px] mt-10 lg:mt-3' /></div>
      <div className="w-3/4 ">
      <h2 className='text-2xl fa-font-awesome-flag font-bold  text-center'>Interior Design</h2>
      <p className='text-gray-800 mt-2 ms-2 lg:ms-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa eius delectus sit est soluta a explicabo hic natus! Modi.</p>
      </div>
    </div>



    <div className="Servies flex mt-2 ">
      <div className="w-1/4 lg:ps-20"><img src={OutdoorDesign} alt="light" className='w-[100px] mt-10 lg:mt-3' /></div>
      <div className="w-3/4 ">
      <h2 className='text-2xl fa-font-awesome-flag font-bold  text-center'>Outdoor Design</h2>
      <p className='text-gray-800 mt-2 ms-2 lg:ms-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium culpa eius delectus sit est soluta a explicabo hic natus! Modi.</p>
      </div>
    </div>




    <div className="p-4">
  <NavLink to='/servies' className='btn_product block ms-auto'>More Servies 🔜</NavLink>
    
  </div>



    </div>

   </div>
   </>
  )
}
