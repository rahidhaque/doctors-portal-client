import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { name, slots } = treatment;
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        setTreatment(null);
    }
    return (
        <div className='relative'>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box absolute top-28">
                    <label for="booking-modal" className="btn btn-secondary btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-3 justify-items-center'>
                        <input type="text" disabled readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" required />
                        <select name='slot' className="select select-bordered w-full max-w-xs" required>

                            {
                                slots.map(slot => <option key={treatment._id} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="Your email" className="input input-bordered w-full max-w-xs" required />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" required />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;