import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTweet } from "./api";

export function useCreateTweet() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
    },
  });
}
