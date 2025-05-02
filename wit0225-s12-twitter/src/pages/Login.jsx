import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { API } from "../api";
import { userContext } from "../contexts/UserContext";

function Login() {
  const { login, user } = useContext(userContext);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      email: user ? user.email : "",
      password: "",
    },
    mode: "onChange",
  });

  const history = useHistory();

  function submitFn(formData) {
    API.post("/login", formData)
      .then((res) => {
        login(res.data);
        toast.success(`Merhaba ${res.data.email}, tekrar hoş geldin...`);
        history.push("/feed");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="w-1/4 min-w-80 mx-auto">
      <FontAwesomeIcon
        icon={faTwitter}
        className="text-blue-400 text-5xl mt-12 mb-8"
      />
      <form className="flex flex-col gap-8" onSubmit={handleSubmit(submitFn)}>
        <h1 className="text-4xl font-bold">Log in to Twitter</h1>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Geçerli bir email giriniz!..",
            },
          })}
          className="p-4 rounded border border-slate-200"
          placeholder="Phone number, email address"
          autoFocus={user ? false : true}
        />
        {errors.email && (
          <p className="text-red-900 bg-red-200 border border-red-900 rounded p-4">
            {errors.email.message}
          </p>
        )}
        <input
          {...register("password", {
            required: {
              value: true,
              message: "Bu alanı boş bırakmayınız!..",
            },
            validate: function (value) {
              return value.length >= 8 || "Strong password giriniz!..";
            },
          })}
          className="p-4 rounded border border-slate-200"
          placeholder="Password"
          type="password"
          autoFocus={user ? true : false}
        />
        {errors.password && (
          <p className="text-red-900 bg-red-200 border border-red-900 rounded p-4">
            {errors.password.message}
          </p>
        )}
        <button
          disabled={!isValid}
          className="cursor-pointer hover:bg-blue-500 bg-blue-400 rounded-full p-4 text-white text-center disabled:bg-slate-200 disabled:text-slate-500"
        >
          Log In
        </button>
        <div className="flex justify-between text-blue-400">
          <Link to="/forgot_password">Forgot Password?</Link>
          <Link to="/sign-up">Sign up to Twitter</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
