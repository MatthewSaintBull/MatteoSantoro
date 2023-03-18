import React from 'react'
import CardIcon from '../../icons/CardIcon'
import InstagramIcon from '../../icons/InstagramIcon'
import LinkedinIcon from '../../icons/LinkedinIcon'
import LocationIcon from '../../icons/LocationIcon'
import MailIcon from '../../icons/MailIcon'
import MediumIcon from '../../icons/MediumIcon'
import PhoneIcon from '../../icons/PhoneIcon'

function ProfileCard() {
    return (
        <div className='h-auto w-full flex justify-center lg:ml-5 rounded-xl'>
            <div className='bg-blue-900 rounded-3xl lg:h-64 h-48 absolute z-10 shadow-2xl'>
                <img src={require('../../assets/profile.jpg')} className='rounded-3xl h-full' alt='profile picture' />
            </div>
            <div className='bg-blue-200 rounded-xl w-[90%] lg:mt-44 mt-36 lg:pt-24 pt-16 text-center'>
                <h1 className='text-3xl'>Matteo Santoro</h1>
                <p className='font-light'>Web Developer Full Stack</p>
                <div className='flex space-x-4 w-full justify-center p-2 h-10 rounded-b-xl'>
                    <div className='h-6 w-6 fill-blue-500 cursor-pointer'>
                        <InstagramIcon />
                    </div>
                    <div className='h-6 w-6 fill-blue-500 cursor-pointer'>
                        <MediumIcon />
                    </div>
                    <div className='h-6 w-6 fill-blue-500 cursor-pointer'>
                        <LinkedinIcon />
                    </div>
                </div>
                <div className="p-7 mt-5 bg-blue-300 h-auto rounded-b-xl">
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A] ">
                        <span className="flex-shrink-0 h-6 w-6 fill-blue-500 object-center">
                            <PhoneIcon />
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-slate-900">Phone</p>
                            <p className="text-slate-600 break-all"><a className="hover:text-slate-800 duration-300 transition" href="tel:+393337360501">+39 3337360501</a></p>
                        </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                        <span className="flex-shrink-0 h-6 w-6 fill-blue-500">
                            <MailIcon />
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-slate-900">Email</p>
                            <p className="text-slate-600 break-all"><a className="hover:text-slate-800 duration-300 transition" href="mailto:admin@msantoro.com">admin@msantoro.com</a></p>
                        </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                        <span className="flex-shrink-0 h-6 w-6 fill-blue-500">
                            <LocationIcon />
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-slate-900">Location</p>
                            <p className="text-slate-600 break-all">San Vito Dei Normanni (BR)</p>
                        </div>
                    </div>
                    <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
                        <span className="flex-shrink-0 h-6 w-6 fill-blue-500">
                            <CardIcon />
                        </span>
                        <div className="text-left ml-2.5">
                            <p className="text-xs text-slate-900">VAT Number</p>
                            <p className="text-slate-600 break-all">02709520742</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard