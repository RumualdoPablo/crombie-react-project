import { useEffect, useState } from "react";
import { BASE_URL } from "../../App";

type Testimonial = {
    avatar: string,
    fullName: string,
    testimonial: string,
};

const TestimonialsHook = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | undefined>()

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/api/testimonial`)
            .then((res) => {
                res.json()
                    .then((result) => {
                        setTestimonials(result)
                    })
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading || error) {
        return []
    }

    return testimonials
}

export default TestimonialsHook