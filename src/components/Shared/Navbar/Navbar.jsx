import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import avatarImg from '../../../assets/images/placeholder.jpg'
import { FiGlobe } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        {/* Logo */}
                        <Link to='/'>
                            <img
                                src='https://i.ibb.co.com/xJptzQH/airbnb-removebg-preview.png'
                                alt='logo'
                                width='100'
                                height='100'
                            />
                        </Link>

                        {/* Stays and Experiences Links */}
                        <div className='hidden md:flex gap-4'>
                            <Link
                                to='/stays'
                                className='text-sm font-semibold hover:bg-neutral-100 py-3 px-4 rounded-full transition'
                            >
                                Stays
                            </Link>
                            <Link
                                to='/experiences'
                                className='text-sm font-semibold hover:bg-neutral-100 py-3 px-4 rounded-full transition'
                            >
                                Experiences
                            </Link>
                        </div>

                        {/* Dropdown Menu */}
                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>
                                {/* Become A Host btn */}
                                <div className='md:block'>

                                    <button
                                        className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
                                    >
                                        Airbnb your home
                                    </button>


                                </div>
                                <div>
                                    <FiGlobe></FiGlobe>
                                </div>
                                {/* Dropdown btn */}
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                                >
                                    <AiOutlineMenu />
                                    <div className='hidden md:block'>
                                        {/* Avatar */}
                                        <img
                                            className='rounded-full'
                                            referrerPolicy='no-referrer'
                                            src={avatarImg}
                                            alt='profile'
                                            height='30'
                                            width='30'
                                        />
                                    </div>
                                </div>
                            </div>
                            {isOpen && (
                                <div className='absolute rounded-xl shadow-md  md:w-[15vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                    <div className='flex flex-col cursor-pointer'>

                                        <>
                                            <Link
                                                to='/signup'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-bold'
                                            >
                                                Sign Up
                                            </Link>
                                            <Link
                                                to='/login'
                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Login
                                            </Link>
                                            <hr />
                                            <Link

                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Gift Cards
                                            </Link>
                                            <Link

                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Airbnb your home
                                            </Link>
                                            <Link

                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Host your experience
                                            </Link>
                                            <Link

                                                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                            >
                                                Help Center
                                            </Link>

                                        </>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar
