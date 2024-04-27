import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const TopCategories = () => {
    const fetchData = () => {
        let url = "/products/categories/";
        return axios.get(url);
    };

    const { isLoading, data, isSuccess } = useQuery({
        queryKey: ["top-categories"],
        queryFn: () => fetchData(),
    });

    console.log("data :>> ", data);

    return <div>{isLoading ? "Loading" : "TopCategories"}</div>;
};

export default TopCategories;
