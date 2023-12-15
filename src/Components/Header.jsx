import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {SiAwslambda} from "react-icons/si"


function Header() {
    const [nav, setnav] = useState(false);

    const handleNav = () => {
        setnav(!nav)
    }

    


    return(
        <div class="container flex justify-between mx-auto py-4 border-b-2 h-20 text-white p-3">

        <SiAwslambda size={30} style={{fill:"#1686CD"}} class="contactIcon" />
        <ul class="space-x-7 text-lg hidden md:flex">        
                <li><span class="text-[#1686CD] pl-1 text-base px-1">01.</span>About</li>
                <li><span class="text-[#1686CD] pl-1 text-base px-1">02.</span>Experience</li>
                <li><span class="text-[#1686CD] pl-1 text-base px-1">03.</span>Projects</li>
                <li><span class="text-[#1686CD] pl-1 text-base px-1">04.</span>Contact</li>  
                </ul>
                <div onClick={handleNav} className='block md:hidden z-50 '>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
                    
                </div> 
                <div class={nav ? 'fixed right-0 top-0 w-[40%] h-full bg-[#0a192f] ease-in-out duration-500 text-center  ': 'fixed right-[-100%] lg:hidden ease-in-out duration-500'} >
                <ul class=" pt-8 uppercase p-4">
                <li class="py-10"><span class="text-[#1686CD] pl-1 text-base px-1">01.</span>About</li>
                <li class="py-10"><span class="text-[#1686CD] pl-1 text-base px-1">02.</span>Experience</li>
                <li class="py-10"><span class="text-[#1686CD] pl-1 text-base px-1">03.</span>Projects</li>
                <li class="py-10"><span class="text-[#1686CD] pl-1 text-base px-1">04.</span>Contact</li> 
                </ul>
                </div>            
        </div>
    )
}


export default Header;