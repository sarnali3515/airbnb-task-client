import { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// Import the images from assets/images folder
import allImage from '../../assets/images/all.jpg';
import asiaImage from '../../assets/images/asia.webp';
import canadaImage from '../../assets/images/canada.webp';
import europeImage from '../../assets/images/europe.webp';
import malaysiaImage from '../../assets/images/malaysia.webp';
import usaImage from '../../assets/images/usa.webp';

const FilterSearchBox = ({ isScrolled }) => {
    const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);
    const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [guests, setGuests] = useState({
        adults: 1,
        children: 0,
        infants: 0,
        pets: 0,
    });

    // Create refs for dropdowns
    const destinationDropdownRef = useRef(null);
    const guestsDropdownRef = useRef(null);

    // Images for each region (locally loaded)
    const regionImages = {
        "I'm flexible": allImage,
        "Southeast Asia": asiaImage,
        "Canada": canadaImage,
        "Europe": europeImage,
        "Malaysia": malaysiaImage,
        "United States": usaImage,
    };

    // Handle destination dropdown toggle
    const toggleDestinationDropdown = () => {
        setShowDestinationDropdown(!showDestinationDropdown);
        setShowGuestsDropdown(false); // Close other dropdowns
    };

    // Handle guests dropdown toggle
    const toggleGuestsDropdown = () => {
        setShowGuestsDropdown(!showGuestsDropdown);
        setShowDestinationDropdown(false); // Close other dropdowns
    };

    // Handle date selection for check-in and check-out
    const handleCheckInDateChange = (date) => {
        setCheckInDate(date);
    };

    const handleCheckOutDateChange = (date) => {
        setCheckOutDate(date);
    };

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (destinationDropdownRef.current && !destinationDropdownRef.current.contains(event.target)) {
                setShowDestinationDropdown(false);
            }
            if (guestsDropdownRef.current && !guestsDropdownRef.current.contains(event.target)) {
                setShowGuestsDropdown(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div
            className={`w-full max-w-3xl mx-auto bg-white rounded-full border shadow-md transition-all duration-300 mb-5 ${isScrolled ? 'fixed top-4 left-1/2 transform -translate-x-1/2 max-w-md z-20' : 'mt-8'
                }`}
        >
            <div className={`flex justify-between items-center ${isScrolled ? 'px-2 py-1' : 'px-4 py-2'}`}>
                {/* Location - Smaller on scroll */}
                <div className={`flex-1 border-r px-4 relative ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Anywhere' : 'Where'}</label>
                    {!isScrolled && (
                        <input
                            type="text"
                            placeholder="Search destinations"
                            className="w-full focus:outline-none text-sm"
                            onClick={toggleDestinationDropdown}
                        />
                    )}
                    {/* Destination Dropdown */}
                    {showDestinationDropdown && (
                        <div ref={destinationDropdownRef} className="absolute top-12 left-0 bg-white border rounded-lg p-4 shadow-md w-[400px] z-30">
                            <div className="grid grid-cols-3 gap-4">
                                {Object.keys(regionImages).map((region) => (
                                    <div
                                        key={region}
                                        className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg text-center"
                                        onClick={() => setShowDestinationDropdown(false)}
                                    >
                                        <img
                                            src={regionImages[region]}
                                            alt={region}
                                            className="w-full h-24 border object-cover rounded-lg mb-2"
                                        />
                                        <span className='text-sm'>{region}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Check-in and Check-out */}
                <div className={`flex-1 border-r px-4 relative ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Any week' : 'Check in'}</label>
                    {!isScrolled && (
                        <DatePicker
                            selected={checkInDate}
                            onChange={handleCheckInDateChange}
                            selectsStart
                            startDate={checkInDate}
                            endDate={checkOutDate}
                            placeholderText="Add dates"
                            className="focus:outline-none text-sm w-full"
                        />
                    )}
                </div>

                {!isScrolled &&
                    <div className={`flex-1 border-r px-4 relative ${isScrolled ? 'text-sm' : 'text-base'}`}>
                        <label className="font-semibold">{isScrolled ? 'Any week' : 'Check out'}</label>
                        {!isScrolled && (
                            <DatePicker
                                selected={checkOutDate}
                                onChange={handleCheckOutDateChange}
                                selectsEnd
                                startDate={checkInDate}
                                endDate={checkOutDate}
                                minDate={checkInDate}
                                placeholderText="Add dates"
                                className="focus:outline-none text-sm w-full"
                            />
                        )}
                    </div>
                }

                {/* Guests */}
                <div className={`flex-1 px-4 relative ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Add guests' : 'Who'}</label>
                    {!isScrolled && (
                        <input
                            type="text"
                            placeholder="Add guests"
                            className="w-full focus:outline-none text-sm"
                            onClick={toggleGuestsDropdown}
                            readOnly
                        />
                    )}
                    {/* Guests Dropdown */}
                    {/* Guests Dropdown */}
                    {showGuestsDropdown && (
                        <div ref={guestsDropdownRef} className="absolute top-12 left-0 bg-white border rounded-lg p-4 shadow-md w-[400px] z-30">
                            <div className="space-y-4">
                                {/* Adults Section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Adults</span>
                                        <p className="text-sm text-gray-500">Ages 13 or above</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => setGuests({ ...guests, adults: Math.max(0, guests.adults - 1) })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            -
                                        </button>
                                        <span>{guests.adults}</span>
                                        <button
                                            onClick={() => setGuests({ ...guests, adults: guests.adults + 1 })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <hr />

                                {/* Children Section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Children</span>
                                        <p className="text-sm text-gray-500">Ages 2 – 12</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => setGuests({ ...guests, children: Math.max(0, guests.children - 1) })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            -
                                        </button>
                                        <span>{guests.children}</span>
                                        <button
                                            onClick={() => setGuests({ ...guests, children: guests.children + 1 })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <hr />

                                {/* Infants Section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Infants</span>
                                        <p className="text-sm text-gray-500">Under 2</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => setGuests({ ...guests, infants: Math.max(0, guests.infants - 1) })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            -
                                        </button>
                                        <span>{guests.infants}</span>
                                        <button
                                            onClick={() => setGuests({ ...guests, infants: guests.infants + 1 })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <hr />

                                {/* Pets Section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Pets</span>
                                        <p className="text-sm text-gray-500 underline">Bringing a service animal?</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            onClick={() => setGuests({ ...guests, pets: Math.max(0, guests.pets - 1) })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            -
                                        </button>
                                        <span>{guests.pets}</span>
                                        <button
                                            onClick={() => setGuests({ ...guests, pets: guests.pets + 1 })}
                                            className="px-3 py-1 bg-gray-200 rounded-full"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>

                {/* Search Button */}
                <div className={`pl-4 ${isScrolled ? 'pr-2' : 'pr-4'}`}>
                    <button className="bg-red-500 text-white px-3 py-3 rounded-full hover:bg-red-600 transition duration-200">
                        <FiSearch size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterSearchBox;
