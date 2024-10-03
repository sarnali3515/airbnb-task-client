import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Shared/Navbar/Navbar';
import Footer from '../components/Shared/Footer/Footer';

const Main = () => {
    const [selectedRegion, setSelectedRegion] = useState("I'm flexible");
    const [rooms, setRooms] = useState([]);

    const fetchRoomsByRegion = async (region) => {
        const response = await fetch(`http://localhost:5000/rooms?region=${region}`);
        if (response.ok) {
            const data = await response.json();
            setRooms(data);
        } else {
            console.error('Failed to fetch rooms:', response.status);
        }
    };

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        fetchRoomsByRegion(region);
    };

    return (
        <div>
            <Navbar onRegionSelect={handleRegionSelect} />
            <div className='pt-24 min-h-[calc(100vh-68px)] mb-10'>
                <Outlet context={{ rooms, selectedRegion }} />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
