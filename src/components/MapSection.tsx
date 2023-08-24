import React from 'react'

const MapSection = () => {

    const brandImg = ["src/assets/img/logo-imgs/logo-netflix.png", "src/assets/img/logo-imgs/logo-reddit.png", "src/assets/img/logo-imgs/logo-amazon.png", "src/assets/img/logo-imgs/logo-discord.png", "src/assets/img/logo-imgs/logo-spotify.png"]

    return (
        <section className='h-screen mt-10'>
            <div className='flex flex-col items-center'>
                <h3 className='text-4xl font-semibold leading-snug mb-4'>Huge Global Network of Fast VPN</h3>
                <p>See <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className='mx-auto w-3/5 mt-10'>
                <img src="src\assets\img\img-map.svg" alt="img-map" className='w-full mb-10' />
            </div>
            <div className='flex flex-col space-y-6  mt-12 items-center w-9/12 mx-auto md:space-x-16'>
                {brandImg.map((brand) => (
                    <img src={brand} alt="" className='w-44 opacity-10 brand-hover' />
                ))}
            </div>
        </section>
    )
}

export default MapSection