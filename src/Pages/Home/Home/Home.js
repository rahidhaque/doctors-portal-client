import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;