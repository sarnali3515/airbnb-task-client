import { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import avatarImg from '../../../assets/images/placeholder.jpg';
import Container from '../Container';
import FilterSearchBox from '../../FilterSearchBox/FilterSearchBox';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // scroll event
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 150) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed w-full bg-white z-10">
            {/* Navbar */}
            <div className={`pt-4 transition-all ${isScrolled ? 'py-4' : 'pt-4'}`}>
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">

                        <Link to="/">
                            <img
                                src="https://i.ibb.co.com/xJptzQH/airbnb-removebg-preview.png"
                                alt="logo"
                                width="100"
                                height="100"
                            />
                        </Link>

                        {/* Stays and Experiences */}
                        <div className={`flex gap-4 items-center ${isScrolled ? 'hidden' : 'block'}`}>
                            <Link
                                to="/stays"
                                className="text-sm font-semibold hover:bg-neutral-100 py-3 px-4 rounded-full transition"
                            >
                                Stays
                            </Link>
                            <Link
                                to="/experiences"
                                className="text-sm font-semibold hover:bg-neutral-100 py-3 px-4 rounded-full transition"
                            >
                                Experiences
                            </Link>
                        </div>

                        {/* Dropdown Menu */}
                        <div className="relative">
                            <div className="flex flex-row items-center gap-3">

                                <button className="hidden md:block hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full transition">
                                    Airbnb your home
                                </button>


                                <FiGlobe />

                                {/* dropdown button */}
                                <div className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition">
                                    <AiOutlineMenu />
                                    <img
                                        className="hidden md:block rounded-full"
                                        src={avatarImg}
                                        alt="avatar"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* FilterSearchBox */}
            <div className="w-full ">
                <FilterSearchBox isScrolled={isScrolled} />
                <hr />
            </div>

        </div>
    );
};

export default Navbar;
