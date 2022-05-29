import { useQuery, useQueryClient } from "react-query";
import { getPosts } from "../api/rest/requests";

export const usePostsList = () => {
    const queryClient = useQueryClient();

    const {data, isFetching} = useQuery(['posts'], () => getPosts());

    return {
        data
    };
};