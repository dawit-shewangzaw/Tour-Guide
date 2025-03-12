// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import { LogIn, Search } from 'lucide-react';
import SearchBox from '../components/SearchBox';
import PopularCities from '../components/PopularCities';
import CityDetails from '../components/CityDetails';
import TopAttractions from '../components/TopAttractions';
import Advertisement from '../components/AdvertisementSection';
import FeaturedDestination from '../components/FeaturedDestination';
import AboutUs from '../components/AboutUs';
import Stories from '../components/Stories';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import Login from '../components/LogIn';
import VerfiyNewAccount from '../components/VerifyEmail';
import TourListing from '../components/TourListing';
import TourDetail from '../components/Tour Detail';
import MyProfile from '../components/MyProfile';
import MyBookingDetails from '../components/MyBookingsDetails';
import MyBookingsLists from '../components/MyBookingsLists';
import OrderLists from '../components/OrderLists';
import OrderDetails from '../components/OrderDetails';
import Help from '../components/Help';
import ForgotPassword from '../components/ForgotPassword';
import ResetPassword from '../components/ResetPassword';
import AddNewPassword from '../components/AddNewPassword';


const Home = () => {
    
    return (
        <>
        <div className='bg-[#f4f7f7]'>
            <HeroSection />
            <SearchBox />
            <PopularCities />
            <CityDetails/>
            <TopAttractions/>
            <Advertisement/>
            <FeaturedDestination/>
            <AboutUs/>
            <Stories/>

            {/* <TourListing/> */}
            {/* <TourDetail/> */}
            {/* <MyProfile/> */}
            {/* <MyBookingDetails/> */}
            {/* <MyBookingsLists/> */}

            {/* <OrderLists/> */}
            {/* <OrderDetails/> */}
            
            {/* <Help/> */}

            
            {/* <SignIn/> */}
            {/* <Login/> */}
            {/* <VerfiyNewAccount/> */}
            
            {/* <ForgotPassword/> */}
            {/* <ResetPassword/> */}
            {/* <AddNewPassword/> */}
        </div>
        </>
    );
};

export default Home;