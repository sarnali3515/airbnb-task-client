import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
//import Categories from '../../components/Categories/Categories'
//import Rooms from '../../components/Home/Rooms'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Airbnb | Vacations rentals, cabins, beach houses, & more</title>
            </Helmet>
            {/* Categories section  */}
            <Categories></Categories>
            {/* Rooms section */}

        </div>
    )
}

export default Home