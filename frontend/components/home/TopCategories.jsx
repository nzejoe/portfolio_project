import React, { Fragment } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSkeleton from "../reuseable/LoadingSkeleton";

const TopCategories = () => {
    const fetchData = () => {
        let url = "/products/categories/";
        return axios.get(url);
    };

    const { isLoading, data, isSuccess } = useQuery({
        queryKey: ["top-categories"],
        queryFn: () => fetchData(),
    });

    const topCategories = isSuccess ? data.data : Array.from({ length: 4 }).map((_, idx) => ({ id: idx }));

    console.log("topCategories :>> ", topCategories);

    return (
        <section className="max-w-next-max mx-auto px-5 h-[18rem] md:h-[30rem] xl:h-[45rem]">
            <div className="">
                <div className={""}>
                    <h1 className="text-2xl font-bold uppercase my-10 xl:text-4xl xl:my-20">Top categories</h1>
                    <div className={"md:grid grid-cols-2 gap-5"}>
                        {topCategories.map((category, idx) => (
                            <Fragment key={category.id}>
                                {!isSuccess ? (
                                    <div className="h-[195px] rounded-x overflow-hidden mb-5 md:mb-0 md:h-[250px] xl:h-[294px]">
                                        <LoadingSkeleton />
                                    </div>
                                ) : (
                                    <div
                                        className={
                                            "relative border border-primary rounded-xv overflow-hidden mb-5 md:mb-0"
                                        }
                                    >
                                        <div className={"w-full h-full"}>
                                            <img
                                                src={category.image}
                                                alt={category.product_name}
                                                className="w-full h-full object-cover"
                                            ></img>
                                            <div className={"absolute top-1/2 px-5"}>
                                                <h2 className="font-semibold mb-2">{category.name}</h2>
                                                <button className="border border-primary text-primary bg-white rounded px-2 py-1 font-medium hover:bg-primary hover:text-white">
                                                    shop now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
