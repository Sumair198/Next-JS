'use client'

import { useEffect, useState } from 'react'

export default function Products() {
    const [products, setProducts] = useState([]); // Renamed 'product' to 'products'

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("https://dummyjson.com/products");
                let data = await response.json();
                console.log(data);
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Products List</h1>
            {
                products.map((item) => (
                    <h3>{item.title}</h3>
                ))
            }
        </div>
    );
}
