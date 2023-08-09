import React from 'react'

const MapSection = () => {
    return (
        <section className='h-screen mt-10'>
            <div className='flex flex-col items-center'>
                <h3 className='text-4xl font-semibold leading-snug mb-4'>Huge Global Network of Fast VPN</h3>
                <p>See <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className='mx-auto w-3/5'>
                <img src="src\assets\img\img-map.png" alt="img-map" className='w-full mb-10'/>
                <img src="src\assets\img\img-brands.png" alt="img-brand" />
            </div>
        </section>
    )
}

export default MapSection