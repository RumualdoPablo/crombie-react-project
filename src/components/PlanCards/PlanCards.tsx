// import PlanCardsHook from "../hooks/PlanCardsHook";
import useGetData from "../hooks/UseGetData";

type Subscription = {
    title:string;
    price: number | "Free";
    benefits: string[];
    currency: "U$S" | "$ARG";
    type: "monthly" | "daily" | "weekly";
}


const PlanCards = () => {
    // const subscriptions = PlanCardsHook();
    const {
        result: subscriptions,
        error,
        loading
    } = useGetData<Subscription[]>({endpoint:"subscription"})

    return (
        <section className="mt-32 flex flex-col items-center mb-20">
            <h3 className=" text-4xl font-semibold leading-snug mb-10">Choose your plan</h3>
            <p className="w-1/2 text-center">Let's choose the package that is best for you and explore it happily and cheerfully.</p>

            <div className="lg:flex lg:flex-row lg:space-x-4 lg:ml-6">
                {subscriptions?.map((subscription) => (
                    <section className="flex flex-col items-center mx-16 lg:mx-auto my-8 p-14 border-2 border-slate-300 rounded-lg">
                        <div className="">
                            <img src="/img/img-card.png" alt="img-card" className="h-52 lg:h-36" />
                        </div>
                        <h3 className="font-semibold mb-4">{subscription.title}</h3>
                        <div className="md:h-52 lg:h-72 lg:mt-5">
                            <ul className="space-y-4">
                                {subscription.benefits.map((benefit) => (
                                    <li className="">
                                        <svg className="fill-emerald-500 w-8 inline pr-2" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill-rule="nonzero" /></svg>
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mt-8 mb-3 text-lg">
                            {subscription.price !== "Free" ?
                                <p className="font-semibold">{subscription.price}/mo</p> :
                                <p className="font-semibold">{subscription.price}</p>}
                        </div>
                        <button className="border-2 border-red-400 rounded-3xl px-16 py-2 font-semibold text-red-600 btn">Buy</button>
                    </section>
                ))
                }
            </div>
        </section>
    )
}

export default PlanCards