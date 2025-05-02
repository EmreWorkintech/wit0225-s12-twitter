import React from "react";
import { useForm } from "react-hook-form";
import { useCreateTweet } from "../services/mutations";

function NewTweetForm() {
  const { register, reset, handleSubmit } = useForm();
  const mutation = useCreateTweet();
  function submitFn(formData) {
    mutation.mutate(formData);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <input {...register("message")} />
      <button>
        {mutation.isLoading ? <span className="loader"></span> : "Tweet"}
      </button>
    </form>
  );
}

export default NewTweetForm;
