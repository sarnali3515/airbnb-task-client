import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FaStar, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Prev Arrow Component 
const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full z-10 group-hover:block hidden transition border-2"
        style={{ zIndex: 2 }}
    >
        <FaChevronLeft size={15} />
    </button>
);

// Next Arrow Component 
const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full z-10 group-hover:block hidden transition border-2"
        style={{ zIndex: 2 }}
    >
        <FaChevronRight size={15} />
    </button>
);

const Card = ({ room }) => {
    const images = room.images ? Object.values(room.images) : [];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                {/* Image slider */}
                <div className='aspect-square w-full relative overflow-hidden rounded-xl'>
                    {images.length > 0 ? (
                        <Slider {...sliderSettings}>
                            {images.map((image, index) => (
                                <div className='h-80 w-80' key={index}>
                                    <img
                                        className='w-full h-full object-cover'
                                        src={image}
                                        alt={`Room Image ${index + 1}`}
                                    />
                                </div>
                            ))}
                        </Slider>
                    ) : (
                        <img
                            className='w-full h-full object-cover'
                            src='https://via.placeholder.com/400'
                            alt='No image available'
                        />
                    )}

                    {/* Love Icon */}
                    <div className="absolute top-3 right-3">
                        <FaHeart
                            className="text-white  p-1"
                            style={{ fontSize: '30px', borderRadius: '8px' }}
                        />
                    </div>


                </div>

                {/* Room details */}
                <div className='flex justify-between'>
                    <div className='font-semibold text-lg'>{room?.category}, {room?.country}</div>
                    <div className='flex items-center'>
                        <FaStar className='mr-1' /> {room?.ratings}
                    </div>
                </div>

                <div className='flex flex-row items-center gap-1'>
                    <div className='font-semibold'>$ {room?.price}</div>
                    <div className='font-light'> night</div>
                </div>

            </div>
        </Link>
    );
};

Card.propTypes = {
    room: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        ratings: PropTypes.number.isRequired,
        images: PropTypes.object,
    }).isRequired,
};

export default Card;
