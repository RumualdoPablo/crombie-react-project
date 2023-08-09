
type Card = {
    titulo: string;
    precio: number;
    plan: number;
}

const PlanCards = (props: Card) => {

    const beneficios = {
        1: ["Unlimited bandwith", "Encrypted connection", "No traffic logs", "Works on all devices"],
        2: ["Unlimited bandwith", "Encrypted connection", "No traffic logs", "Works on all devices", "Connect anyware"],
        3: ["Unlimited bandwith", "Encrypted connection", "No traffic logs", "Works on all devices", "Connect anyware", "Get new features"]
    };

    return (
        <section className="flex flex-col items-center mx-16 mb-8 p-14 border-2 border-slate-300 rounded-lg">
            <div className="">
                <img src="src\assets\img\img-card.png" alt="img-card" className="h-52" />
            </div>
            <h3 className="text-2xl mb-4">{props.titulo}</h3>
            <div className="leading-10 h-3/5">
                {props.titulo === "Gratis" ?
                    <ul>
                        {beneficios[1].map((beneficio, index) => (
                            <li key={index}>
                                <svg className="fill-emerald-500 w-8 inline pr-2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero" /></svg>
                                {beneficio}
                            </li>
                        ))}
                    </ul>
                    : props.titulo === "Standard" ?
                        <ul>
                            {beneficios[2].map((beneficio, index) => (
                                <li key={index}>
                                    <svg className="fill-emerald-500 w-8 inline pr-2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero" /></svg>
                                    {beneficio}
                                </li>
                            ))}
                        </ul>
                        :
                        <ul>
                            {beneficios[3].map((beneficio, index) => (
                                <li key={index}>
                                    <svg className="fill-emerald-500 w-8 inline pr-2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero" /></svg>
                                    {beneficio}
                                </li>
                            ))}
                        </ul>
                }
            </div>
            <div className="">
                {props.precio === 0 ? <p className="my-4 text-xl flex justify-center"> Gratis </p>
                : 
                <p className="my-4 text-xl flex justify-center"> ${props.precio}/mo </p> 
                }
                <button className="border-2 border-red-400 rounded-3xl px-16 py-2 font-semibold text-red-600">Comprar</button>
            </div>
        </section>
    )
}

export default PlanCards