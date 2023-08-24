
import Carousel from "./Carousel/Carousel";

const CustomersSection = () => {
    return (
        <div className='mt-8'>
            <div className=''>
                <div className='w-2/4 text-center mx-auto'>
                    <h3 className='text-4xl font-semibold leading-snug mb-4'>Trusted by Thousands of Happy Customers</h3>
                    <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
                </div>
                <Carousel />
            </div>
        </div>
    )
}

export default CustomersSection