import React from 'react'
import { Link } from 'react-router-dom'

export default function RouteNavigation() {
    return (
        <div className='hidden lg:flex bg-slate-200 p-2 w-1/2 justify-center bg-opacity-50 rounded-md'>
            <Link to={'/'}>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-light rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">About Me</button>
            </Link>
            <Link to={'/resume'}>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-light rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Resume</button>
            </Link>
            <Link to={'/projects'}>
                <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-light rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Projects</button>
            </Link>
        </div>

    )
}
