import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const formatedDate = format(date, 'PP');
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(`Appointment is set, ${formatedDate} at ${slot}`)
                }
                else {
                    alert(`Already have an appointment on ${formatedDate} at ${slot}`)
                }
                refetch();
                setTreatment(null);
            });

    }
    const [user] = useAuthState(auth);
    return (
        <div className='relative'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box absolute top-28">
                    <label htmlFor="booking-modal" className="btn btn-secondary btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-3 justify-items-center'>
                        <input type="text" disabled readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" required />
                        <select name='slot' className="select select-bordered w-full max-w-xs" required>

                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" required />
                        <input type="email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" required />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" required />
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
};

export default BookingModal;