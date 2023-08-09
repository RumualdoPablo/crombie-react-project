
import "../styles.css"

const FirstSection = () => {
    return (
        <div className="h-screen">{/*Primer section, contiene el titulo y un botón call to action*/}
            <section className="flex justify-center mb-40">
                <div className="mt-4 pl-7">
                    <div className="w-2/3">
                        <h1 className="text-5xl font-semibold mt-20 mb-3 leading-tight ">Want anything to be easy with
                        <span className="font-extrabold"> LaslesVPN</span>.</h1>
                    </div>
                    <p className="text-base font-thin">Provide a network for all your needs with ease and fun using <span className="font-semibold">LaslesVPN</span> discover
                        interesting features from us.</p>
                    <button className="mt-7 bg-red-500 shadow-2xl shadow-red-300 px-16 py-4 rounded-lg text-slate-50 font-bold">Get Started</button>
                </div>
                <div className=" pt-8">
                    <img src="src\assets\img\img-principal.png" alt="" className="w-full"/>
                </div>
            </section>
            {/*Segundo section con un poco más de información de la empresa*/}
            <section className="flex justify-evenly w-3/4 mx-auto px-1 py-5 rounded-md shadow-2xl bg-slate-50 text-lg">
                {/* Primer Elemento */}
                <div className="flex items-center space-x-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-700 w-14 h-14 bg-red-100 p-4 rounded-full" viewBox="0 0 24 24">
                        <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
                    </svg>
                    <div>
                        <h3 className="font-bold">90+</h3>
                        <p>Users</p>
                    </div>
                </div>
                {/*Segundo Elemento */}
                <div className="flex items-center space-x-2 border-l-2 pl-20 py-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-700 w-14 h-14 bg-red-100 p-4 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                    </svg>
                    <div className="">
                        <h3 className="font-bold">30+</h3>
                        <p>Locations</p>
                    </div>
                </div>
                {/*Tercer Elemento */}
                <div className="flex items-center space-x-2 border-l-2 pl-20">
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