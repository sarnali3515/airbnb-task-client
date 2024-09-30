import { useState } from 'react';

const TabsSection = () => {
    const [activeTab, setActiveTab] = useState('Popular');

    // Data for each tab and its corresponding grid items
    const tabData = {
        Popular: [
            'Popular Stays', 'Popular Cities', 'Trending Places', 'New Hosts', 'Top-Rated Homes', 'Family-Friendly Stays'
        ],
        'Arts & Culture': [
            'Art Museums', 'Cultural Landmarks', 'Music Festivals', 'Street Art Tours', 'Theatre Shows', 'Cultural Festivals'
        ],
        Outdoors: [
            'National Parks', 'Hiking Trails', 'Camping Spots', 'Nature Reserves', 'Lakeside Cabins', 'Outdoor Adventures'
        ],
        Mountains: [
            'Mountain Hikes', 'Ski Resorts', 'Mountain Cabins', 'Mountain Climbing', 'Mountain Biking', 'Scenic Views'
        ],
        Beach: [
            'Beach Houses', 'Island Getaways', 'Waterfront Stays', 'Beach Activities', 'Sunset Views', 'Snorkeling Adventures'
        ],
        'Unique Stays': [
            'Treehouses', 'Castles', 'Yurts', 'Tiny Homes', 'Boats', 'Historical Homes'
        ],
        Categories: [
            'Luxury Stays', 'Budget Stays', 'Family Friendly', 'Pet Friendly', 'Romantic Getaways', 'Work-Friendly Stays'
        ],
        'Things to do': [
            'City Tours', 'Adventure Sports', 'Food & Drink Experiences', 'Cultural Tours', 'Day Trips', 'Nightlife'
        ],
        'Travel Tips & Inspiration': [
            'Packing Tips', 'Safety Tips', 'Budget Travel', 'Best Time to Visit', 'Hidden Gems', 'Local Favorites'
        ],
        'Airbnb-friendly Apartments': [
            'Long-Term Stays', 'Monthly Rentals', 'Pet-Friendly Apartments', 'Remote Work-Friendly', 'City Apartments', 'Suburban Rentals'
        ]
    };

    return (
        <div className='bg-gray-100 py-6'>

            {/* Horizontal Tabs */}
            <div className='container text-sm mx-auto'>
                <h1 className='text-xl mb-4 font-semibold'>Inspiration for future getaways</h1>
                <div className='flex space-x-1'>
                    {Object.keys(tabData).map(tab => (
                        <button
                            key={tab}
                            className={`py-2 px-4 text-gray-500 font-semibold border-b-2 transition-all duration-300 whitespace-nowrap ${activeTab === tab ? 'border-black font-semibold text-gray-800' : 'border-transparent'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dynamic Content: 6-Column Grid */}
            <div className='container mx-auto px-4 mt-8'>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {tabData[activeTab].map((item, index) => (
                        <div key={index} className='bg-white p-4 shadow-sm hover:shadow-md transition rounded-md text-center'>
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TabsSection;
