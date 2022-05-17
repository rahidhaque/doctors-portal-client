import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date }) => {
    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');

    const { data: services, isLoading, error, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h4 className='text-xl text-primary text-center font-bold'> Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                {
                    services?.map(service => <AvailableAppointment
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
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;