import { API_URL } from "../Api/axios";
import { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (): AxiosPromise<FoodData[]> => {

    const response = await API_URL.get("/food");
    return response;
}

const useFoodData = () => {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ["food-data"],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}

export { useFoodData }

