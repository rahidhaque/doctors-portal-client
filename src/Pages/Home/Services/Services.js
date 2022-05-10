import React from 'react';
import Service from '../Service/Service';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'

const Services = () => {
    return (
        <div>
            <h1 className='text-secondary font-bold text-center text-2xl'>Our Services</h1>
            <h1 className='text-accent font-bold text-center text-4xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28'>
                <Service img={flouride} cardTitle="Flouride Treatment"></Service>
                <Service img={cavity} cardTitle="Cavity Filling"></Service>
                <Service img={whitening} cardTitle="Teeth Whitening"></Service>
            </div>
        </div>
    );
};

export default Services;