import React from 'react';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Footer from '../../Shared/Footer/Footer';
import Testimonials from '../../Testimonials/Testimonials';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;