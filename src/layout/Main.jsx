import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
// import FilterSearchBox from '../components/FilterSearchBox/FilterSearchBox'
const Main = () => {
    return (
        <div>
            <Navbar />
            {/* <FilterSearchBox /> */}
            <div className='pt-24 min-h-[calc(100vh-68px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Main