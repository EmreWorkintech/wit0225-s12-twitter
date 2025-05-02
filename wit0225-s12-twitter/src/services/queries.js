import { useQuery } from "@tanstack/react-query";
import { getTweets } from "./api";

export function useTweets() {
  return useQuery({
    queryKey: ["tweets"],
    queryFn: getTweets,
    staleTime: 15 * 1000, //select, enable
  });
}
