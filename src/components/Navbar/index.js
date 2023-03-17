import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import BarsIcon from '../../icons/BarsIcon'

function Navbar() {
    const [isVisible, setisVisible] = useState(false)

    const handleMobileMenu = () => {
        setisVisible(!isVisible)
    }

    return (
        <>
            <div className='w-screen bg-transparent h-20  border-b-blue-300 p-2 flex justify-between items-center shadow-lg'>
                <img src={require('../../assets/logo.svg')} alt="website logo" height={'80px'} width={'258px'} />
                <div className='lg:hidden h-6 w-6 mr-0 fill-blue-900 cursor-pointer' onClick={handleMobileMenu}>
                    <BarsIcon />
                </div>
            </div>
            {isVisible &&
                <div className='h-30 bg-blue-300 bg-opacity-90 flex flex-col items-center lg:hidden divide-y-[1px] divide-zinc-500 justify-center shadow-md absolute w-full z-20'>
                    <Link to={'/'}>
                        <button className='h-10 text-slate-100 font-light text-xl hover:text-white w-full'>
                            About Me
                        </button>
                    </Link>
                    <Link to={'/resume'}>
                        <button className='h-10 text-slate-100 font-light text-xl hover:text-white w-full'>
                            Resume
                        </button>
                    </Link>
                    <Link to={'/projects'}>
                        <button className='h-10 text-slate-100 font-light text-xl hover:text-white w-full'>
                            Projects
                        </button>
                    </Link>

                </div>
            }
        </>
    )
}

export default Navbar