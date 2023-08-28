const MapSection = () => {

    const brandImg = ["/img/logo-imgs/logo-netflix.png", "/img/logo-imgs/logo-reddit.png", "/img/logo-imgs/logo-amazon.png", "/img/logo-imgs/logo-discord.png", "/img/logo-imgs/logo-spotify.png"]

    return (
        <section className='h-screen mt-10 px-4 lg:h-fit lg:mb-40'>
            <div className='flex flex-col items-center'>
                <h3 className='text-center text-4xl font-semibold leading-snug mb-4'>Huge Global Network of Fast VPN</h3>
                <p className="text-center">See <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className='mx-auto md:w-3/5 mt-10'>
                <img src="/img/img-map.svg" alt="img-map" className='w-full mb-10' />
            </div>
            <div className='flex flex-col space-y-6  mt-12 items-center w-9/12 mx-auto lg:w-3/5 lg:flex-row lg:space-x-16 lg:space-y-0'>
                {brandImg.map((brand) => (
                    <img src={brand} alt="" className='w-44 opacity-10 brand-hover' />
                ))}
            </div>
        </section>
    )
}

export default MapSection