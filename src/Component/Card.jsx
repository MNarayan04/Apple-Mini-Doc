import React from 'react';
import { FaFileLines } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import {motion} from "framer-motion"


function Card(props) {
    return (
        <motion.div drag dragConstraints={props.reference} whileDrag={{scale:1.3}} dragElastic={.2}    dragTransition={{bounceDamping:500,bounceDamping:20}} className='flex-shrink-0 w-60 h-72  text-white p-10  m-10  rounded-[36px] bg-zinc-500 relative overflow-hidden'>
            <FaFileLines />
        <p className=' text-sm leading-tight mt-5 font-semibold'> 
            {props.data.desc}
        </p>
        <div className='footer absolute bottom-0  w-full h-15 left-0'>
            <div className='flex items-center justify-between px-6 py-2 '>
                <h5>{props.data.filesize} </h5>
                <span className='w-7 h-5 bg-zinc-700 text-red-400 rounded-full flex item-center justify-center ' >
                    {props.data.close ? <IoCloseSharp /> : <FaArrowDown  size="1em" color='#fff'/>}
                    
                </span>
            </div>
            {
                props.data.tag.isOpen && (
                    <div className ={`tag w-full flex ${props.data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"} py-4 items-center justify-center`}>
                <h3 className=' text-sm font-semibold'>{props.data.tag.tagtitle}</h3>
              </div>

            )}

            
        </div>


        </motion.div>
    );
}

export default Card;