import React from 'react';
import Service from '../Service/Service';
import flouride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Services = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-secondary font-bold text-center text-2xl'>Our Services</h1>
            <h1 className='text-accent font-bold text-center text-4xl'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-28'>
                <Service img={flouride} cardTitle="Flouride Treatment"></Service>
                <Service img={cavity} cardTitle="Cavity Filling"></Service>
                <Service img={whitening} cardTitle="Teeth Whitening"></Service>
            </div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='ml-0 lg:ml-8'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                    <img src={treatment} className="min-w-sm lg:max-w-lg md:max-w-md rounded-lg shadow-2xl" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;