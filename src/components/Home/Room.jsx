import { useEffect, useState } from 'react';
import Card from './Card';
import Container from '../Shared/Container';
import Heading from '../Shared/Heading';

const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // Fetch data from the backend API
        fetch('http://localhost:5000/rooms')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching rooms:', error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className='text-center'>Loading......</p>;

    return (
        <Container>
            {rooms && rooms.length > 0 ? (
                <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-5 gap-8'>
                    {rooms.map(room => (
                        <Card key={room._id} room={room} />
                    ))}
                </div>
            ) : (
                <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
                    <Heading
                        center={true}
                        title='No Rooms Available In This Category!'
                        subtitle='Please Select Other Categories.'
                    />
                </div>
            )}
        </Container>
    );
};

export default Rooms;
