import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {
  const ref = useRef(null);

  const data = [
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize: "0.9mb",
    close: true,
    tag: {isOpen:true, tagtitle:"Download", tagColor:"green"},
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize: "0.9mb",
    close: true,
    tag: {isOpen:true, tagtitle:"Download", tagColor:"blue"},
  },
  {
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    filesize: "0.9mb",
    close: true,
    tag: {isOpen:false, tagtitle:"Download", tagColor:"green"},
  },
];
  return (
    <div>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap'>
            {data.map((item, index)=>(
              <Card data={item} reference={ref}/>
            ))}
        </div>
    </div>
  );
}

export default Foreground