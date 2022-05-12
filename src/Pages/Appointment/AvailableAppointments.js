import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl text-primary text-center font-bold'> Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                {
                    services.map(service => <AvailableAppointment
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></AvailableAppointment>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;