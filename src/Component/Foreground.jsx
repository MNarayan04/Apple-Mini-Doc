import React, { useRef, useState } from 'react';
import Card from './Card';



function Foreground(props) {

    const ref = useRef(null);

    const data =[
        // description,filesize,closeOrder ,tagdetails
        {desc:"ipsum dolor sit amet consectetur adipisicing elit.",
         filesize :".9mb",
         close :false,
         tag:{isOpen : true,
            tagtitle:"Download Now",
            tagColor:"blue"    
        },

            },

        {desc:"ipsum dolor sit amet consectetur adipisicing elit.",
        filesize :".9mb",
        close :true,
        tag:{isOpen : true,
           tagtitle:"Download Now",
           tagColor:"green"    
       },

         },

       {desc:"ipsum dolor sit amet consectetur adipisicing elit.",
       filesize :"7mb",
       close :false,
       tag:{isOpen : false,
          tagtitle:"Download Now",
          tagColor:"green"    
      },
      

        },


        {desc:"ipsum dolor sit amet consectetur adipisicing elit.",
       filesize :"7mb",
       close :true,
       tag:{isOpen : false,
          tagtitle:"Download Now",
          tagColor:"green"    
      },
      

        }
    ]
    useState()
    return (
        <div ref={ref} className='w-full flex-wrap h-full p-4 fixed top-50 left-50 z-[3] flex gap-7'> 
        { data.map((item,index)=> (
            <Card data={item}  reference={ref}/>
        ))}
        
        
         </div>
    );
}

export default Foreground;