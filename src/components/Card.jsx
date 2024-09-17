import React from 'react'
import { FaFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-6 py-10 overflow-hidden'>
        <FaFileAlt/> 
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='absolute footer w-full left-0 bottom-0'>
            <div className='flex text-sm items-center justify-between mb-2 px-8 py-3'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                  {data.close ? <IoClose/> : <LuDownload size=".9em" color='#fff'/>}
                </span>
            </div>
            <div>
                  {data.tag.isOpen ? (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagtitle}</h3>
                  </div>
                  ) : null}
            </div>
        </div>
    </motion.div>
  )
}

export default Card