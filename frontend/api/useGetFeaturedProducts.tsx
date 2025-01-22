"use client"
import { useEffect, useState } from "react";
import { ProductType } from "@/types/product";

export function useGetFeaturedProducts() {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`)
            .then(res => {
                console.log("Status:", res.status);
                return res.json();
            })
            .then(data => {
                console.log("Datos:", data);
                if (data?.data) {
                    setResult(data.data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error("Error:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return { loading, result, error };
}