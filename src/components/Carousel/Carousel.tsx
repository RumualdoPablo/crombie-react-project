// src/components/Carousel.tsx
import React, { useState } from 'react';
import TestimonialsHook from './TestimonialsHook';
import './Carousel.css';

const Carousel: React.FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonials = TestimonialsHook();

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % (testimonials.length - 2)
        );
    };
    
    
    return (
        <div className='mt-12'>
            <div className="carousel">
                <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
                    {
                        testimonials.map((testimonial) => (
                            <div key={testimonial.fullName} className="carousel-review border-2 rounded-lg">
                                <div className='flex space-x-2 items-center mb-4'>
                                    <img src={testimonial.avatar} alt={`${testimonial.fullName}'s avatar`} className="w-14 h-12 rounded-full" />
                                    <h3 className='font-semibold'>{testimonial.fullName}</h3>
                                </div>
                                <p>{testimonial.testimonial}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-center md:justify-end space-x-5 mt-16 mr-48'>
                <button className="carousel-button border-red-500 border-2 rounded-full text-red-500 p-3 py-0" onClick={prevSlide}>
                    &lt;
                </button>
                <button className="carousel-button border-red-500 border-2 rounded-full text-red-500 p-3 py-0" onClick={nextSlide}>
                    &gt;
                </button>
            </div>

        </div>

    );
};

export default Carousel;
