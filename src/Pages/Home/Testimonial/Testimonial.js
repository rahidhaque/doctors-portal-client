import React from 'react';

const Testimonial = ({ review }) => {
    return (
        <div class="card bg-base-100 shadow-xl ">
            <div class="card-body items-center text-center">
                <p className='lg:w-80 w-100'>{review.review}</p>
            </div>
            <div className='flex justify-center items-center'>
                <div class="avatar mr-5">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div className='description'>
                    <h1 className='text-xl'>{review.name}</h1>
                    <p>California</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;