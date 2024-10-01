import { Helmet } from 'react-helmet-async';
import Categories from '../../components/Categories/Categories';
import { useState, useEffect } from 'react';

const Home = () => {
    const [isCategorySticky, setIsCategorySticky] = useState(false);

    // Handle scroll event for the Categories section
    const handleScroll = () => {
        const categorySection = document.querySelector('.categories-section');
        if (window.scrollY > categorySection?.offsetTop - 80) {
            // Adjust offset value based on your navbar height
            setIsCategorySticky(true);
        } else {
            setIsCategorySticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Airbnb | Vacations rentals, cabins, beach houses, & more</title>
            </Helmet>

            {/* Categories section */}
            <div
                className={`categories-section ${isCategorySticky ? 'fixed  w-full bg-white shadow-md z-10' : ''}`}
                style={{
                    position: isCategorySticky ? 'fixed' : 'relative',
                    top: isCategorySticky ? '80px' : 'initial', // Adjust this value based on your navbar height
                    width: '100%',
                    backgroundColor: isCategorySticky ? 'white' : 'transparent',
                    transition: 'top 0.3s ease',
                }}
            >
                <Categories />
            </div>

            {/* Rooms section */}
            <div>
                {/* Add your rooms section here */}
            </div>
        </div>
    );
};

export default Home;
