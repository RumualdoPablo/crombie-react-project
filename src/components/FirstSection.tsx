
import "../styles.css"

const FirstSection = () => {
    return (
        <div className="md:px-8 md:mt-5">{/*Primer section, contiene el titulo y un botón call to action*/}
            <section className="flex justify-center mb-12">
                <div className="mt-4 md:pl-7">
                    <div className="mx-auto w-2/3">
                        <h1 className="text-4xl ml-auto text-center md:text-5xl lg:font-semibold lg:mt-20 lg:mb-3 lg:leading-tight lg:text-left">Want anything to be easy with
                            <span className="font-extrabold"> LaslesVPN</span>.</h1>
                    </div>
                    <p className="mt-4 w-2/3 mx-auto text-base font-thin">Provide a network for all your needs with ease and fun using <span className="font-semibold">LaslesVPN</span> discover
                        interesting features from us.</p>
                    <div className="flex justify-center">
                        <button className="mt-7 bg-red-500 shadow-2xl shadow-red-300 px-16 py-4 rounded-lg text-slate-50 font-bold hover:bg-red-800 transition-colors">Get Started</button>
                    </div>
                </div>
                <div className="hidden lg:flex lg:pt-8">
                    <img src="src\assets\img\img-principal.png" alt="" className="w-full" />
                </div>
            </section>

            {/*Segundo section con un poco más de información de la empresa*/}
            <section className="flex flex-col items-center w-3/5 space-y-6 mx-auto px-1 py-6 rounded-md shadow-2xl bg-slate-50 text-lg lg:w-3/4 lg:flex lg:flex-row">
                {/* Primer Elemento */}
                <div className="flex flex-col text-center items-center lg:flex-row lg:justify-center lg:border-t-0 lg:w-1/3 lg:space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-700 w-14 h-14 bg-red-100 p-4 rounded-full" viewBox="0 0 24 24">
                        <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                    </svg>
                    <div>
                        <h3 className="font-bold">90+</h3>
                        <p>Users</p>
                    </div>
                </div>
                {/*Segundo Elemento */}
                <div className="flex flex-col text-center items-center border-t-2 w-4/5 pt-5 lg:flex-row lg:justify-center lg:border-l-2 lg:border-t-0 lg:w-1/3 lg:pt-0 lg:space-x-2 lg:py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-700 w-14 h-14 bg-red-100 p-4 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    <div className="">
                        <h3 className="font-bold">30+</h3>
                        <p>Locations</p>
                    </div>
                </div>
                {/*Tercer Elemento */}
                <div className="flex flex-col text-center items-center border-t-2 w-4/5 pt-5 lg:flex-row lg:justify-center lg:border-l-2 lg:border-t-0 lg:w-1/3 lg:pt-0 lg:space-x-2 lg:py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-700 w-14 h-14 bg-red-100 py-4 rounded-full" viewBox="0 0 24 24">
                        <path d="M22 8v4h-20v-4h20zm2-2h-24v8h24v-8zm-21 5l.863-2h1.275l-.863 2h-1.275zm2.066 0l.864-2h1.275l-.863 2h-1.276zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm7.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm2 7v4h-20v-4h20zm2-2h-24v8h24v-8zm-21 5l.863-2h1.275l-.863 2h-1.275zm2.066 0l.863-2h1.275l-.863 2h-1.275zm2.067 0l.863-2h1.275l-.864 2h-1.274zm2.066 0l.863-2h1.274l-.863 2h-1.274zm3.341 0h-1.274l.863-2h1.275l-.864 2zm7.46 0c-.552 0-1-.448-1-1s.448-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm-15.597-16h-2.403l4-5h12l4 5h-2.403l-2.667-3h-9.86l-2.667 3z" />
                    </svg>
                    <div>
                        <h3 className="font-bold">50+</h3>
                        <p>Servers</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FirstSection