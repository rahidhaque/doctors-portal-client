import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center mb-14' style={
            { background: `url(${appointment})` }
        }>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-180px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-3 lg:p-0'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment today</h2>
                <p className='text-white'>With the advent of worldwide influence and shifting societal values, technological development is accelerating the transformation of the healthcare industry. Today we can clearly see which parts of health care delivery have failed and shown to be vulnerable.
                    Making an appointment with a doctor in a few clicks online is one of the solutions that, in our opinion, can make a difference in the interaction between a doctor and a patient.We believe medtech's innovation is a giant leap forward in healthcare reform that can improve the efficiency and quality of healthcare services.</p>
                <div className='mt-5'>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>

            </div>

        </section>
    );
};

export default MakeAppointment;