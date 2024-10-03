import { useState, useRef, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';
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
    const [selectedRegion, setSelectedRegion] = useState("I'm flexible");
    const [guests, setGuests] = useState({
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
    });


    const destinationDropdownRef = useRef(null);
    const guestsDropdownRef = useRef(null);

    // images of regions
    const regionImages = {
        "I'm flexible": allImage,
        "Southeast Asia": asiaImage,
        "Canada": canadaImage,
        "Europe": europeImage,
        "Malaysia": malaysiaImage,
        "United States": usaImage,
    };

    // destination dropdown 
    const toggleDestinationDropdown = () => {
        setShowDestinationDropdown(!showDestinationDropdown);
        setShowGuestsDropdown(false);
    };
    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setShowDestinationDropdown(false);
    };

    // guests dropdown 
    const toggleGuestsDropdown = () => {
        setShowGuestsDropdown(!showGuestsDropdown);
        setShowDestinationDropdown(false);
    };

    // date 
    const handleCheckInDateChange = (date) => {
        setCheckInDate(date);
        setCheckOutDate(null);
    };

    const handleCheckOutDateChange = (date) => {
        setCheckOutDate(date);
    };

    // close dropdowns
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (destinationDropdownRef.current && !destinationDropdownRef.current.contains(event.target)) {
                setShowDestinationDropdown(false);
            }
            if (guestsDropdownRef.current && !guestsDropdownRef.current.contains(event.target)) {
                setShowGuestsDropdown(false);
            }
        };


        document.addEventListener('mousedown', handleClickOutside);


        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    const getGuestLabel = () => {
        const { adults, children, infants, pets } = guests;
        const totalGuests = adults + children;
        let guestLabel = '';

        // guests
        if (totalGuests > 0) {
            guestLabel += `${totalGuests} ${totalGuests > 1 ? 'guests' : 'guest'}`;
        }

        // infants
        if (infants > 0) {
            guestLabel += `${guestLabel ? ', ' : ''}${infants} ${infants > 1 ? 'infants' : 'infant'}`;
        }

        // pets
        if (pets > 0) {
            guestLabel += `${guestLabel ? ', ' : ''}${pets} ${pets > 1 ? 'pets' : 'pet'}`;
        }

        return guestLabel || 'Add guests';
    };

    return (
        <div
            className={`w-full max-w-3xl mx-auto bg-white rounded-full border shadow-md transition-all duration-300 mb-5 ${isScrolled ? 'fixed top-4 left-1/2 transform -translate-x-1/2 max-w-md z-20' : 'mt-8'
                }`}
        >
            <div className={`flex justify-between items-center ${isScrolled ? 'px-2 py-1' : 'px-4 py-2'}`}>

                <div className={`flex-1 border-r px-4 relative ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Anywhere' : 'Where'}</label>
                    {!isScrolled && (
                        <input
                            type="text"
                            placeholder="Search destinations"
                            className="w-full focus:outline-none text-sm"
                            value={selectedRegion === "I'm flexible" ? "" : selectedRegion}
                            onClick={toggleDestinationDropdown}
                            readOnly
                        />
                    )}
                    {/* destination Dropdown */}
                    {showDestinationDropdown && (
                        <div ref={destinationDropdownRef} className="absolute top-12 left-0 bg-white border rounded-lg p-4 shadow-md w-[400px] z-30">
                            <div className="grid grid-cols-3 gap-4">
                                {Object.keys(regionImages).map((region) => (
                                    <div
                                        key={region}
                                        className="cursor-pointer hover:bg-gray-200 p-2 rounded-lg text-center"
                                        onClick={() => handleRegionSelect(region)}
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

                {/* check in */}
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
                            dateFormat="MMM d" // Format as "Oct 4"
                        />
                    )}
                </div>

                {/* check out */}
                {!isScrolled && (
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
                                dateFormat="MMM d"
                                highlightDates={[{ 'react-datepicker__day--highlighted': [checkInDate] }]}
                            />
                        )}
                    </div>
                )}

                {/* guests */}
                <div className={`flex-1 px-4 relative ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Add guests' : 'Who'}</label>
                    {!isScrolled && (
                        <input
                            type="text"
                            placeholder="Add guests"
                            className="w-full focus:outline-none text-sm"
                            value={getGuestLabel()} // Dynamically show guest count
                            onClick={toggleGuestsDropdown}
                            readOnly
                        />
                    )}
                    {/* guests dropdown */}
                    {showGuestsDropdown && (
                        <div ref={guestsDropdownRef} className="absolute top-12 left-0 bg-white border rounded-lg p-4 shadow-md w-[400px] z-30">
                            <div className="space-y-4">
                                {/* adults section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Adults</span>
                                        <p className="text-sm text-gray-500">Ages 13 or above</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, adults: Math.max(0, guests.adults - 1) })}
                                        >
                                            -
                                        </button>
                                        <span>{guests.adults}</span>
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, adults: guests.adults + 1 })}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* children Section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Children</span>
                                        <p className="text-sm text-gray-500">Ages 2-12</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, children: Math.max(0, guests.children - 1) })}
                                        >
                                            -
                                        </button>
                                        <span>{guests.children}</span>
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, children: guests.children + 1 })}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* infants Section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Infants</span>
                                        <p className="text-sm text-gray-500">Under 2</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, infants: Math.max(0, guests.infants - 1) })}
                                        >
                                            -
                                        </button>
                                        <span>{guests.infants}</span>
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, infants: guests.infants + 1 })}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* pets Section */}
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">Pets</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, pets: Math.max(0, guests.pets - 1) })}
                                        >
                                            -
                                        </button>
                                        <span>{guests.pets}</span>
                                        <button
                                            className="p-1 rounded-full border"
                                            onClick={() => setGuests({ ...guests, pets: guests.pets + 1 })}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* search button */}
                <div className="px-4">
                    <button className="p-2 rounded-full bg-red-500 text-white">
                        <FiSearch size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FilterSearchBox;
