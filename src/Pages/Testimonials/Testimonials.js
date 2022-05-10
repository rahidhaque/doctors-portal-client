import React from 'react';
import Testimonial from '../Home/Testimonial/Testimonial';
import appointment from '../../assets/images/appointment.png'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Henry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1
        },
        {
            _id: 2,
            name: 'Winson Henry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2
        },
        {
            _id: 3,
            name: 'Winson Henry',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3
        }
    ]
    return (
        <div>
            <h1 className='text-primary text-xl'>Testimonials</h1>
            <h1 className='text-accent text-3xl'>What Our Patients Says</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14'>
                {
                    reviews.map(review => <Testimonial
                        key={review.id}
                        review={review}
                    >
                    </Testimonial>)
                }
            </div>
            <div className='my-14 max-h-full p-14' style={{ background: `url(${appointment})` }}>
                <div>
                    <h1 className='text-secondary font-bold text-center text-xl'>Contact us</h1>
                    <h1 className='text-white font-bold text-center text-3xl'>Stay Connected with us</h1>
                </div>
                <form className='text-center my-5'>
                    <div>
                        <input type="email" placeholder="Email Address" class="input input-bordered input-primary w-full max-w-sm mb-4" />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" class="input input-bordered input-primary w-full max-w-sm mb-4" />
                    </div>
                    <div>
                        <textarea class="textarea w-full max-w-sm mb-4" placeholder="Bio"></textarea>
                    </div>
                    <input type="button" class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary" value="Submit" />
                </form>
            </div>
        </div>
    );
};

export default Testimonials;