import { FiSearch } from 'react-icons/fi';

const FilterSearchBox = ({ isScrolled }) => {
    return (
        <div
            className={`w-full max-w-3xl mx-auto bg-white rounded-full border shadow-md transition-all duration-300 mb-5 ${isScrolled ? 'fixed top-4 left-1/2 transform -translate-x-1/2 max-w-md z-20' : 'mt-8'
                }`}
        >
            <div className={`flex justify-between items-center ${isScrolled ? 'px-2 py-1' : 'px-4 py-2'}`}>
                {/* Location - Smaller on scroll */}
                <div className={`flex-1 border-r px-4 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Anywhere' : 'Where'}</label>
                    {!isScrolled && (
                        <input
                            type="text"
                            placeholder="Search destinations"
                            className="w-full focus:outline-none text-sm"
                        />
                    )}
                </div>

                {/* Check-in - Smaller on scroll */}
                <div className={`flex-1 border-r px-4 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Any week' : 'Check in'}</label>
                    {!isScrolled && (
                        <input
                            type="text"
                            placeholder="Add dates"
                            className="w-full focus:outline-none text-sm"
                        />
                    )}
                </div>
                {/* Check-out - Smaller on scroll */}
                {!isScrolled &&
                    <div className={`flex-1 border-r px-4 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                        <label className="font-semibold">{isScrolled ? 'Any week' : 'Check out'}</label>
                        {!isScrolled && (
                            <input
                                type="text"
                                placeholder="Add dates"
                                className="w-full focus:outline-none text-sm"
                            />
                        )}
                    </div>}

                {/* Guests - Smaller on scroll */}
                <div className={`flex-1 px-4 ${isScrolled ? 'text-sm' : 'text-base'}`}>
                    <label className="font-semibold">{isScrolled ? 'Add guests' : 'Who'}</label>
                    {!isScrolled && (
                        <input
                            type="text"
                            placeholder="Add guests"
                            className="w-full focus:outline-none text-sm"
                        />
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
