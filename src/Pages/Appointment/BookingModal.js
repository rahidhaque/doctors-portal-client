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
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box absolute top-28">
                    <label for="booking-modal" class="btn btn-secondary btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-3 justify-items-center'>
                        <input type="text" disabled readOnly value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" required />
                        <select name='slot' class="select select-bordered w-full max-w-xs" required>

                            {
                                slots.map(slot => <option key={treatment._id} value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Your name" class="input input-bordered w-full max-w-xs" required />
                        <input type="email" name='email' placeholder="Your email" class="input input-bordered w-full max-w-xs" required />
                        <input type="number" name='phone' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Submit" class="btn btn-secondary w-full max-w-xs" required />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;