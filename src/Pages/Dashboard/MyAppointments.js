import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointments(data);
                });
        }
    }, [user])
    return (
        <div>
            <div className="overflow-x-auto mt-5">
                <table className="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Treatment Type</th>
                            <th>Date</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            appointments.map((appointment, index) => <tr key={appointment._id}>
                                <td>{index + 1}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.slot}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;