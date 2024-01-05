import React from 'react';

function Background(props) {
    return (
        <>

        <div className='fixed z-[2] w-full h-screen' >
          <div className=' absolute top-[5%] w-full  py-10 flex justify-center text-brown-600 text-xl font-semibold'>Documents</div>
        <h1 className='text-8xl top-1/2 left-1/2  -translate-x-[50%] font-semibold text-zinc-700 -translate-y-[120%] leading-none tracking-tighter absolute' > Docs </h1>

        </div>


        </>
    );
}

export default Background;