import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Container from '../Shared/Container';
import CategoryBox from './CategoryBox';
import { categories } from './CategoriesData.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Previous Arrow 
const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10 hover:bg-gray-200 transition border-2"
        style={{ zIndex: 2 }}
    >
        <FaChevronLeft size={20} />
    </button>
);

// Next Arrow 
const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full z-10 hover:bg-gray-200 transition border-2"
        style={{ zIndex: 2 }}
    >
        <FaChevronRight size={20} />
    </button>
);

const Categories = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll event
    const handleScroll = () => {
        const offset = window.scrollY;
        setIsScrolled(offset > 150); // Adjust the threshold as needed
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 12,
        slidesToScroll: 12,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                },
            },
        ],
    };

    return (
        <Container>
            <div className={`relative transition-all ${isScrolled ? 'pt-0' : 'pt-28'}`}>
                {/* Slider container */}
                <Slider {...settings}>
                    {categories.map((item) => (
                        <CategoryBox key={item.label} label={item.label} icon={item.icon} />
                    ))}
                </Slider>
            </div>
        </Container>
    );
};

export default Categories;
