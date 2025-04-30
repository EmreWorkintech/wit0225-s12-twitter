import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTweet } from "../store/actions/tweetActions";

function NewTweetForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  function submitFn(formData) {
    dispatch(addTweet(formData));
  }
  return (
    <form onSubmit={handleSubmit(submitFn)}>
      <input {...register("message")} />
      <button>Tweet</button>
    </form>
  );
}

export default NewTweetForm;
