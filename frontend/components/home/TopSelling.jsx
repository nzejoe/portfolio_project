import React, { Fragment } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSkeleton from "../reuseable/LoadingSkeleton";

const TopSelling = () => {
    const fetchData = () => {
        let url = "/products/top_products/";
        return axios.get(url);
    };

    const { isLoading, data, isSuccess } = useQuery({
        queryKey: ["top-products"],
        queryFn: () => fetchData(),
    });

    const topProducts = isSuccess ? data.data : Array.from({ length: 4 }).map((_, idx) => ({ id: idx }));

    console.log("topProducts :>> ", topProducts);

    return (
        <section className="section h-[18rem] md:h-[30rem] xl:h-[45rem]">
            <h1 className="section-title">Top Selling</h1>
        </section>
    );
};

export default TopSelling;
