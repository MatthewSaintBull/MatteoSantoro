import React from 'react'

function Navbar() {
    return (
        <div className='w-screen bg-transparent h-20 border-b-[1px] border-b-blue-300 p-2 flex justify-center lg:justify-between items-center'>
            <img src={require('../../assets/logo.svg')} alt="" className='h-20'/>
        </div>
    )
}

export default Navbar