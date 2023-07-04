import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosPromise } from "axios";
import { API_URL } from "../Api/axios";
import { FoodData } from "../interface/FoodData";

const postData = async (data: FoodData): AxiosPromise<any> => {

    const response = await API_URL.post("/food", data);
    return response;
}

const useFoodDataMutate = () => {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(["food-data"]);
        }
    })

    return mutate
}

export { useFoodDataMutate };

