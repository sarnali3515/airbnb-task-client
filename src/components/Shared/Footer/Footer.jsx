import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import TabsSection from './TabsSection';

const Footer = () => {
    return (
        <>

            <TabsSection></TabsSection>
            <footer className='bg-gray-100 py-10'>
                {/* Footer Top: Links to different sections */}
                <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <h3 className='font-semibold mb-4'>Support</h3>
                        <ul className='space-y-2'>
                            <li><a href='#' className='hover:underline'>Help Center</a></li>
                            <li><a href='#' className='hover:underline'>Safety Information</a></li>
                            <li><a href='#' className='hover:underline'>Cancellation Options</a></li>
                            <li><a href='#' className='hover:underline'>Our COVID-19 Response</a></li>
                            <li><a href='#' className='hover:underline'>Supporting People with Disabilities</a></li>
                            <li><a href='#' className='hover:underline'>Report a neighborhood concern</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-semibold mb-4'>Hosting</h3>
                        <ul className='space-y-2'>
                            <li><a href='#' className='hover:underline'>Try hosting</a></li>
                            <li><a href='#' className='hover:underline'>AirCover for Hosts</a></li>
                            <li><a href='#' className='hover:underline'>Explore hosting resources</a></li>
                            <li><a href='#' className='hover:underline'>Visit our community forum</a></li>
                            <li><a href='#' className='hover:underline'>How to host responsibly</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold mb-4'>Airbnb</h3>
                        <ul className='space-y-2'>
                            <li><a href='#' className='hover:underline'>Newsroom</a></li>
                            <li><a href='#' className='hover:underline'>Learn about new features</a></li>
                            <li><a href='#' className='hover:underline'>Letter from our founders</a></li>
                            <li><a href='#' className='hover:underline'>Careers</a></li>
                            <li><a href='#' className='hover:underline'>Investors</a></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom: Social Media and Legal Info */}
                <div className='border-t border-gray-300 mt-8 pt-6'>
                    <div className='container mx-auto px-4 flex flex-col md:flex-row justify-between items-center'>
                        {/* Left Section */}
                        <div className='text-sm text-gray-600'>
                            © 2024 Airbnb, Inc. · <a href='#' className='hover:underline'>Privacy</a> · <a href='#' className='hover:underline'>Terms</a> · <a href='#' className='hover:underline'>Sitemap</a> · <a href='#' className='hover:underline'>Company Details</a>
                        </div>

                        {/* Right Section: Social Media */}
                        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
                            <a href='#' className='text-gray-600 hover:text-gray-800'><FaFacebookF size={18} /></a>
                            <a href='#' className='text-gray-600 hover:text-gray-800'><FaTwitter size={18} /></a>
                            <a href='#' className='text-gray-600 hover:text-gray-800'><FaInstagram size={18} /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
