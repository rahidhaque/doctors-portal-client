import React from 'react';


const AvailableAppointment = ({ service, setTreatment }) => {
    return (
        <div>
            <div class="card lg:max-w-lg  shadow-xl">
                <div class="card-body text-center">
                    <h2 class="card-title text-secondary justify-center font-bold">{service.name}</h2>
                    <p>{
                        service.slots.length > 0 ? <span>{service.slots[0]}</span> : <span className='text-red-500'>No slot avaiable</span>
                    }</p>
                    <small>{service.slots.length} {service.slots.length > 1 ? 'spaces' : 'space'} avaiable</small>
                    <div class="card-actions justify-center">
                        {/* <button disabled={service.slots.length === 0} onClick={() => setTreatment(service)} className="btn btn-primary text-white">Book Appointment</button> */}
                        <label for="booking-modal" disabled={service.slots.length === 0} onClick={() => setTreatment(service)} class="btn btn-sm btn-primary text-white bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;