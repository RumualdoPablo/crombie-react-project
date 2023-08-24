import { useEffect, useState } from "react";
import { BASE_URL } from "../../App";

type Suscription = {
    title: string;
    price: number | "Free";
    benefits: string[];
    currency: "U$S" | "$ARG";
    type: "monthly" | "daily" | "weekly";
};

const PlanCardsHook = () => {
    const [subcriptions, setSubcriptions] = useState<Suscription[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [reload, setReload] = useState(true)

    useEffect(() => {
        setLoading(true);
        fetch(`${BASE_URL}/api/subscription`)
            .then((response) => {
                response.json().then((result) => {
                    setSubcriptions(result);
                });
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
        setReload(false)
    }, [reload]);

    if (loading || error) {
        return []
    }

    return subcriptions
};

export default PlanCardsHook